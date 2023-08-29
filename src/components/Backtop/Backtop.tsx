import React, { useState } from 'react'
import type { FC } from 'react'

import Icon from '../Icon'

import type { BacktopProps } from './type'
/**
 * Backtop
 * ###导航
 */
const Backtop: FC<BacktopProps> = (props) => {
  const { style, children, visibilityHeight = 400 } = props
  const [isShow, setIsShow] = useState(false)

  // 处理点击事件,返回顶部
  const handleClick = () => {
    let scrollHeight =
      document.documentElement.scrollTop || document.body.scrollTop
    const timer = setInterval(() => {
      scrollHeight -= 50
      if (scrollHeight > 0) {
        window.scrollTo(0, scrollHeight)
      } else {
        window.scrollTo(0, 0)
        clearInterval(timer)
      }
    }, 10)
  }
  // 处理组件的现实与消失
  window.onscroll = function () {
    const scrollHeight =
      document.documentElement.scrollTop || document.body.scrollTop
    if (scrollHeight > visibilityHeight) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }
  }
  // 渲染组件节点
  const renderChildrenEl = () => {
    return (
      <div className='oc-backtop' style={style} onClick={handleClick}>
        {children ? (
          children
        ) : (
          <Icon icon='caret-up' className='backtop-icon' />
        )}
      </div>
    )
  }
  return <>{isShow && renderChildrenEl()}</>
}

export default Backtop
