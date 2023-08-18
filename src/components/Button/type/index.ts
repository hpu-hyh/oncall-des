export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
export type Buttonshape = 'default' | 'round' | 'circle'
export interface BaseButtonProps {
  className?: string
  /**设置 Button 的禁用 */
  disabled?: boolean
  /**设置 Button 的尺寸 */
  size?: ButtonSize
  /**设置 Button 的类型 */
  btnType?: ButtonType
  shape?: Buttonshape
  children: React.ReactNode
  href?: string
  loading?: boolean | { delay?: number }
}
export type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>

export type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
