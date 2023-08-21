/* eslint-disable react/jsx-key */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumb from '../Breadcrumb'
import BreadcrumbItem from '../BreadcrumbItem'

const meta: Meta<typeof Breadcrumb> = {
  title: '导航/Breadcrumb',
  component: Breadcrumb,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Breadcrumb>
const itemlist = [
  <BreadcrumbItem>首页</BreadcrumbItem>,
  <BreadcrumbItem>个人中心</BreadcrumbItem>,
  <BreadcrumbItem>账号</BreadcrumbItem>,
  <BreadcrumbItem>管理</BreadcrumbItem>
]
export const Def: Story = {
  args: {
    children: itemlist
  }
}
