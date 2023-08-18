import React, { useContext, useState } from 'react'

import type { FC } from 'react'

import classNames from 'classnames'

import { MenuContext } from './Menu'
// type
import { MenuItemProps, SubMenuProps } from './type'
import Icon from '../Icon/Icon'
import Transition from '../Transition/transition'

const SubMenu: FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened =
    index && context.mode === 'vertical'
      ? openedSubMenus.includes(index)
      : false
  const [menuOpen, setMenuOpen] = useState(isOpened)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }
  const clickEvents =
    context.mode === 'vertical' ? { onClick: handleClick } : {}
  const hoverEvents =
    context.mode === 'horizontal'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
          }
        }
      : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('oc-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type

      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error(
          'Warning: SubMenu has a child which is not a MenuItem component'
        )
      }
    })
    return (
      <Transition in={menuOpen} timeout={200} animation='zoom-in-top'>
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className='submenu-title' {...clickEvents}>
        {title}
        <Icon icon='angle-down' className='arrow-icon' />
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'

export default SubMenu
