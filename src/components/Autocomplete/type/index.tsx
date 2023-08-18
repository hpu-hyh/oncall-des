import type { InputProps } from '../../Input/type'
import type { ReactElement } from 'react'
export interface DataSourceObject {
  value: string
}
// eslint-disable-next-line @typescript-eslint/ban-types
export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
}
