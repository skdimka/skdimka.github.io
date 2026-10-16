import { links, type Profile } from '@/modules/Content/content'
import { useTranslations, type Lang } from '@/modules/I18n/i18n'
import './contact.scss'

export interface ContactProps {
  lang: Lang
  profile: Profile
  year: number
}

export function Contact({ lang, profile, year }: ContactProps) {
  const t = useTranslations(lang)

  return (
    <section className="section" id="contact">
      <div className="container contact glass" data-reveal>
        <h2 className="section-title contact__title">{t('contact.title')}</h2>
        <p className="contact__text">{t('contact.text')}</p>
        <div className="contact__links">
          <a
            className="btn btn--primary"
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a className="btn btn--ghost" href={links.email}>
            Email
          </a>
          <a
            className="btn btn--ghost"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn--ghost" href={profile.cv} download>
            {t('cv.download')}
          </a>
        </div>
      </div>
      <footer className="container contact__footer">
        © {year} {profile.name}.
      </footer>
    </section>
  )
}
