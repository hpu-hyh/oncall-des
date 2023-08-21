import React from 'react'
import type { FC } from 'react'

import Icon from '../Icon'

interface BacktopProps {
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Backtop: FC<BacktopProps> = (props) => {
  const { style, children } = props
  return (
    <div className='oc-backtop' style={style}>
      {children ? children : <Icon icon='caret-up' className='backtop-icon' />}
    </div>
  )
}

export default Backtop
