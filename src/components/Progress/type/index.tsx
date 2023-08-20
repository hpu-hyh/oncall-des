import { ThemeType } from '../../Icon/type'

export interface ProgressProps {
  /** 进度条进度百分比 */
  percent: number
  strokeHeight?: number
  /**是否显示数字*/
  showText?: boolean
  /**自定义样式*/
  styles?: React.CSSProperties
  /** 主题色 */
  theme?: ThemeType
}
