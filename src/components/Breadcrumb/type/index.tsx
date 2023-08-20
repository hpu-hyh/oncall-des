// Breadcrumb
export interface BreadcrumbProps {
  children: JSX.Element | JSX.Element[]
  /**自定义分隔符*/
  separator?: string
}
export interface IBreadcrumbContext {
  /**自定义分隔符*/
  separator?: string
}
// BreadcrumbItem
export interface BreadcrumbItemProps {
  className?: string
  href?: string
  onClick?(): void
  children: any
  title?: string
  /**自定义分隔符*/
  separator?: string
}
