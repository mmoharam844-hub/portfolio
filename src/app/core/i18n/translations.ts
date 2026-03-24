export type Lang = 'en' | 'ar';

export const TRANSLATIONS: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.download_cv': { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
  'nav.toggle_menu': { en: 'Toggle mobile menu', ar: 'القائمة' },

  // Nav Items
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About', ar: 'نبذة عني' },
  'nav.tech_stack': { en: 'Tech Stack', ar: 'التقنيات' },
  'nav.projects': { en: 'Projects', ar: 'المشاريع' },
  'nav.certificates': { en: 'Certificates', ar: 'الشهادات' },
  'nav.contact': { en: 'Contact', ar: 'تواصل' },

  // Hero
  'hero.welcome': { en: 'Welcome to my portfolio', ar: 'مرحباً بك في معرض أعمالي' },
  'hero.greeting': { en: "Hi, I'm", ar: 'مرحباً، أنا' },
  'hero.view_projects': { en: 'View My Projects', ar: 'عرض مشاريعي' },
  'hero.get_in_touch': { en: 'Get In Touch', ar: 'تواصل معي' },

  // About
  'about.title_highlight': { en: 'About', ar: 'نبذة' },
  'about.title_rest': { en: ' Me', ar: ' عني' },
  'about.subtitle': { en: 'Get to know more about my journey and expertise', ar: 'تعرف أكثر على مسيرتي وخبراتي' },
  'about.bio_extra': {
    en: "I'm always eager to learn new technologies and take on challenging projects that push my skills further. My goal is to create software that makes a real difference and delivers value to users and businesses alike.",
    ar: 'أسعى دائماً لتعلم تقنيات جديدة والعمل على مشاريع تتحدى مهاراتي وتطورها. هدفي هو بناء برمجيات تحدث فرقاً حقيقياً وتقدم قيمة للمستخدمين والشركات على حد سواء.',
  },

  // Tech Stack
  'tech.title_highlight': { en: 'Tech', ar: 'التقنيات' },
  'tech.title_rest': { en: ' Stack', ar: ' والأدوات' },
  'tech.subtitle': { en: 'Technologies and tools I work with on a daily basis', ar: 'التقنيات والأدوات التي أعمل بها يومياً' },
  'tech.all': { en: 'All', ar: 'الكل' },
  'tech.frontend': { en: 'Frontend', ar: 'واجهة أمامية' },
  'tech.backend': { en: 'Backend', ar: 'واجهة خلفية' },
  'tech.database': { en: 'Database', ar: 'قواعد بيانات' },
  'tech.tools': { en: 'Tools', ar: 'أدوات' },

  // Projects
  'projects.title_highlight': { en: 'My', ar: 'مشاريعي' },
  'projects.title_rest': { en: ' Projects', ar: '' },
  'projects.subtitle': { en: "A selection of projects I've built showcasing my full stack expertise", ar: 'مجموعة من المشاريع التي قمت ببنائها تعرض خبرتي في تطوير الويب' },
  'projects.live_demo': { en: 'Live Demo', ar: 'معاينة' },
  'projects.github': { en: 'GitHub', ar: 'GitHub' },
  'projects.view_details': { en: 'View Details', ar: 'عرض التفاصيل' },

  // Certificates
  'certs.title_highlight': { en: 'My', ar: 'شهاداتي' },
  'certs.title_rest': { en: ' Certificates', ar: '' },
  'certs.subtitle': { en: 'Professional certifications and completed courses', ar: 'الشهادات المهنية والدورات المعتمدة' },
  'certs.credential': { en: 'Credential ID', ar: 'رقم الشهادة' },

  // Contact
  'contact.title_highlight': { en: 'Get In', ar: 'تواصل' },
  'contact.title_rest': { en: ' Touch', ar: ' معي' },
  'contact.subtitle': { en: "Have a project in mind or want to collaborate? I'd love to hear from you!", ar: 'عندك مشروع أو تحب نتعاون؟ يسعدني التواصل معك!' },
  'contact.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.location': { en: 'Location', ar: 'الموقع' },
  'contact.follow_me': { en: 'Follow Me', ar: 'تابعني' },
  'contact.download_cv': { en: 'Download My CV', ar: 'تحميل السيرة الذاتية' },

  // Footer
  'footer.rights': { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  'footer.back_to_top': { en: 'Back to Top', ar: 'العودة للأعلى' },

  // 404
  'notfound.title': { en: '404', ar: '404' },
  'notfound.heading': { en: 'Page Not Found', ar: 'الصفحة غير موجودة' },
  'notfound.message': { en: "The page you're looking for doesn't exist or has been moved.", ar: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.' },
  'notfound.back_home': { en: 'Back to Home', ar: 'العودة للرئيسية' },

  // Theme toggle
  'theme.switch_light': { en: 'Switch to light mode', ar: 'التبديل للوضع الفاتح' },
  'theme.switch_dark': { en: 'Switch to dark mode', ar: 'التبديل للوضع الداكن' },

  // Welcome splash
  'splash.welcome': { en: 'Welcome to my digital space', ar: 'مرحباً بك في عالمي الرقمي' },
  'splash.loading': { en: '> initializing portfolio...', ar: '> جاري تحميل المعرض...' },
  'splash.enter': { en: 'Explore', ar: 'استكشف' },
  'splash.status': { en: 'available for hire · Cairo, Egypt', ar: 'متاح للتوظيف · القاهرة، مصر' },

  // Language toggle
  'lang.switch': { en: 'عربي', ar: 'EN' },
  'lang.aria': { en: 'Switch to Arabic', ar: 'Switch to English' },

  // Personal Info
  'personal.title': { en: 'Full Stack Developer', ar: 'مطور ويب متكامل' },
  'personal.subtitle': {
    en: 'Building scalable multi-role SaaS platforms with Angular and .NET',
    ar: 'بناء منصات SaaS متعددة الأدوار وقابلة للتوسع باستخدام Angular و .NET',
  },
  'personal.bio': {
    en: 'Full Stack Developer with hands-on experience building scalable multi-role SaaS platforms using Angular and .NET. Skilled in developing RESTful APIs with ASP.NET Core, managing SQL databases, and delivering complete end-to-end features from backend to frontend. Electrical Engineering background brings a disciplined, systems-thinking approach to software architecture and problem-solving.',
    ar: 'مطور ويب متكامل لديه خبرة عملية في بناء منصات SaaS متعددة الأدوار وقابلة للتوسع باستخدام Angular و .NET. متمكن في تطوير RESTful APIs باستخدام ASP.NET Core وإدارة قواعد بيانات SQL وتسليم ميزات كاملة من الباكند للفرونت. خلفية هندسية كهربية تضيف منهجية منضبطة في هندسة البرمجيات وحل المشكلات.',
  },
  'personal.highlight_education': { en: 'Education', ar: 'التعليم' },
  'personal.highlight_projects': { en: 'Projects Completed', ar: 'مشاريع منجزة' },
  'personal.highlight_technologies': { en: 'Technologies', ar: 'تقنيات' },
  'personal.highlight_focus': { en: 'Focus', ar: 'التخصص' },
  'personal.highlight_visitors': { en: 'Visitors', ar: 'زائر' },
  'personal.location': { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },

  // Quote Calculator
  'calc.title': { en: 'What Can I Build For You?', ar: 'إيه اللي أقدر أبنيه ليك؟' },
  'calc.step1': { en: 'Project Type', ar: 'نوع المشروع' },
  'calc.step2': { en: 'Budget Range', ar: 'نطاق الميزانية' },
  'calc.step3': { en: 'Timeline', ar: 'المدة الزمنية' },
  'calc.step4': { en: 'Your Package', ar: 'الباقة المناسبة' },
  'calc.next': { en: 'Next', ar: 'التالي' },
  'calc.back': { en: 'Back', ar: 'رجوع' },
  'calc.reset': { en: 'Start Over', ar: 'ابدأ من جديد' },
  'calc.lets_talk': { en: "Let's Talk", ar: 'تواصل معي' },
  'calc.features': { en: 'Included Features', ar: 'المميزات المتضمنة' },
  'calc.techs': { en: 'Technologies', ar: 'التقنيات المستخدمة' },
  'calc.estimate': { en: 'Estimated Price', ar: 'السعر التقديري' },
  'calc.timeline_label': { en: 'Estimated Timeline', ar: 'المدة التقديرية' },
  'calc.type_landing': { en: 'Landing Page', ar: 'صفحة هبوط' },
  'calc.type_webapp': { en: 'Web Application', ar: 'تطبيق ويب' },
  'calc.type_ecommerce': { en: 'E-Commerce', ar: 'متجر إلكتروني' },
  'calc.type_dashboard': { en: 'Dashboard', ar: 'لوحة تحكم' },
  'calc.custom_budget': { en: 'Custom Budget', ar: 'ميزانية مخصصة' },
  'calc.custom_budget_input': { en: 'Your budget (e.g. $2,000)', ar: 'ميزانيتك (مثال: $2,000)' },
  'calc.custom_desc': { en: 'Describe what you need', ar: 'اوصف اللي محتاجه' },
  'calc.custom_desc_placeholder': { en: 'Tell me about your project requirements, features you need, any references...', ar: 'احكيلي عن متطلبات مشروعك، المميزات اللي محتاجها، أي مراجع...' },
  'calc.send_whatsapp': { en: 'Send via WhatsApp', ar: 'أرسل عبر واتساب' },
  'calc.time1': { en: '1-2 Weeks', ar: '١-٢ أسابيع' },
  'calc.time2': { en: '2-4 Weeks', ar: '٢-٤ أسابيع' },
  'calc.time3': { en: '1-2 Months', ar: '١-٢ شهور' },
  'calc.time4': { en: '2+ Months', ar: '+٢ شهور' },

  // Project Detail Page
  'project_detail.back_to_projects': { en: 'Back to Projects', ar: 'العودة للمشاريع' },
  'project_detail.video_demo': { en: 'Video Demo', ar: 'عرض فيديو' },
  'project_detail.key_features': { en: 'Key Features', ar: 'المميزات الرئيسية' },
  'project_detail.technologies': { en: 'Technologies Used', ar: 'التقنيات المستخدمة' },
  'project_detail.gallery': { en: 'Screenshots', ar: 'لقطات الشاشة' },
  'project_detail.role': { en: 'Role', ar: 'الدور' },
  'project_detail.duration': { en: 'Duration', ar: 'المدة' },
  'project_detail.about_project': { en: 'About This Project', ar: 'عن هذا المشروع' },
  'project_detail.interested': { en: 'Interested in a similar project?', ar: 'مهتم بمشروع مشابه؟' },
  'project_detail.interested_desc': { en: "Let's discuss how I can help bring your idea to life with modern web technologies.", ar: 'خلينا نتكلم إزاي أقدر أساعدك تحول فكرتك لواقع بتقنيات ويب حديثة.' },
  'project_detail.view_all_projects': { en: 'View All Projects', ar: 'عرض كل المشاريع' },

  // Educational Center Project
  'project.edu_center_title': { en: 'Educational Center Management System', ar: 'نظام إدارة مركز تعليمي' },
  'project.edu_center_desc': {
    en: 'A web-based system to manage students, teachers, classes, and payments for an educational center with authentication, user roles, and layered architecture.',
    ar: 'نظام ويب لإدارة الطلاب والمعلمين والفصول والمدفوعات لمركز تعليمي مع مصادقة وأدوار مستخدمين وهندسة طبقية.',
  },
  'project.edu_center_long_desc': {
    en: 'A comprehensive web-based system designed to streamline the management of an educational center. The platform handles student enrollment, teacher assignments, class scheduling, and payment processing. Built with a layered architecture (Presentation, Business Logic, Data Access) to ensure scalability and maintainability. Implemented robust authentication and authorization using Identity Framework with role-based access control for administrators, teachers, and students.',
    ar: 'نظام ويب شامل مصمم لتسهيل إدارة مركز تعليمي. المنصة تتعامل مع تسجيل الطلاب وتعيين المعلمين وجدولة الفصول ومعالجة المدفوعات. تم بناؤه بهندسة طبقية (العرض، منطق الأعمال، الوصول للبيانات) لضمان قابلية التوسع والصيانة. تم تنفيذ مصادقة وتفويض قوي باستخدام Identity Framework مع التحكم بالوصول المبني على الأدوار للمسؤولين والمعلمين والطلاب.',
  },
  'project.edu_center_role': { en: 'Full Stack Developer', ar: 'مطور ويب متكامل' },
  'project.edu_center_duration': { en: '3 Months', ar: '٣ شهور' },
  'project.edu_center_feature_1': { en: 'Student & Teacher Management with CRUD operations', ar: 'إدارة الطلاب والمعلمين مع عمليات CRUD' },
  'project.edu_center_feature_2': { en: 'Role-based authentication using Identity Framework', ar: 'مصادقة مبنية على الأدوار باستخدام Identity Framework' },
  'project.edu_center_feature_3': { en: 'Class scheduling and payment tracking system', ar: 'نظام جدولة الفصول وتتبع المدفوعات' },
  'project.edu_center_feature_4': { en: 'Layered architecture for scalability and maintainability', ar: 'هندسة طبقية لقابلية التوسع والصيانة' },

  // Nextlearnhub Project
  'project.nextlearnhub_title': { en: 'Nextlearnhub', ar: 'Nextlearnhub' },
  'project.nextlearnhub_desc': {
    en: 'A multi-role EdTech SaaS platform with four independent portals for Super Admin, Providers, Profile Subdomains, and End Users.',
    ar: 'منصة SaaS تعليمية متعددة الأدوار بأربع بوابات مستقلة للمسؤول الأعلى ومقدمي الخدمات والنطاقات الفرعية والمستخدمين.',
  },
  'project.nextlearnhub_long_desc': {
    en: 'A comprehensive multi-role EdTech SaaS platform featuring four independent portals. The Super Admin dashboard provides complete platform management. The Provider portal allows educational institutions to manage their courses and content. Each provider gets a unique subdomain with a dynamic profile system. The End User portal offers course browsing, enrollment workflows, and personalized learning dashboards. Built with a modern tech stack focusing on performance, scalability, and user experience.',
    ar: 'منصة SaaS تعليمية شاملة متعددة الأدوار تتضمن أربع بوابات مستقلة. لوحة تحكم المسؤول الأعلى توفر إدارة كاملة للمنصة. بوابة مقدمي الخدمات تسمح للمؤسسات التعليمية بإدارة دوراتها ومحتواها. كل مقدم خدمة يحصل على نطاق فرعي فريد مع نظام ملف شخصي ديناميكي. بوابة المستخدم النهائي توفر تصفح الدورات وعمليات التسجيل ولوحات تعلم مخصصة. تم بناؤها بتقنيات حديثة مع التركيز على الأداء وقابلية التوسع وتجربة المستخدم.',
  },
  'project.nextlearnhub_role': { en: 'Full Stack Developer', ar: 'مطور ويب متكامل' },
  'project.nextlearnhub_duration': { en: '4 Months', ar: '٤ شهور' },
  'project.nextlearnhub_feature_1': { en: 'Multi-role portal system (Super Admin, Provider, End User)', ar: 'نظام بوابات متعدد الأدوار (مسؤول أعلى، مقدم خدمة، مستخدم)' },
  'project.nextlearnhub_feature_2': { en: 'Dynamic subdomain system for provider profiles', ar: 'نظام نطاقات فرعية ديناميكي لملفات مقدمي الخدمات' },
  'project.nextlearnhub_feature_3': { en: 'Course enrollment workflows and learning dashboards', ar: 'عمليات تسجيل الدورات ولوحات تعلم مخصصة' },
  'project.nextlearnhub_feature_4': { en: 'Comprehensive admin dashboard for platform management', ar: 'لوحة تحكم شاملة لإدارة المنصة' },

  // Online Learning Platform Project
  'project.olp_title': { en: 'Online Learning Platform', ar: 'منصة تعليم أونلاين' },
  'project.olp_desc': {
    en: 'An online learning platform for diagnostic radiology with student & admin portals, course management, subscriptions, and payment tracking.',
    ar: 'منصة تعليم أونلاين للأشعة التشخيصية مع بوابة طالب وأدمن وإدارة كورسات واشتراكات وتتبع مدفوعات.',
  },
  'project.olp_long_desc': {
    en: 'A complete online learning platform built for a diagnostic radiology instructor. The platform features two separate portals: a student-facing side with course browsing, registration, subscription management, video course viewer, and a personal notes system. The admin portal provides full control over courses, lessons, student management, and payment tracking. Built as a static frontend application using vanilla JavaScript with localStorage for data persistence, making it lightweight and easy to deploy.',
    ar: 'منصة تعليم أونلاين متكاملة مصممة لدكتور أشعة تشخيصية. المنصة فيها بوابتين منفصلتين: واجهة الطالب فيها تصفح الكورسات والتسجيل وإدارة الاشتراكات ومشاهدة الفيديوهات ونظام ملاحظات شخصي. بوابة الأدمن بتوفر تحكم كامل في الكورسات والدروس وإدارة الطلاب وتتبع المدفوعات. تم بناؤها كتطبيق فرونت إند ثابت باستخدام JavaScript مع localStorage لحفظ البيانات.',
  },
  'project.olp_role': { en: 'Frontend Developer', ar: 'مطور واجهة أمامية' },
  'project.olp_duration': { en: '2 Weeks', ar: 'أسبوعين' },
  'project.olp_feature_1': { en: 'Student portal with course browsing, registration & video viewer', ar: 'بوابة طالب مع تصفح الكورسات والتسجيل ومشاهدة الفيديوهات' },
  'project.olp_feature_2': { en: 'Admin dashboard for courses, lessons, students & payments', ar: 'لوحة تحكم أدمن للكورسات والدروس والطلاب والمدفوعات' },
  'project.olp_feature_3': { en: 'Subscription system with multiple payment methods', ar: 'نظام اشتراكات مع طرق دفع متعددة' },
  'project.olp_feature_4': { en: 'Personal notes system and learning progress tracking', ar: 'نظام ملاحظات شخصي وتتبع تقدم التعلم' },
};
