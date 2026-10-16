import './project-slider.scss'

export interface SlideImage {
  src: string
  srcSet?: string
  sizes?: string
  width: number
  height: number
}

export interface Slide {
  image: SlideImage
  caption: string
}

export interface ProjectSliderProps {
  slides: Slide[]
  /** Accessible name of the carousel, e.g. the project title. */
  label: string
  eager?: boolean
}

/**
 * Server-rendered Swiper markup. Without JS it shows the first slide;
 * `slider.logic.ts` turns it into an autoplaying carousel. Caption and
 * pagination sit below the screenshot so nothing covers it.
 */
export function ProjectSlider({
  slides,
  label,
  eager = false,
}: ProjectSliderProps) {
  return (
    <div
      className="project-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      data-slider
    >
      <div className="project-slider__swiper swiper">
        <div className="swiper-wrapper">
          {slides.map(({ image, caption }, index) => (
            <div
              key={image.src}
              className="project-slider__slide swiper-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${slides.length}`}
            >
              <figure className="project-slider__figure">
                <img
                  {...image}
                  className="project-slider__image"
                  alt={caption}
                  loading={eager && index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <figcaption className="project-slider__caption">
                  {caption}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      {slides.length > 1 && <div className="project-slider__pagination" />}
    </div>
  )
}
