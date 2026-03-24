import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, runTransaction, onValue } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class VisitorCounterService {
  private platformId = inject(PLATFORM_ID);

  visitorCount = signal<number>(0);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initFirebase();
    }
  }

  private initFirebase(): void {
    try {
      const app = getApps().length ? getApps()[0] : initializeApp(environment.firebase);
      getAnalytics(app);
      const db = getDatabase(app);
      const countRef = ref(db, 'visitors/count');

      onValue(countRef, (snapshot) => {
        this.visitorCount.set(snapshot.val() ?? 0);
      });

      const today = new Date().toDateString();
      if (localStorage.getItem('portfolio-last-visit') !== today) {
        runTransaction(countRef, (current) => (current ?? 0) + 1);
        localStorage.setItem('portfolio-last-visit', today);
      }
    } catch {
      // Firebase not configured
    }
  }
}
