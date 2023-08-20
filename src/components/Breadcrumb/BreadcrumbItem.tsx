import React, { FC, useContext } from 'react'

import { Navigate } from 'react-router-dom'

import { BreadcrunbContext } from './Breadcrumb'
import type { BreadcrumbItemProps } from './type'

import classNames from 'classnames'

const BreadcrumbItem: FC<BreadcrumbItemProps> = (props) => {
  const { className, href, onClick, children, title } = props
  const click = () => {
    href && Navigate({ to: `${href}` })
  }
  const context = useContext(BreadcrunbContext)
  return (
    <div className='oc-breadcrumb-items'>
      <div
        className={classNames([className, 'oc-breadcrumb-item'])}
        onClick={onClick || click}
      >
        {title}
        {children}
      </div>
      <div className='oc-separator'>{context.separator}</div>
    </div>
  )
}

BreadcrumbItem.displayName = 'BreadcrumbItem'

export default BreadcrumbItem
