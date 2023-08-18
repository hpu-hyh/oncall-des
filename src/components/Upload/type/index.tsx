/* eslint-disable @typescript-eslint/no-explicit-any */
// upload

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid?: string
  size?: number
  name?: string
  status?: UploadFileStatus
  percent?: number
  raw?: File
  response?: any
  error?: any
}

export interface UploadProps {
  action: string
  defaultFileList?: UploadFile[]
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: UploadFile) => void
  onSuccess?: (data: any, file: UploadFile) => void
  onError?: (err: number, file: UploadFile) => void
  onChange?: (file: UploadFile) => void
  onRemove?: (file: UploadFile) => void
  headers?: { [key: string]: any }
  name?: string
  data?: { [key: string]: any }
  withCredentials?: boolean
  accept?: string
  multiple?: boolean
  children?: React.ReactNode
  drag?: boolean
}
// uploadlist

export interface UploadListProps {
  fileList: UploadFile[]
  onRemove: (_file: UploadFile) => void
}
// dragger
export interface DraggerProps {
  onFile: (files: FileList) => void
  children: React.ReactNode
}
