export type ThemeType = 'light' | 'dark'
export type AlertType = 'success' | 'info' | 'danger' | 'warning'
export interface AlertProps {
  className?: string
  /**设置 Alert 的主题 */
  theme?: ThemeType
  /**设置 Alert 的类型 */
  type?: AlertType
  /**设置 Alert 的message */
  message?: string
  /**设置 Alert 的description */
  description?: string
  /**设置 Alert 的图标显示与否 */
  showIcon?: boolean
}
