import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Autocomplete from '../Autocomplete'
import { DataSourceType, DataSourceObject } from '../type'
interface plarType {
  value?: string
  number?: number
}
const meta: Meta<typeof Autocomplete> = {
  title: 'Form表单组件/Autocomplete',
  component: Autocomplete,

  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs']
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

export default meta
type Story = StoryObj<typeof Autocomplete>
// const lakersWithNumber = [
//   { value: 'bradley', number: 11 },
//   { value: 'pope', number: 1 },
//   { value: 'caruso', number: 4 },
//   { value: 'cook', number: 2 },
//   { value: 'cousins', number: 15 },
//   { value: 'james', number: 23 },
//   { value: 'AD', number: 3 },
//   { value: 'green', number: 14 },
//   { value: 'howard', number: 39 },
//   { value: 'kuzma', number: 0 }
// ]
function handleFetch(query: string): Promise<DataSourceObject[]> {
  const url = `http://api.github.com/search/users?q=${query}`
  return fetch(url)
    .then((res) => res.json())
    .then(({ items }) => {
      return items
        ?.slice(0, 10)
        .map((item: { login: any }) => ({ value: item.login, ...item }))
    })
}
// function handleFetch(query: string) {
//   return lakersWithNumber.filter((item) => item.value.includes(query))
// }
function renderItem(query: DataSourceType<plarType>) {
  return (
    <>
      <>{query.value}</>
      {/* <h2>{query.number}</h2> */}
    </>
  )
}
export const Def: Story = {
  args: {
    fetchSuggestions: handleFetch,
    renderOption: renderItem
  }
}
