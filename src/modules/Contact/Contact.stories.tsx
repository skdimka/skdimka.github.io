import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { getContent } from '@/modules/Content/content'
import { Contact } from './Contact'

const meta = {
  title: 'Modules/Contact',
  component: Contact,
  args: { lang: 'en', profile: getContent('en').profile, year: 2026 },
} satisfies Meta<typeof Contact>

export default meta
type Story = StoryObj<typeof meta>

export const English: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('link', { name: 'Download CV' }),
    ).toHaveAttribute('download')
  },
}

export const Russian: Story = {
  args: { lang: 'ru', profile: getContent('ru').profile },
}
