import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Progress from '../Progress'

const meta: Meta<typeof Progress> = {
  title: '反馈/Progress',
  component: Progress,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Progress>

export const Def: Story = {
  args: {
    percent: 20,
    showText: true
  }
}
