import { LangSwitcher } from '@/modules/LangSwitcher/LangSwitcher'
import { useTranslations, type Lang } from '@/modules/I18n/i18n'
import './header.scss'

export interface HeaderProps {
  lang: Lang
  cv: string
}

export function Header({ lang, cv }: HeaderProps) {
  const t = useTranslations(lang)
  const nav = [
    { href: '#projects', label: t('nav.projects') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__logo" href="#top">
          DS
        </a>
        <nav aria-label={t('nav.label')}>
          <ul className="header__nav">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <LangSwitcher lang={lang} label={t('lang.label')} />
          <a className="btn btn--ghost btn--sm" href={cv} download>
            CV
          </a>
        </div>
      </div>
    </header>
  )
}
