export interface TabsProps {
  style?: React.CSSProperties
  // className?: string
  children?: React.ReactNode
}

export interface PanelProps {
  label: string
  name: string
  children: React.ReactNode
  disabled?: boolean
  className?: string
}
