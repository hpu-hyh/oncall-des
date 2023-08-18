// Alert.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'
import Alert from '../Alert'

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Alert>

export const DefAlert: Story = {
  args: {
    type: 'info',
    theme: 'dark',
    message: 'Alert',
    description: 'This is a description',
    showIcon: !!'showIcon'
  }
}
