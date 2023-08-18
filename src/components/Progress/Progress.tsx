import React from 'react'
import type { FC } from 'react'
import { ProgressProps } from './type'

const Progress: FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props
  return (
    <div className='oc-progress-bar' style={styles}>
      <div
        className='oc-progress-bar-outer'
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`oc-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className='inner-text'>{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}
Progress.defaultProps = {
  strokeHeight: 14,
  theme: 'primary',
  showText: true
}

export default Progress
