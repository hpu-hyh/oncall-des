import React, { FC, createContext } from 'react'
import {
  BreadcrumbProps,
  IBreadcrumbContext,
  BreadcrumbItemProps
} from './type'
export const BreadcrunbContext = createContext<IBreadcrumbContext>({
  separator: '/'
})
/**
 *
 *Breadcrumb,面包屑导航
 */
export const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { separator, children } = props
  const passedContext: IBreadcrumbContext = {
    separator: separator ? separator : '/'
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<BreadcrumbItemProps>
      const { displayName } = childElement.type
      if (displayName === 'BreadcrumbItem') {
        return React.cloneElement(childElement, {
          separator: separator
        })
      } else {
        console.error(
          'Warning: Menu has a child which is not a BreadcrumbItemProp component'
        )
      }
    })
  }

  return (
    <div className='oc-breadcrumb'>
      <BreadcrunbContext.Provider value={passedContext}>
        {renderChildren()}
      </BreadcrunbContext.Provider>
    </div>
  )
}

Breadcrumb.defaultProps = {
  separator: '/'
}

export default Breadcrumb
