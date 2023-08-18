import React from 'react'
import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import type { TransitionProps } from './type'

const Transition: FC<TransitionProps> = (props) => {
  const { children, classNames, animation, wrapper, ...resProps } = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...resProps}
    >
      {/**
       *<>{children}</>
       *{wrapper ? <div>{children}</div> : children}
       *其实原本应该写成这样的,但是外层包裹div会报错,所以用空标签包裹起来
       *目的是为了覆盖children组件自身设置的显示消失动画
       *再者,该组件下只能有一个root元素
       */}
      {wrapper ? <>{children}</> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}
export default Transition
