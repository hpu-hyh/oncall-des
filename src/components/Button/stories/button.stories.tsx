// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import Button from '../Button'

const meta: Meta<typeof Button> = {
  title: '基础组件/Button',
  component: Button,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    btnType: 'danger',
    children: 'Button'
  }
}
