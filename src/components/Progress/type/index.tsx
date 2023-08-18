import { ThemeType } from '../../Icon/type'

export interface ProgressProps {
  percent: number
  strokeHeight?: number
  showText?: boolean
  styles?: React.CSSProperties
  theme?: ThemeType
}
