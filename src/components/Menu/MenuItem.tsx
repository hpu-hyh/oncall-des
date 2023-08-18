import React, { useContext } from 'react'

import type { FC } from 'react'

import classNames from 'classnames'

import { MenuContext } from './Menu'
// type
import { MenuItemProps } from './type'

const MenuItem: FC<MenuItemProps> = (props) => {
  const { index, children, disabled, className, style } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    disabled: disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && index) {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
MenuItem.displayName = 'MenuItem'

// memo不能用,害人
export default MenuItem
