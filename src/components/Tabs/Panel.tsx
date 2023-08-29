import React from 'react'
import type { FC } from 'react'
import type { PanelProps } from './type'

const Panel: FC<PanelProps> = (props) => {
  const { children } = props
  return <div>{children}</div>
}
Panel.displayName = 'Panel'
export default Panel
