/* eslint-disable react/jsx-key */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import SubMenu from '../subMenu'

const cpns = () => [
  <MenuItem>MenuItem</MenuItem>,
  <MenuItem>MenuItem</MenuItem>,
  <SubMenu title='Submenu'>
    <MenuItem>MenuItem</MenuItem>
    <MenuItem>MenuItem</MenuItem>
    <MenuItem>MenuItem</MenuItem>
  </SubMenu>,
  <MenuItem>MenuItem</MenuItem>
]

const meta: Meta<typeof Menu> = {
  title: '导航/Menu',
  component: Menu,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Menu>

export const Def: Story = {
  args: {
    children: cpns(),
    defaultIndex: '1'
  }
}
