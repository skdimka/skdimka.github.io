import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface RevealOptions {
  /** Leave matching elements alone, e.g. ones animated by another effect. */
  skip?: (el: HTMLElement) => boolean
}

/**
 * Fades `[data-reveal]` elements in as they scroll into view.
 * Returns a cleanup function that kills the created tweens.
 */
export function initReveal(
  root: ParentNode = document,
  { skip }: RevealOptions = {},
): () => void {
  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    gsap.utils
      .toArray<HTMLElement>(root.querySelectorAll('[data-reveal]'))
      .filter((el) => !skip?.(el))
      .forEach((el) => {
        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })
  })

  return () => ctx.revert()
}
