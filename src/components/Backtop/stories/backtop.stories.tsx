import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Backtop from '../Backtop'

const meta: Meta<typeof Backtop> = {
  title: '导航/Backtop',
  component: Backtop,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Backtop>

export const Def: Story = {
  args: {}
}
