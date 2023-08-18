import type { Meta, StoryObj } from '@storybook/react'
import Input from '../Input'

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Input>

export const Def: Story = {
  args: {
    prepend: '',
    append: '',
    disabled: false,
    icon: 'search'
  }
}
