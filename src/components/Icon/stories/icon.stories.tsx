// Alert.stories.ts|tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Icon from '../Icon'

const meta: Meta<typeof Icon> = {
  title: '基础组件/Icon',
  component: Icon,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Icon>

export const DefAlert: Story = {
  args: {
    theme: 'primary',
    size: '3x',
    icon: 'times'
  }
}
