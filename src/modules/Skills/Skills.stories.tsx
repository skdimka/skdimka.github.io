import type { Meta, StoryObj } from '@storybook/react-vite'
import { getContent } from '@/modules/Content/content'
import { Skills } from './Skills'

const meta = {
  title: 'Modules/Skills',
  component: Skills,
  args: { lang: 'en', groups: getContent('en').skills },
} satisfies Meta<typeof Skills>

export default meta
type Story = StoryObj<typeof meta>

export const English: Story = {}

export const Russian: Story = {
  args: { lang: 'ru', groups: getContent('ru').skills },
}
