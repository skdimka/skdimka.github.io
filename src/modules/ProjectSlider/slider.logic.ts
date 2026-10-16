import Swiper from 'swiper'
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper/modules'

const AUTOPLAY_DELAY = 3000

/**
 * Turns every `[data-slider]` into a Swiper carousel that changes slides
 * every 3 seconds. Autoplay runs only while the slider is on screen and is
 * off for users who prefer reduced motion. Returns a cleanup function.
 */
export function initSliders(root: ParentNode = document): () => void {
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  const elements = [...root.querySelectorAll<HTMLElement>('[data-slider]')]

  const sliders = elements
    .filter((el) => el.querySelectorAll('.swiper-slide').length > 1)
    .map(
      (el) =>
        new Swiper(el.querySelector<HTMLElement>('.swiper')!, {
          modules: [A11y, Autoplay, Keyboard, Pagination],
          loop: true,
          speed: reducedMotion ? 0 : 600,
          grabCursor: true,
          keyboard: { enabled: true, onlyInViewport: true },
          autoplay: reducedMotion
            ? false
            : {
                delay: AUTOPLAY_DELAY,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              },
          pagination: {
            el: el.querySelector<HTMLElement>('.project-slider__pagination'),
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'project-slider__bullet',
            bulletActiveClass: 'project-slider__bullet--active',
          },
          a11y: { enabled: true },
        }),
    )

  // Autoplay only for sliders in the viewport.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      const swiper = sliders.find((s) => s.el === target)
      if (!swiper?.autoplay || reducedMotion) return
      if (isIntersecting) swiper.autoplay.start()
      else swiper.autoplay.stop()
    })
  })
  sliders.forEach((swiper) => {
    swiper.autoplay?.stop()
    observer.observe(swiper.el)
  })

  return () => {
    observer.disconnect()
    sliders.forEach((swiper) => swiper.destroy(true, true))
  }
}
