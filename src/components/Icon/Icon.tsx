import React from 'react'
import type { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import type { IconProps } from './type'

const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  const classes = classNames('oc-icon', className, {
    [`oc-icon-${theme}`]: theme
  })
  return <FontAwesomeIcon className={classes} {...restProps} />
}
Icon.defaultProps = {
  theme: 'secondary'
}
export default Icon
