import React, { useEffect, useRef, useState, ChangeEvent } from 'react'
import type { FC } from 'react'

import Input from '../Input/Input'
import Icon from '../Icon/Icon'
import Transition from '../Transition/transition'

// 自定义hook
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'

import type { AutoCompleteProps, DataSourceType } from './type'

const Autocomplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    renderOption,
    value = '',
    ...restProps
  } = props
  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [showLoading, setShowLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const debouncedValue = useDebounce(inputValue, 300)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  useClickOutside(componentRef, () => {
    setSuggestions([])
  })
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      setSuggestions([])
      const result = fetchSuggestions(debouncedValue)
      if (result instanceof Promise) {
        setShowLoading(true)
        result.then((data) => {
          setShowLoading(false)
          setSuggestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSuggestions(result)
        setShowDropdown(true)
        if (result.length > 0) {
          setShowDropdown(true)
        }
      }
    } else {
      setShowDropdown(false)
    }
  }, [debouncedValue])
  // 改变input的value
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  // 渲染下拉菜单
  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || showLoading}
        animation='zoom-in-top'
        timeout={300}
        onExited={() => {
          setSuggestions([])
        }}
      >
        <ul className='oc-suggestion-list'>
          {showLoading && (
            <div className='suggstions-loading-icon'>
              <Icon icon='spinner' spin />
            </div>
          )}
          {suggestions?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                className='suggestion-item'
              >
                <>{renderTemplate(item)}</>
              </li>
            )
          })}
        </ul>
      </Transition>
    )
  }

  return (
    <div className='oc-auto-complete' ref={componentRef}>
      <Input value={inputValue} onChange={handleChange} {...restProps} />
      {generateDropdown()}
    </div>
  )
}

export default Autocomplete
