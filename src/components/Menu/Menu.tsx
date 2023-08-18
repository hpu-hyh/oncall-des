import React, { createContext, useState } from 'react'

import type { FC } from 'react'

import classNames from 'classnames'

import { MenuItemProps } from './type'

// type
import { MenuProps, IMenuContext } from './type'

export const MenuContext = createContext<IMenuContext>({ index: '0' })
const Menu: FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    onSelect,
    children,
    defaultOpenSubMenus
  } = props
  const [currentIndex, setCurrentIndex] = useState(defaultIndex)
  const classes = classNames('oc-menu', className, {
    [`oc-menu-${mode}`]: mode
  })
  const handleClick = (index: string) => {
    setCurrentIndex(index)
    // onSelect是用户的自定义操作
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentIndex ? currentIndex : '0',
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus: defaultOpenSubMenus
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type

      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component'
        )
      }
    })
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: ['2']
}
export default Menu
