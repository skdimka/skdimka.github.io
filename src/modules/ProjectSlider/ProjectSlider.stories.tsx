import { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor, within } from 'storybook/test'
import hero from '@/assets/projects/techlead/01-center-hero.jpg'
import page404 from '@/assets/projects/techlead/02-center-404.jpg'
import blog from '@/assets/projects/techlead/06-center-blog.jpg'
import { ProjectSlider } from './ProjectSlider'
import { initSliders } from './slider.logic'

// Storybook serves raw assets; Astro passes optimized ones.
const image = (src: unknown) => ({
  src: src as string,
  width: 1568,
  height: 773,
})

const meta = {
  title: 'Modules/ProjectSlider',
  component: ProjectSlider,
  decorators: [
    (Story) => {
      useEffect(() => initSliders(), [])
      return (
        <div style={{ maxWidth: 640, padding: 24 }}>
          <Story />
        </div>
      )
    },
  ],
  args: {
    label: 'Technological Leadership Center',
    slides: [
      { image: image(hero), caption: 'Hero slider' },
      { image: image(page404), caption: 'Interactive 404' },
      { image: image(blog), caption: 'Blog with category tabs' },
    ],
  },
} satisfies Meta<typeof ProjectSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('region', { name: 'Technological Leadership Center' }),
    ).toBeVisible()
    // Pagination bullets are rendered by Swiper once it initializes.
    await waitFor(() =>
      expect(
        canvasElement.querySelectorAll('.project-slider__bullet'),
      ).toHaveLength(3),
    )
  },
}

export const SingleSlide: Story = {
  args: { slides: [{ image: image(hero), caption: 'Hero slider' }] },
}
