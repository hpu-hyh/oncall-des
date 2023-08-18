import type { InputHTMLAttributes } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
export type InputSize = 'lg' | 'sm'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**设置 input 是否能用 */
  disabled?: boolean
  /**设置 input 的尺寸*/
  size?: InputSize
  /**设置 input 是否显示 icon , icon 类型自定义*/
  icon?: IconProp
  /**设置 input 首位处是否显示*/
  prepend?: string
  /**设置 input 末尾处是否显示*/
  append?: string
}
