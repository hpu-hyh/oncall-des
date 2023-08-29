import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import type { PanelProps } from './type'
import type { TabsProps } from './type'
import classNames from 'classnames'

// React可以通过children访问到子组件的props
const Tabs: FC<TabsProps> = (props) => {
  const { style, children } = props
  const [activeTab, setActiveTab] = useState('')
  const [isActive, setIsActive] = useState(0)

  // 初始化Tabs
  useEffect(() => {
    const firstChild = React.Children.toArray(children)[0]
    // isValidElement确认元素是个hoc
    if (firstChild && React.isValidElement(firstChild)) {
      setActiveTab(firstChild.props.name)
    }
  }, [children])

  const handleClick = (name: React.SetStateAction<string>, index: number) => {
    setActiveTab(name)
    setIsActive(index)
  }

  const renderTabs = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<PanelProps>
      const { displayName } = childElement.type
      const classes = classNames('nav-btn', { 'is-active': isActive === index })
      if (displayName === 'Panel') {
        const { name, label, disabled } = childElement.props
        return (
          <div className='nav-btns'>
            <button
              className={classes}
              key={name}
              disabled={disabled}
              onClick={() => handleClick(name, index)}
            >
              {label}
            </button>
          </div>
        )
      } else {
        console.error(
          'Warning: Tabs has a child which is not a Panel component'
        )
      }
    })
  }
  const renderPanel = () => {
    return React.Children.map(children, (child) => {
      const childElement = child as React.FunctionComponentElement<PanelProps>
      const { displayName } = childElement.type
      if (displayName === 'Panel') {
        const { name, children } = childElement.props
        if (name === activeTab) {
          return children
        } else {
          return null
        }
      } else {
        console.error(
          'Warning: Tabs has a child which is not a Panel component'
        )
      }
    })
  }

  return (
    <div className='oc-tabs' style={style}>
      <div className='tabs-nav'>{renderTabs()}</div>
      <div className='tabs-panel'>{renderPanel()}</div>
    </div>
  )
}

export default Tabs
