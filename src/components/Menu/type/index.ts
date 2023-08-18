export type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  defaultIndex?: string
  mode?: MenuMode
  className?: string
  // React18中props删除了children属性
  children?: React.ReactNode
  style?: React.CSSProperties
  onSelect?: (selectedIndex: string) => void
  defaultOpenSubMenus?: string[]
}

export interface MenuItemProps {
  index?: string
  children?: React.ReactNode
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export interface SubMenuProps {
  index?: string
  title?: string
  children?: React.ReactNode
  className?: string
}

// context传值类型
export interface IMenuContext {
  index: string
  onSelect?: (selectedIndex: string) => void
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}
