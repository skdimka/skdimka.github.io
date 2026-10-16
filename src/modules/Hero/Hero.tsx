import type { Profile } from '@/modules/Content/content'
import { useTranslations, type Lang } from '@/modules/I18n/i18n'
import './hero.scss'

export interface HeroProps {
  lang: Lang
  profile: Profile
}

export function Hero({ lang, profile }: HeroProps) {
  const t = useTranslations(lang)

  return (
    <section className="hero" id="top" data-glow>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>
      <div className="container hero__content">
        <p className="tag" data-reveal>
          {profile.location}
        </p>
        <h1 className="hero__title" data-reveal>
          {profile.name}
          <span>{profile.role}</span>
        </h1>
        <div className="hero__actions" data-reveal>
          <a className="btn btn--primary" href="#projects">
            {t('hero.projects')}
          </a>
          <a className="btn btn--ghost" href={profile.cv} download>
            {t('cv.download')}
          </a>
        </div>
      </div>
    </section>
  )
}
