import React from 'react'
import { FC } from 'react'
import classNames from 'classnames'

import { ButtonProps } from './type'
import { NativeButtonProps } from './type'
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 */
export const Button: FC<ButtonProps> = (props) => {
  const {
    loading = false,
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  const classes = classNames('oc-btn', className, {
    [`oc-btn-${btnType}`]: btnType,
    [`oc-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
    loading: loading
  })
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button
        type='button'
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button
