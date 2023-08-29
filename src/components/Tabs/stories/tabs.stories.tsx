/* eslint-disable react/jsx-key */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Tabs from '../Tabs'
import Panel from '../Panel'

const meta: Meta<typeof Tabs> = {
  title: '导航/Tabs',
  component: Tabs,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}
const childrenList = [
  <Panel label='User' name='User'>
    User
  </Panel>,
  <Panel label='Config' name='Config'>
    Config
  </Panel>,
  <Panel label='Role' name='Role'>
    Role
  </Panel>,
  <Panel label='Task' name='Task'>
    Task
  </Panel>
]
export default meta
type Story = StoryObj<typeof Tabs>

export const Def: Story = {
  args: {
    children: childrenList
  }
}
