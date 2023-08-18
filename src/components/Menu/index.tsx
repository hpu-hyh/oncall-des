import { FC } from 'react'

import Menu from './Menu'
import MenuItem from './MenuItem'
import subMenu from './subMenu'

import type { MenuProps, SubMenuProps, MenuItemProps } from './type'

export type ImenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
}

const TransMenu = Menu as ImenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = subMenu

export default TransMenu
