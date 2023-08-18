import React from 'react'
import type { FC } from 'react'

import classNames from 'classnames'

import Icon from '../Icon/Icon'
import type { InputProps } from './type'
/**
 *
 *通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *###何时使用
 * 需要用户输入表单域内容时。
 * 提供组合型输入框，带搜索的输入框，还可以进行大小选择。
 */

const Input: FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  const classes = classNames('oc-input-wrapper', {
    [`input-size-${size}`]: size,
    disabled: disabled,
    'input-group': prepend || append,
    'input-group-append': append,
    'input-group-prepend': prepend
  })
  // const fixControlledValue = (value: any) => {
  //   if (typeof value === 'undefined' || value === null) {
  //     return ''
  //   }
  //   return value
  // }
  // if ('value' in props) {
  //   delete restProps.defaultValue
  //   restProps.value = fixControlledValue(props.value)
  // }
  return (
    <div className={classes} style={style}>
      {prepend && <div className='oc-input-group-prepend'>{prepend}</div>}
      {icon && (
        <div className='oc-icon-wrapper'>
          <Icon icon={icon} title={`title-${icon}`}></Icon>
        </div>
      )}
      <input className='oc-input' disabled={disabled} {...restProps} />
      {append && <div className='oc-input-group-append'>{append}</div>}
    </div>
  )
}
Input.defaultProps = {
  placeholder: 'Please Input',
  disabled: false
}

export default Input
