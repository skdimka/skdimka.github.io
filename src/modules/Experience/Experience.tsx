import type { Job } from '@/modules/Content/content'
import { useTranslations, type Lang } from '@/modules/I18n/i18n'
import './experience.scss'

export interface ExperienceProps {
  lang: Lang
  jobs: Job[]
}

export function Experience({ lang, jobs }: ExperienceProps) {
  const t = useTranslations(lang)

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title" data-reveal>
          {t('experience.title')}
        </h2>
        <ol className="timeline">
          {jobs.map((job) => (
            <li key={job.company} className="timeline__job" data-reveal>
              <div className="timeline__head">
                <h3>
                  {job.role} <span>· {job.company}</span>
                </h3>
                <p className="timeline__period">{job.period}</p>
              </div>
              <ul className="timeline__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
