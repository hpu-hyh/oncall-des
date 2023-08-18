import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
export interface IconProps extends FontAwesomeIconProps {
  /**设置 icon 的主题 */
  theme?: ThemeType
}
