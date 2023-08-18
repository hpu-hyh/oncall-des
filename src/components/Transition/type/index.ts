import type { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type animationType =
  | 'zoom-in-top'
  | 'zoom-in-right'
  | 'zoom-in-bottom'
  | 'zoom-in-left'

/**
 * interface  TransitionProps extends CSSTransitionProps
 * 嘎嘎报错,原因是CSSTransitionProps是个联合类型,但是interface不能拓展联合类型,这里改用type
 * 接口是通过继承的方式来扩展，类型别名是通过 & 来扩展
 */

export type TransitionProps = CSSTransitionProps & {
  animation?: animationType
  wrapper?: boolean
}
