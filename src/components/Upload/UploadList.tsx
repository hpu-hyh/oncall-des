import React from 'react'
import type { FC } from 'react'
import Icon from '../Icon/Icon'
import Progress from '../Progress/Progress'
import { UploadListProps } from './type'

const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props
  return (
    <ul className='oc-upload-list'>
      {fileList.map((item) => {
        return (
          <li className='oc-upload-list-item' key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon='file-alt' theme='secondary' />
              {item.name}
            </span>
            <span className='file-status'>
              {(item.status === 'uploading' || item.status === 'ready') && (
                <Icon icon='spinner' spin theme='primary' />
              )}
              {item.status === 'success' && (
                <Icon icon='check-circle' theme='success' />
              )}
              {item.status === 'error' && (
                <Icon icon='times-circle' theme='danger' />
              )}
            </span>
            <span className='file-actions'>
              <Icon
                icon='times'
                onClick={() => {
                  onRemove(item)
                }}
              />
            </span>
            {item.status === 'uploading' && (
              <Progress percent={item.percent || 0} />
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default UploadList
