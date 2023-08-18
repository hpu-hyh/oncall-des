import React, { useState } from 'react'
import type { FC } from 'react'

import classNames from 'classnames'
import Transition from '../Transition/transition'
import Icon from '../Icon/Icon'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { AlertProps } from './type'
/**
 * 页面中常用的的alert元素
 * ###Alert
 */
const Alert: FC<AlertProps> = (props) => {
  const [show, setShow] = useState(true)
  const { className, theme, type, message, description, showIcon } = props
  const classes = classNames('oc-alert', className, {
    [`oc-alert-${theme}`]: theme,
    [`oc-alert-${type}`]: type,
    showIcon: showIcon
  })
  let iconType: IconProp = 'info-circle'
  switch (type) {
    case 'success':
      iconType = 'check-circle'
      break
    case 'danger':
      iconType = 'times-circle'
      break
    case 'info':
      iconType = 'info-circle'
      break
    case 'warning':
      iconType = 'exclamation-circle'
      break
  }
  return (
    <Transition in={show} timeout={300} animation='zoom-in-top'>
      <div className={classes}>
        <div className='oc-title'>
          <div className='title'>
            {showIcon ? <Icon icon={iconType} className='title-icon' /> : ''}
            {message}
          </div>
          <span
            onClick={() => {
              setShow(!show)
            }}
          >
            <Icon icon='times' className='times-icon' />
          </span>
        </div>
        <div className='oc-description'>{description}</div>
      </div>
    </Transition>
  )
}
Alert.defaultProps = {
  theme: 'dark',
  type: 'success'
}
export default Alert
