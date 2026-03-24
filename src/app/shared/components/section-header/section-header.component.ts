import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <div class="text-center mb-16">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        <span class="text-[var(--color-primary)]">{{ titleHighlight() }}</span>
        {{ titleRest() }}
      </h2>
      @if (subtitle()) {
        <p class="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2"
           [class]="themeTextSecondary">
          {{ subtitle() }}
        </p>
      }
      <div class="w-20 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  titleHighlight = input<string>('');
  titleRest = input<string>('');
  subtitle = input<string>('');

  readonly themeTextSecondary = 'text-[var(--color-dark-text-secondary)] [data-theme=light]_&:text-[var(--color-light-text-secondary)]';
}
