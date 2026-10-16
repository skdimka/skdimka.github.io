export const languages = {
  en: 'English',
  ru: 'Русский',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'en'

/** Home page URL for a language; the default language lives at the root. */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`
}

export const ui = {
  en: {
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.label': 'Main',
    'lang.label': 'Language',
    'hero.projects': 'See projects',
    'cv.download': 'Download CV',
    'projects.title': 'Selected projects',
    'projects.stack': 'Tech stack',
    'projects.role': 'My role',
    'projects.more': 'More about the project',
    'projects.less': 'Hide details',
    'projects.nda':
      'No permission to share screenshots — happy to walk through the details in an interview',
    'projects.structure': 'Module structure',
    'experience.title': 'Experience',
    'skills.title': 'Skills',
    'contact.title': "Let's work together",
    'contact.text':
      'Open to frontend roles — remote, hybrid or with relocation. The fastest way to reach me is Telegram.',
    'footer.built': 'Built with Astro and GSAP.',
  },
  ru: {
    'nav.projects': 'Проекты',
    'nav.experience': 'Опыт',
    'nav.skills': 'Навыки',
    'nav.contact': 'Контакты',
    'nav.label': 'Основная навигация',
    'lang.label': 'Язык',
    'hero.projects': 'Смотреть проекты',
    'cv.download': 'Скачать резюме',
    'projects.title': 'Избранные проекты',
    'projects.stack': 'Стек технологий',
    'projects.role': 'Моя роль',
    'projects.more': 'Подробнее о проекте',
    'projects.less': 'Свернуть',
    'projects.nda': 'Нет разрешения показывать скриншоты',
    'projects.structure': 'Структура модулей',
    'experience.title': 'Опыт работы',
    'skills.title': 'Навыки',
    'contact.title': 'Давайте работать вместе',
    'contact.text':
      'Рассматриваю frontend-позиции — удалённо, гибрид или с релокацией. Быстрее всего отвечаю в Telegram.',
    'footer.built': 'Сделано на Astro и GSAP.',
  },
} as const satisfies Record<Lang, Record<string, string>>

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)[Lang]) => ui[lang][key]
}
