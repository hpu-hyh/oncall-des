import { FC } from 'react'
import Breadcrumb from './Breadcrumb'
import BreadcrumbItem from './BreadcrumbItem'

import type { BreadcrumbProps, BreadcrumbItemProps } from './type'

export type BreadcrumbComponent = FC<BreadcrumbProps> & {
  Item: FC<BreadcrumbItemProps>
}

const TransBreadcrumb = Breadcrumb as BreadcrumbComponent

TransBreadcrumb.Item = BreadcrumbItem

export default TransBreadcrumb
