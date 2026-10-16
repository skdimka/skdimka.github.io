import type { ImageMetadata } from 'astro'
import type { Lang } from '@/modules/I18n/i18n'
import mtppkHome from '@/assets/projects/mtppk/01-home.jpg'
import mtppkStationsMap from '@/assets/projects/mtppk/02-stations-map.jpg'
import mtppkTourismMap from '@/assets/projects/mtppk/03-tourism-map.jpg'
import mtppkTicketSearch from '@/assets/projects/mtppk/04-ticket-search.jpg'
import mtppkCalculator from '@/assets/projects/mtppk/05-calculator.jpg'
import rgustHome from '@/assets/projects/rgust/01-home.jpg'
import rgustAccessibilityPanel from '@/assets/projects/rgust/02-accessibility-panel.jpg'
import rgustValues from '@/assets/projects/rgust/03-values.jpg'
import rgustAccessibleEnvironment from '@/assets/projects/rgust/04-accessible-environment.jpg'
import rgustWelcome from '@/assets/projects/rgust/05-welcome.jpg'
import mietCareerSelector from '@/assets/projects/miet/01-career-selector.jpg'
import mietCareerSelectorState from '@/assets/projects/miet/02-career-selector-state.jpg'
import mietHome from '@/assets/projects/miet/03-home.jpg'
import mietStructure from '@/assets/projects/miet/04-structure.jpg'
import mietContactsMap from '@/assets/projects/miet/05-contacts-map.jpg'
import csuHero from '@/assets/projects/csu/01-hero.jpg'
import csuQuickLinks from '@/assets/projects/csu/02-quick-links.jpg'
import csuParallax from '@/assets/projects/csu/03-parallax.jpg'
import pgusaDpoHome from '@/assets/projects/pgusa-dpo/01-home.jpg'
import pgusaDpoCatalog from '@/assets/projects/pgusa-dpo/02-catalog.jpg'
import pgusaDpoProgram from '@/assets/projects/pgusa-dpo/03-program.jpg'
import pgusaDpoWhy from '@/assets/projects/pgusa-dpo/04-why.jpg'
import tyumsmuChatbot from '@/assets/projects/tyumsmu/01-chatbot.jpg'
import tyumsmuChatbotDialog from '@/assets/projects/tyumsmu/02-chatbot-dialog.jpg'
import tyumsmuHome from '@/assets/projects/tyumsmu/03-home.jpg'
import tnimcHero from '@/assets/projects/tnimc/01-hero.jpg'
import tnimcDevelopments from '@/assets/projects/tnimc/02-developments.jpg'
import tnimcDocuments from '@/assets/projects/tnimc/03-documents.jpg'
import tnimcMedia from '@/assets/projects/tnimc/04-media.jpg'
import tnimcMediaEvents from '@/assets/projects/tnimc/05-media-events.jpg'
import techleadCenterHero from '@/assets/projects/techlead/01-center-hero.jpg'
import techleadCenter404 from '@/assets/projects/techlead/02-center-404.jpg'
import techleadCenterActivities from '@/assets/projects/techlead/03-center-activities.jpg'
import techleadProgramHero from '@/assets/projects/techlead/04-program-hero.jpg'
import techleadProgramArchitecture from '@/assets/projects/techlead/05-program-architecture.jpg'
import techleadCenterBlog from '@/assets/projects/techlead/06-center-blog.jpg'
import volgsmuHero from '@/assets/projects/volgsmu/01-hero.jpg'
import volgsmuPrograms from '@/assets/projects/volgsmu/02-programs.jpg'
import volgsmuStudentLife from '@/assets/projects/volgsmu/03-student-life.jpg'
import volgsmuStats from '@/assets/projects/volgsmu/04-stats.jpg'

export const links = {
  telegram: 'https://t.me/Skdimkaa',
  email: 'mailto:dyysvv@icloud.com',
  linkedin: 'https://www.linkedin.com/in/dmitrii-skopintsev-dev',
}

export interface Profile {
  name: string
  role: string
  tagline: string
  location: string
  cv: string
}

export interface ProjectSlide {
  image: ImageMetadata
  caption: string
}

export interface Project {
  title: string
  /** Live sites; the first one is the main link. */
  links: string[]
  /** What exactly I did on the project. */
  role: string
  summary: string
  highlights: string[]
  stack: string[]
  slides: ProjectSlide[]
  /**
   * Closed project: no screenshots allowed. Shown instead of the slider —
   * a module tree that gives an idea of the architecture.
   */
  nda?: { structure: string[] }
}

export interface Job {
  role: string
  company: string
  period: string
  points: string[]
}

export interface SiteContent {
  profile: Profile
  projects: Project[]
  experience: Job[]
  skills: Record<string, string[]>
}

const skillItems = {
  core: [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Astro',
    'Vue',
    'HTML',
    'CSS / SCSS',
  ],
  state: ['Redux Toolkit', 'RTK Query', 'MobX', 'React Hook Form', 'Zod'],
  motion: ['GSAP', 'ScrollTrigger', 'Three.js', 'react-three-fiber'],
  tooling: [
    'Vite',
    'Webpack',
    'Storybook',
    'Vitest',
    'Playwright',
    'Git',
    'Figma',
  ],
}

const en: SiteContent = {
  profile: {
    name: 'Dmitrii Skopintsev',
    role: 'Frontend Developer',
    tagline:
      'I build fast, accessible interfaces with React and TypeScript — and like to make them move.',
    location: 'Tomsk, Russia · open to relocation',
    cv: '/Dmitrii_Skopintsev_CV.pdf',
  },
  projects: [
    {
      title: 'Grant program personal account: surveys module',
      links: [],
      role: 'Built the surveys module from scratch inside the team’s React app: pages, question controls, API layer and mocks; plus dashboard and events fixes.',
      summary:
        'Closed personal account of a grant program. Participants take multi-step expert surveys; answers are saved as they go.',
      highlights: [
        'Four question types as reusable controls: single choice, text, range slider with tooltips, and points distribution with a live “points left” counter',
        'Survey list, survey page with summary cards, question page with breadcrumbs, step navigation and a dialog — logic kept in a separate survey-question.logic.ts',
        'RTK Query API (createApi) with question save and autosave; MSW mocks for every endpoint so the UI was built before the backend',
        'Anonymous access with a browser fingerprint (FingerprintJS, lazy-loaded, UUID fallback); copy and paste disabled in answers',
        'Dashboard: social links card, events navigation tabs',
      ],
      stack: [
        'React',
        'TypeScript',
        'MUI',
        'RTK Query',
        'TanStack Router',
        'MSW',
        'FingerprintJS',
      ],
      slides: [],
      nda: {
        structure: [
          'Survey/',
          '  surveys-page · survey-page · survey-summary-card',
          '  survey-question-page · survey-question-breadcrumbs',
          '  survey-dialog · question-actions · survey-layout',
          '  survey-question.logic.ts',
          '  controls/',
          '    RadioQuestionControl',
          '    TextQuestionControl',
          '    RangeQuestionControl',
          '    DistributionQuestionControl',
          'SurveyApi/',
          '  api.ts — RTK Query: surveys, question, save, autosave',
          '  api-mocks.ts — MSW handlers',
          '  fingerprint.ts · types.ts',
        ],
      },
    },
    {
      title: 'Technological Leadership Center',
      links: ['https://techlead.institute', 'https://edu.techlead.institute'],
      role: 'Built both sites from scratch: pixel-perfect markup from Figma, responsive layout from mobile to wide screens, all animations and interactive pages.',
      summary:
        'Corporate website of the Center and a landing for its international educational program in the bioeconomy.',
      highlights: [
        'Glassmorphism UI, full-screen hero slider, scroll-driven and text reveal animations (GSAP, ScrollTrigger, SplitText)',
        'Interactive 404: a light follows the cursor across 592 pure-CSS glass tiles at a stable 60 fps',
        'Program landing: smooth scrolling (Lenis), modules accordion, participant path timeline',
        'Blog with category tabs, projects, site search',
      ],
      stack: [
        'Figma',
        'GSAP',
        'ScrollTrigger',
        'SplitText',
        'Lenis',
        'Swiper',
        'HTMX',
      ],
      slides: [
        { image: techleadCenterHero, caption: 'Center: hero slider' },
        { image: techleadCenter404, caption: 'Center: interactive 404' },
        {
          image: techleadCenterActivities,
          caption: 'Center: activities and glass CTA',
        },
        { image: techleadProgramHero, caption: 'Program: hero with partners' },
        {
          image: techleadProgramArchitecture,
          caption: 'Program: modules accordion',
        },
        {
          image: techleadCenterBlog,
          caption: 'Center: blog with category tabs',
        },
      ],
    },
    {
      title: 'MTPPK website modernization',
      links: ['https://mtppk.ru'],
      role: 'Joined an ongoing project and brought it to the public release: finished and reworked modules after colleagues, added new features, fixed mobile layouts.',
      summary:
        'Website of a commuter rail company (Russian Railways group): ticket search, station and tourism maps, passenger and B2B accounts, online shop.',
      highlights: [
        'Stations map: new place cards, station and route dialogs, map language switching, mobile layout',
        'Ticket search: new search features, station picker widget and home page block, date picker fixes',
        'Passenger account: profile, support requests log with replies and attachments, email change',
        'PDF viewer on pdf.js with a worker fix for production, new table types with a mobile accordion and fullscreen mode, Excel download',
        'Language switcher for desktop and mobile, high-contrast logos, fixes on stations, news, organization and 404 pages',
      ],
      stack: [
        'Pug',
        'SCSS',
        'JavaScript',
        'Mapbox GL',
        'pdf.js',
        'htmx',
        'Webpack',
      ],
      slides: [
        { image: mtppkHome, caption: 'Home: ticket search and station widget' },
        {
          image: mtppkStationsMap,
          caption: 'Stations map with routes and filter',
        },
        { image: mtppkTourismMap, caption: 'Tourism map with place cards' },
        { image: mtppkTicketSearch, caption: 'Ticket search with filters' },
        { image: mtppkCalculator, caption: 'Fare calculator' },
      ],
    },
    {
      title: 'Admin panel for an AI assistant',
      links: [],
      role: 'Created the project from scratch and built the whole admin panel: architecture, auth, API layer and pages.',
      summary:
        'Internal admin panel for a Telegram AI assistant: managing users and their profiles, interests, documents and images the assistant works with.',
      highlights: [
        'Vite + React + TypeScript project setup with ESLint, Prettier and a shadcn/ui component kit on Tailwind',
        'Telegram login, JWT decoding, auth state in a Redux Toolkit slice, protected routes on React Router',
        'Typed API layer: one Axios instance and 20+ method modules — users, admin role, user messages, interests, profiles, documents, images',
        'Pages: documents upload, download and descriptions, image gallery with upload, user profile, admin tools, 404',
        'Responsive layout with a collapsible sidebar and mobile sheet menu',
      ],
      stack: [
        'React',
        'TypeScript',
        'Vite',
        'Redux Toolkit',
        'React Router',
        'Axios',
        'Tailwind',
        'shadcn/ui',
      ],
      slides: [],
      nda: {
        structure: [
          'api/',
          '  axiosInstance.ts',
          '  methods/ admin · adminInterests · adminUserProfile',
          '           documents · image',
          'store/  authSlice.ts — Redux Toolkit',
          'ProtectedRoute.tsx · routes.tsx',
          'pages/',
          '  Login · Home · Profile · AdminTools',
          '  Files · UploadDocument · DownloadDocument',
          '  UpdateDocumentDescription · Images · NotFound',
          'components/',
          '  TelegramAuth · Sidebar · Header',
          '  ImageUpload · ImagesList · AdminUserProfile',
          '  ui/ — shadcn: dialog, sheet, sidebar, tooltip…',
        ],
      },
    },
    {
      title: 'Russian State University of Social Technologies',
      links: ['https://rgust.ru'],
      role: 'Main frontend developer from the first commit: design system, most pages and modules, and the accessibility work — about 190 of 240 commits.',
      summary:
        'Website of a university focused on inclusive education, built to be usable by people with different needs: low vision, keyboard and screen reader users, people with disabilities.',
      highlights: [
        'Keyboard navigation everywhere, visually hidden headings for screen readers, accessible menu, dialogs, pagination and footer with focus trapping',
        'Integrated the accessibility toolbar with a custom button: text size, fonts, contrast themes, cursor size, page reading aloud',
        'Diversity and inclusion pages, inclusive video slider, stacking cards, parallax and footer animations (GSAP, Lenis)',
        'Dozens of pages: university, education, postgraduate studies, library, news, dormitory, branches; language switch, cookies, production zip build',
      ],
      stack: [
        'Pug',
        'SCSS',
        'JavaScript',
        'GSAP',
        'Lenis',
        'Swiper',
        'focus-trap',
        'htmx',
      ],
      slides: [
        { image: rgustHome, caption: 'Home page' },
        {
          image: rgustAccessibilityPanel,
          caption: 'Accessibility toolbar: text, contrast, reading aloud',
        },
        { image: rgustValues, caption: 'Values cards on the home page' },
        {
          image: rgustAccessibleEnvironment,
          caption: 'Accessible environment page',
        },
        { image: rgustWelcome, caption: 'Inclusion block and banners slider' },
      ],
    },
    {
      title: 'Tomsk NRMC website and media portal',
      links: ['https://www.tnimc.ru', 'https://media.tnimc.ru'],
      role: 'Frontend developer in a team of two: my own blocks and sections on the main site, then refinements and new features on the media portal.',
      summary:
        'Website of the Tomsk National Research Medical Center and its media portal with news, events and projects.',
      highlights: [
        'Site search: search popup, results page and empty-state card',
        'Development portfolio block: Expand animation, sticky image, slider that starts only when visible',
        'Documents and licenses section: orders, licenses and forms pages, tabs and document cards',
        'Video on the main banner, congratulation and application forms, accessible dialogs',
        'Media portal: partner cards slider, cookies banner, burger menu, multi-tag news cards, client edits, event detail page',
      ],
      stack: ['Pug', 'SCSS', 'JavaScript', 'GSAP', 'Swiper', 'htmx'],
      slides: [
        { image: tnimcHero, caption: 'Main banner with video' },
        { image: tnimcDevelopments, caption: 'Development portfolio block' },
        { image: tnimcDocuments, caption: 'Documents and licenses section' },
        { image: tnimcMedia, caption: 'Media portal home' },
        {
          image: tnimcMediaEvents,
          caption: 'Media portal: events and projects',
        },
      ],
    },
    {
      title: 'Tyumen State Medical University: admissions chatbot',
      links: ['https://abitur.tyumsmu.ru'],
      role: 'Built the React chatbot widget for applicants on top of a stub from the team lead; later added popups and blocks to the site. The rest of the site was made by colleagues.',
      summary:
        'Admissions website of a medical university with a chatbot that instantly answers applicants’ questions about programs, fees, deadlines and dormitories.',
      highlights: [
        'Chatbot in React: step-by-step dialog with answer options, message animations, custom scrollbar and loader',
        'Mock API for development so the widget worked before the backend was ready',
        'Popups with application and feedback forms, tags for new programs, minimum scores and contacts blocks',
        'Layout fixes for the career trajectories designer',
      ],
      stack: ['React', 'JavaScript', 'SCSS', 'Axios', 'Webpack'],
      slides: [
        { image: tyumsmuChatbot, caption: 'Chatbot on the home page' },
        { image: tyumsmuChatbotDialog, caption: 'Dialog with answer options' },
        { image: tyumsmuHome, caption: 'Applicant website home page' },
      ],
    },
    {
      title: 'VolgSMU Applicant Portal',
      links: ['https://abiturient.volgmed.ru'],
      role: 'My project from start to release; to speed things up I handed a few blocks to colleagues.',
      summary:
        'Admissions website of a medical university: everything an applicant needs in one place.',
      highlights: [
        'Mobile-first, accessible markup with a pixel-perfect implementation of the design',
        'Study programs catalog with level tabs and search',
        'Student life carousel and animated statistics',
      ],
      stack: ['HTML', 'SCSS', 'JavaScript', 'Swiper', 'Accessibility'],
      slides: [
        { image: volgsmuHero, caption: 'Home page' },
        {
          image: volgsmuPrograms,
          caption: 'Study programs with tabs and search',
        },
        { image: volgsmuStudentLife, caption: 'Student life carousel' },
        { image: volgsmuStats, caption: 'Animated statistics' },
      ],
    },
    {
      title:
        'Continuing education portal of Sholom-Aleichem Priamursky University',
      links: ['https://dpo.pgusa.ru'],
      role: 'The only frontend developer: adapted the company’s education platform template for the university and built its pages and personal account screens.',
      summary:
        'Portal of continuing and professional education programs: catalog with filters, program pages, enrollment and a personal account for students and organizations.',
      highlights: [
        'UI kit, home page with program search, catalog with filters, program promo pages with anchor navigation and a floating button',
        'Personal account screens for individuals and organizations: profile with validation, orders, tests, video course, course completion dialog',
        'Payment success and failure pages with status dialogs, review and feedback modals, 404 page',
        'Video embeds from Rutube and VK Video, extended accordion, responsive layout',
      ],
      stack: ['HTML', 'SCSS', 'JavaScript', 'Vue', 'GSAP', 'IMask'],
      slides: [
        { image: pgusaDpoHome, caption: 'Home page with program search' },
        { image: pgusaDpoCatalog, caption: 'Programs catalog with filters' },
        { image: pgusaDpoProgram, caption: 'Program page' },
        { image: pgusaDpoWhy, caption: '“Why us” block' },
      ],
    },
    {
      title: 'MIET: applicant website and main site',
      links: ['https://www.abiturient.ru', 'https://www.miet.ru'],
      role: 'On the applicant website I built the interactive profession picker from scratch; on the main site I made the first versions of the organizational structure and contacts pages. The rest was made by colleagues.',
      summary:
        'Applicant and main websites of a tech university. The profession picker is a retro “terminal”: applicants move sliders by interests and get matching engineering professions.',
      highlights: [
        'Five draggable sliders with inertia (Impetus); indicator lamps light up smoothly as you choose',
        'Professions list is requested from the API with a debounce and typed out on the screen (Typewriter effect)',
        'Responsive from 375 px to wide screens, tooltips on the profession detail page, popup with an embed example',
        'Main site: organizational structure with nested accordions, contacts page with tabs and a custom-styled map',
      ],
      stack: ['Pug', 'SCSS', 'JavaScript', 'Impetus', 'Typewriter'],
      slides: [
        { image: mietCareerSelector, caption: 'Profession picker “terminal”' },
        {
          image: mietCareerSelectorState,
          caption: 'Professions update as sliders move',
        },
        {
          image: mietStructure,
          caption: 'Main site: organizational structure',
        },
        {
          image: mietContactsMap,
          caption: 'Main site: contacts with a styled map',
        },
        { image: mietHome, caption: 'Applicant website home page' },
      ],
    },
    {
      title: 'Chelyabinsk State University',
      links: ['https://www.csu.ru'],
      role: 'Assembled the home page and built several of its blocks; the rest of the site was made by colleagues.',
      summary:
        'Main website of a classical university with a rich, animated home page.',
      highlights: [
        '“ChelSU is people” parallax block: photos drift after the cursor',
        'Main banner improvements, quick links slider, video card of the virtual reception',
        'ExpandMap component, ScrollTrigger callbacks and trigger cleanup, image hover scaling',
        'Reviews and social blocks for the English version, feedback form dialog in the page header',
      ],
      stack: ['Pug', 'SCSS', 'JavaScript', 'GSAP', 'ScrollTrigger', 'Swiper'],
      slides: [
        { image: csuHero, caption: 'Main banner with round covers' },
        {
          image: csuQuickLinks,
          caption: 'Quick links and virtual reception card',
        },
        { image: csuParallax, caption: 'Parallax block following the cursor' },
      ],
    },
  ],
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Paraweb',
      period: 'Apr 2024 — Present',
      points: [
        "Build components and modules for the company's reusable module library on Astro, React 19, TypeScript and SCSS Modules",
        'Server, client and hybrid components to keep page JavaScript under control; Storybook with Vitest and Playwright as docs and test environment',
        'Web apps, admin panels and website builders with React 18, Next.js and Vue; Redux Toolkit, RTK Query, MobX, React Hook Form + Zod',
        'Smaller React work: field validation and a quests component in a personal account, Metric card and Scale module for an analytics dashboard',
        'Contributed to a React Native app; code reviews and mentoring junior developers',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'University startup',
      period: 'Feb 2022 — Mar 2023',
      points: [
        'Client side of a web application with React, TypeScript, MobX and SCSS',
      ],
    },
  ],
  skills: {
    Core: skillItems.core,
    'State & data': skillItems.state,
    'Motion & 3D': skillItems.motion,
    Tooling: skillItems.tooling,
  },
}

const ru: SiteContent = {
  profile: {
    name: 'Дмитрий Скопинцев',
    role: 'Frontend-разработчик',
    tagline:
      'Делаю быстрые и доступные интерфейсы на React и TypeScript — и люблю, когда они двигаются.',
    location: 'Томск, Россия · готов к переезду',
    cv: '/Skopintsev_Dmitrii_CV_RU.pdf',
  },
  projects: [
    {
      ...en.projects[0],
      title: 'Личный кабинет грантовой программы: модуль опросов',
      role: 'Сделал с нуля модуль опросов в React-приложении команды: страницы, контролы вопросов, слой API и моки; плюс доработки дашборда и мероприятий.',
      summary:
        'Закрытый личный кабинет грантовой программы. Участники проходят многошаговые экспертные опросы, ответы сохраняются по ходу заполнения.',
      highlights: [
        'Четыре типа вопросов как переиспользуемые контролы: выбор варианта, текст, шкала-слайдер с подсказками и распределение баллов с живым счётчиком «осталось баллов»',
        'Список опросов, страница опроса с карточками-итогами, страница вопроса с хлебными крошками, навигацией по шагам и диалогом — логика вынесена в отдельный survey-question.logic.ts',
        'API на RTK Query (createApi) с сохранением и автосохранением ответа; MSW-моки для всех эндпоинтов, чтобы интерфейс делался до готовности бэкенда',
        'Доступ без авторизации по отпечатку браузера (FingerprintJS с ленивой загрузкой и запасным UUID); запрет копирования и вставки в ответах',
        'Дашборд: карточка соцсетей, вкладки навигации по мероприятиям',
      ],
    },
    {
      ...en.projects[1],
      title: 'Центр технологического лидерства',
      role: 'Сделал оба сайта с нуля: вёрстка из Figma точно по макету, адаптив от мобильных до широких экранов, все анимации и интерактивные страницы.',
      summary:
        'Корпоративный сайт Центра и лендинг его международной образовательной программы по биоэкономике.',
      highlights: [
        'Glassmorphism-интерфейс, полноэкранный слайдер, анимации на скролле и раскрытие текста (GSAP, ScrollTrigger, SplitText)',
        'Интерактивная 404: свет следует за курсором по 592 стеклянным плиткам на чистом CSS, стабильные 60 fps',
        'Лендинг программы: плавная прокрутка (Lenis), аккордеон модулей, таймлайн пути участника',
        'Блог с вкладками категорий, проекты, поиск по сайту',
      ],
      slides: [
        { image: techleadCenterHero, caption: 'Центр: слайдер на главной' },
        { image: techleadCenter404, caption: 'Центр: интерактивная 404' },
        {
          image: techleadCenterActivities,
          caption: 'Центр: направления и стеклянный CTA',
        },
        {
          image: techleadProgramHero,
          caption: 'Программа: первый экран с партнёрами',
        },
        {
          image: techleadProgramArchitecture,
          caption: 'Программа: аккордеон модулей',
        },
        {
          image: techleadCenterBlog,
          caption: 'Центр: блог с вкладками категорий',
        },
      ],
    },
    {
      ...en.projects[2],
      title: 'Модернизация сайта МТППК',
      role: 'Подключился к проекту на ходу и довёл его до публичной версии: доделывал и переделывал модули за коллегами, добавлял новый функционал, правил мобильную вёрстку.',
      summary:
        'Сайт пригородной пассажирской компании (группа РЖД): поиск билетов, карты станций и туризма, личный кабинет пассажира и B2B-кабинет, интернет-магазин.',
      highlights: [
        'Карта станций: новые карточки мест, диалоги станции и маршрута, смена языка карты, мобильная версия',
        'Поиск билетов: новый функционал поиска, виджет выбора станции и блок на главной, правки выбора даты',
        'Личный кабинет: профиль, журнал обращений с ответами и вложениями, смена email',
        'Просмотр PDF на pdf.js с решением проблемы воркера на продакшене, новые типы таблиц с мобильным аккордеоном и полноэкранным режимом, выгрузка в Excel',
        'Переключатель языка на десктопе и мобилке, контрастные логотипы, правки страниц станций, новостей, организации и 404',
      ],
      slides: [
        {
          image: mtppkHome,
          caption: 'Главная: поиск билетов и виджет станции',
        },
        {
          image: mtppkStationsMap,
          caption: 'Карта станций с маршрутами и фильтром',
        },
        { image: mtppkTourismMap, caption: 'Карта туризма с карточками мест' },
        { image: mtppkTicketSearch, caption: 'Поиск билетов с фильтрами' },
        { image: mtppkCalculator, caption: 'Тарифный калькулятор' },
      ],
    },
    {
      ...en.projects[3],
      title: 'Админ-панель ИИ-ассистента',
      role: 'Создал проект с нуля и сделал всю админ-панель: архитектура, авторизация, слой API и страницы.',
      summary:
        'Внутренняя админка Telegram-ассистента на базе ИИ: управление пользователями и их профилями, интересами, документами и изображениями, с которыми работает ассистент.',
      highlights: [
        'Проект на Vite + React + TypeScript с ESLint, Prettier и набором компонентов shadcn/ui на Tailwind',
        'Вход через Telegram, разбор JWT, состояние авторизации в слайсе Redux Toolkit, защищённые маршруты на React Router',
        'Типизированный слой API: один экземпляр Axios и 20+ модулей методов — пользователи, роль админа, сообщения, интересы, профили, документы, изображения',
        'Страницы: загрузка, скачивание и описание документов, галерея изображений с загрузкой, профиль пользователя, инструменты админа, 404',
        'Адаптивный интерфейс со сворачиваемым сайдбаром и мобильным меню',
      ],
    },
    {
      ...en.projects[4],
      title: 'Российский государственный университет социальных технологий',
      role: 'Основной frontend-разработчик с первого коммита: дизайн-система, большинство страниц и модулей и вся работа по доступности — около 190 из 240 коммитов.',
      summary:
        'Сайт университета с упором на инклюзивное образование, сделанный удобным для людей с разными потребностями: слабовидящих, пользователей клавиатуры и экранных дикторов, людей с инвалидностью.',
      highlights: [
        'Навигация с клавиатуры по всему сайту, скрытые заголовки для экранных дикторов, доступные меню, диалоги, пагинация и футер с удержанием фокуса',
        'Подключил панель доступности со своей кнопкой: размер текста, шрифт, контрастные темы, размер курсора, озвучивание страницы',
        'Страницы «Разнообразие и инклюзивность», инклюзивный видео-слайдер, stacking cards, параллакс и анимация футера (GSAP, Lenis)',
        'Десятки страниц: университет, образование, аспирантура, библиотека, новости, общежитие, филиалы; смена языка, cookies, сборка zip для продакшена',
      ],
      slides: [
        { image: rgustHome, caption: 'Главная страница' },
        {
          image: rgustAccessibilityPanel,
          caption: 'Панель доступности: текст, контраст, озвучивание',
        },
        { image: rgustValues, caption: 'Карточки ценностей на главной' },
        {
          image: rgustAccessibleEnvironment,
          caption: 'Страница «Доступная среда»',
        },
        { image: rgustWelcome, caption: 'Блок об инклюзии и слайдер баннеров' },
      ],
    },
    {
      ...en.projects[5],
      title: 'Сайт и медиапортал Томского НИМЦ',
      role: 'Frontend-разработчик в команде из двух человек: свои блоки и разделы на основном сайте, затем доработки и новый функционал на медиапортале.',
      summary:
        'Сайт Томского национального исследовательского медицинского центра и его медиапортал с новостями, мероприятиями и проектами.',
      highlights: [
        'Поиск по сайту: попап поиска, страница результатов и карточка «ничего не найдено»',
        'Блок «Портфель разработок»: анимация раскрытия, sticky-изображение, слайдер запускается только при появлении в зоне видимости',
        'Раздел «Документы и лицензии»: страницы приказов, лицензий и бланков, вкладки и карточки документов',
        'Видео на главном баннере, формы поздравления и заявки, доступные диалоги',
        'Медиапортал: слайдер карточек партнёров, баннер cookies, бургер-меню, несколько тегов в карточках новостей, правки от клиента, детальная страница мероприятия',
      ],
      slides: [
        { image: tnimcHero, caption: 'Главный баннер с видео' },
        { image: tnimcDevelopments, caption: 'Блок «Портфель разработок»' },
        { image: tnimcDocuments, caption: 'Раздел «Документы и лицензии»' },
        { image: tnimcMedia, caption: 'Главная медиапортала' },
        {
          image: tnimcMediaEvents,
          caption: 'Медиапортал: мероприятия и проекты',
        },
      ],
    },
    {
      ...en.projects[6],
      title: 'Тюменский ГМУ: чат-бот для абитуриентов',
      role: 'Сделал чат-бот для абитуриентов на React поверх заготовки от тимлида; позже добавлял на сайт попапы и блоки. Остальной сайт делали коллеги.',
      summary:
        'Сайт приёмной кампании медицинского университета с чат-ботом, который сразу отвечает абитуриентам на вопросы о направлениях, стоимости, сроках и общежитиях.',
      highlights: [
        'Чат-бот на React: пошаговый диалог с вариантами ответов, анимации сообщений, кастомный скроллбар и лоадер',
        'Мок-API для разработки — виджет работал до готовности бэкенда',
        'Попапы с формами заявки и обратной связи, теги для новых направлений, блоки минимальных баллов и контактов',
        'Правки вёрстки конструктора карьерных траекторий',
      ],
      slides: [
        { image: tyumsmuChatbot, caption: 'Чат-бот на главной' },
        { image: tyumsmuChatbotDialog, caption: 'Диалог с вариантами ответов' },
        { image: tyumsmuHome, caption: 'Главная сайта абитуриентов' },
      ],
    },
    {
      ...en.projects[7],
      title: 'Портал абитуриента ВолгГМУ',
      role: 'Мой проект от начала до релиза; для ускорения отдельные блоки отдавал коллегам.',
      summary:
        'Сайт приёмной кампании медицинского университета: всё, что нужно поступающему, в одном месте.',
      highlights: [
        'Mobile-first и доступная вёрстка точно по макету',
        'Каталог направлений подготовки с вкладками уровней и поиском',
        'Карусель студенческой жизни и анимированная статистика',
      ],
      stack: ['HTML', 'SCSS', 'JavaScript', 'Swiper', 'Доступность'],
      slides: [
        { image: volgsmuHero, caption: 'Главная страница' },
        {
          image: volgsmuPrograms,
          caption: 'Направления подготовки с вкладками и поиском',
        },
        { image: volgsmuStudentLife, caption: 'Карусель студенческой жизни' },
        { image: volgsmuStats, caption: 'Анимированная статистика' },
      ],
    },
    {
      ...en.projects[8],
      title: 'Портал ДПО Приамурского университета им. Шолом-Алейхема',
      role: 'Единственный frontend-разработчик: адаптировал шаблон образовательной платформы компании под университет, сделал страницы и экраны личного кабинета.',
      summary:
        'Портал программ дополнительного и профессионального образования: каталог с фильтрами, страницы программ, запись на обучение и личный кабинет для слушателей и организаций.',
      highlights: [
        'UI-кит, главная с поиском программ, каталог с фильтрами, промо-страницы программ с якорной навигацией и плавающей кнопкой',
        'Экраны личного кабинета для физлиц и организаций: профиль с валидацией, заказы, тесты, видеокурс, диалог по завершении курса',
        'Страницы успешной и неуспешной оплаты с диалогами статусов, модальные окна отзывов и обратной связи, страница 404',
        'Встраивание видео с Rutube и VK Видео, расширенный аккордеон, адаптивная вёрстка',
      ],
      slides: [
        { image: pgusaDpoHome, caption: 'Главная с поиском программ' },
        { image: pgusaDpoCatalog, caption: 'Каталог программ с фильтрами' },
        { image: pgusaDpoProgram, caption: 'Страница программы' },
        { image: pgusaDpoWhy, caption: 'Блок «Почему мы»' },
      ],
    },
    {
      ...en.projects[9],
      title: 'МИЭТ: сайт абитуриентов и основной сайт',
      role: 'На сайте абитуриентов сделал с нуля интерактивный блок подбора профессии, на основном сайте — первые версии страниц оргструктуры и контактов. Остальное делали коллеги.',
      summary:
        'Сайт абитуриентов и основной сайт технического университета. Блок подбора профессии — ретро-«терминал»: абитуриент двигает ползунки по интересам и получает подходящие инженерные профессии.',
      highlights: [
        'Пять перетаскиваемых ползунков с инерцией (Impetus), индикаторные лампочки плавно загораются при выборе',
        'Список профессий запрашивается из API с debounce и печатается на экране (эффект Typewriter)',
        'Адаптив от 375 px до широких экранов, подсказки на детальной странице профессии, попап с примером встраивания',
        'Основной сайт: оргструктура с вложенными аккордеонами, страница контактов с вкладками и стилизованной картой',
      ],
      slides: [
        { image: mietCareerSelector, caption: '«Терминал» подбора профессии' },
        {
          image: mietCareerSelectorState,
          caption: 'Профессии меняются при движении ползунков',
        },
        {
          image: mietStructure,
          caption: 'Основной сайт: организационная структура',
        },
        {
          image: mietContactsMap,
          caption: 'Основной сайт: контакты со стилизованной картой',
        },
        { image: mietHome, caption: 'Главная сайта абитуриентов' },
      ],
    },
    {
      ...en.projects[10],
      title: 'Челябинский государственный университет',
      role: 'Собрал главную страницу и сделал несколько её блоков; остальной сайт делали коллеги.',
      summary:
        'Основной сайт классического университета с насыщенной анимированной главной.',
      highlights: [
        'Параллакс-блок «ЧелГУ — это люди»: фотографии смещаются вслед за курсором',
        'Доработки главного баннера, слайдер быстрых ссылок, видео-карточка виртуальной приёмной',
        'Компонент ExpandMap, колбэки ScrollTrigger и корректное удаление триггеров, увеличение изображений при наведении',
        'Блоки отзывов и соцсетей для английской версии, диалог с формой обратной связи в шапке страницы',
      ],
      slides: [
        { image: csuHero, caption: 'Главный баннер с круглыми обложками' },
        {
          image: csuQuickLinks,
          caption: 'Быстрые ссылки и карточка виртуальной приёмной',
        },
        { image: csuParallax, caption: 'Параллакс-блок за курсором' },
      ],
    },
  ],
  experience: [
    {
      role: 'Frontend-разработчик',
      company: 'Паравеб',
      period: 'Апрель 2024 — настоящее время',
      points: [
        'Разрабатываю компоненты и модули для внутренней библиотеки переиспользуемых модулей на Astro, React 19, TypeScript и SCSS Modules',
        'Серверные, клиентские и гибридные компоненты для контроля объёма JS на странице; Storybook с Vitest и Playwright как документация и среда тестирования',
        'Веб-приложения, админ-панели и конструкторы сайтов на React 18, Next.js и Vue; Redux Toolkit, RTK Query, MobX, React Hook Form + Zod',
        'Небольшие задачи на React: валидация полей и компонент квестов в личном кабинете, карточка Metric и модуль Scale для аналитического дашборда',
        'Участвовал в разработке приложения на React Native; код-ревью и менторинг младших разработчиков',
      ],
    },
    {
      role: 'Frontend-разработчик',
      company: 'Университетский стартап',
      period: 'Февраль 2022 — март 2023',
      points: [
        'Клиентская часть веб-приложения на React, TypeScript, MobX и SCSS',
      ],
    },
  ],
  skills: {
    'Основной стек': skillItems.core,
    'Состояние и данные': skillItems.state,
    'Анимации и 3D': skillItems.motion,
    Инструменты: skillItems.tooling,
  },
}

const content: Record<Lang, SiteContent> = { en, ru }

export function getContent(lang: Lang): SiteContent {
  return content[lang]
}
