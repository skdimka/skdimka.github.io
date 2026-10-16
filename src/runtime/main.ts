import { initGlow } from '@/modules/Hero/glow.logic'
import { initReveal } from '@/modules/Reveal/reveal.logic'
import { initSliders } from '@/modules/ProjectSlider/slider.logic'
import { initAccordions } from '@/modules/Accordion/accordion.logic'
import { initProjectStack, STACK_QUERY } from '@/modules/Projects/stack.logic'

// Client entry: enhances server-rendered markup. No framework hydration.
// Sliders handle reduced motion themselves (no autoplay, instant swipes).
initSliders()
initAccordions()

const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches

if (!reducedMotion) {
  // Stacked cards get their motion from the stack, not from reveal.
  const stacked = window.matchMedia(STACK_QUERY).matches
  initReveal(document, {
    skip: (el) => stacked && el.matches('.projects > .project-card'),
  })
  initProjectStack()
  const hero = document.querySelector<HTMLElement>('[data-glow]')
  if (hero) initGlow(hero)
}
