import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import type { UploadFile } from '../type'
import { action } from '@storybook/addon-actions'
import Upload from '../Upload'

const meta: Meta<typeof Upload> = {
  title: 'Form表单组件/Upload',
  component: Upload,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}
const defaultFileList: UploadFile[] = [
  {
    uid: '123',
    size: 1234,
    name: 'hello.md',
    status: 'uploading',
    percent: 0
  },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]
export default meta
type Story = StoryObj<typeof Upload>
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 5000) {
    alert('file too big')
    return false
  }
  return true
}
export const Def: Story = {
  args: {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    // onProgress: action('Progress'),
    // onSuccess: action('Success'),
    // onError: action('Errors'),
    onChange: action('changed'),
    beforeUpload: checkFileSize,
    defaultFileList: defaultFileList,
    name: 'filename',
    data: { key: 'value' },
    headers: { 'X-Powered-By': 'hyh' },
    accept: '.png',
    // multiple: true
    drag: true,
    children: 'dragger'
  }
}
