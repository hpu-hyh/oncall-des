export interface BacktopProps {
  // 自定义样式
  style?: React.CSSProperties
  children?: React.ReactNode
  /** 滚动高度达到此参数值才出现组件 */
  visibilityHeight?: number
}
