import { homePath, languages, type Lang } from '@/modules/I18n/i18n'
import './lang-switcher.scss'

export interface LangSwitcherProps {
  lang: Lang
  label: string
}

export function LangSwitcher({ lang, label }: LangSwitcherProps) {
  const entries = Object.entries(languages) as [Lang, string][]

  return (
    <ul className="lang-switcher" aria-label={label}>
      {entries.map(([code, name]) => (
        <li key={code}>
          <a
            className="lang-switcher__link"
            href={homePath(code)}
            hrefLang={code}
            lang={code}
            aria-current={code === lang ? 'page' : undefined}
          >
            {code.toUpperCase()}
            <span className="visually-hidden"> {name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
