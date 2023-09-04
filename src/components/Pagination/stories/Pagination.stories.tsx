import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Pagination from '../Pagination'

const meta: Meta<typeof Pagination> = {
  title: '导航/Pagination',
  component: Pagination,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Def: Story = {
  args: {
    total: 10
  }
}
