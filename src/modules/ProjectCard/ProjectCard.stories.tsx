import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import page404 from '@/assets/projects/techlead/02-center-404.jpg'
import { ProjectCard } from './ProjectCard'

const meta = {
  title: 'Modules/ProjectCard',
  component: ProjectCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1120, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    project: {
      title: 'Technological Leadership Center',
      links: ['https://techlead.institute', 'https://edu.techlead.institute'],
      role: 'Built from scratch: markup from Figma, responsive layout, animations.',
      summary: 'Corporate website with a glassmorphism UI.',
      highlights: ['Interactive 404 at a stable 60 fps', 'Scroll animations'],
      stack: ['Figma', 'GSAP', 'ScrollTrigger'],
    },
    // Storybook serves the raw asset, Astro passes an optimized one.
    slides: [
      {
        image: { src: page404 as unknown as string, width: 1568, height: 773 },
        caption: 'Interactive 404',
      },
    ],
    roleLabel: 'My role',
    ndaLabel: 'No permission to share screenshots',
    structureLabel: 'Module structure',
    moreLabel: 'More about the project',
    lessLabel: 'Hide details',
    stackLabel: 'Tech stack',
  },
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('My role:')).toBeVisible()
    const [link] = canvas.getAllByRole('link', { name: /techlead\.institute/ })
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(canvas.getByRole('list', { name: 'Tech stack' })).toBeVisible()
  },
}

export const Mobile: Story = {
  globals: { viewport: { value: 'mobile1' } },
}

export const Nda: Story = {
  args: {
    project: {
      title: 'Grant program account: surveys',
      links: [],
      role: 'Built the surveys module.',
      summary: 'Closed personal account.',
      highlights: ['Question controls', 'API mocks'],
      stack: ['React', 'TypeScript'],
      nda: {
        structure: ['Survey/', '  controls/', '    RangeQuestionControl'],
      },
    },
    slides: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByText(/No permission to share screenshots/),
    ).toBeVisible()
    await expect(canvas.queryByRole('link')).toBeNull()
  },
}
