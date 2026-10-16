import type { Meta, StoryObj } from '@storybook/react-vite'
import { getContent } from '@/modules/Content/content'
import { Experience } from './Experience'

const meta = {
  title: 'Modules/Experience',
  component: Experience,
  args: { lang: 'en', jobs: getContent('en').experience },
} satisfies Meta<typeof Experience>

export default meta
type Story = StoryObj<typeof meta>

export const English: Story = {}

export const Russian: Story = {
  args: { lang: 'ru', jobs: getContent('ru').experience },
}
