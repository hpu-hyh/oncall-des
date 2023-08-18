import React, { useRef } from 'react'
import { ChangeEvent, FC, useState } from 'react'
import axios from 'axios'
import Button from '../Button/Button'

import UploadList from './UploadList'
import Dragger from './dragger'
import type { UploadFile, UploadProps } from './type'

const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    headers,
    name,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFile(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const uploadFile = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    const _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    //setFileList([_file, ...fileList])
    setFileList((prevList) => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data'
        },
        withCredentials,
        onUploadProgress: (e) => {
          // eslint-disable-next-line prefer-const
          let dataTotal = e.total ? e.total : 1
          const percentage = Math.round((e.loaded * 100) / dataTotal) || 0
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: 'uploading' })
            if (onProgress) {
              onProgress(percentage, file)
            }
          }
        }
      })
      .then((resp) => {
        // console.log(resp)
        updateFileList(_file, { status: 'success', response: resp.data })
        if (onSuccess) {
          onSuccess(resp.data, file)
        }
        if (onChange) {
          onChange(file)
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: 'error', error: err })
        console.error(err)
        if (onError) {
          onError(err, file)
        }
        if (onChange) {
          onChange(file)
        }
      })
  }
  return (
    <div className='oc-upload-component'>
      <div
        className='oc-upload-input'
        style={{ display: 'inline-block' }}
        onClick={handleClick}
      >
        {drag ? (
          <Dragger
            onFile={(files) => {
              uploadFile(files)
            }}
          >
            {children}
          </Dragger>
        ) : (
          <Button btnType='default'>{children}</Button>
        )}
        <input
          className='oc-file-input'
          style={{ display: 'none' }}
          ref={fileInput}
          onChange={handleFileChange}
          type='file'
          accept={accept}
          multiple={multiple}
        />
      </div>
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}
Upload.defaultProps = {
  name: 'file'
}
export default Upload
