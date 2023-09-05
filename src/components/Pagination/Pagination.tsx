import classNames from 'classnames'
import React, { useState } from 'react'
import type { FC } from 'react'
import Icon from '../Icon'

interface IProps {
  defaultCurrent?: number
  total: number
  groupCount?: number
  simple?: boolean
}

const Pagination: FC<IProps> = (props) => {
  const {
    defaultCurrent = 0,
    total,
    // currentPage = 0,
    groupCount = 5,
    simple
  } = props
  const [isActive, setIsActive] = useState(defaultCurrent)
  const [startPage, setStartPage] = useState(1)
  const [inputValue, setInputVlaue] = useState(1)

  const handleClick = (index: number) => {
    if (index + 5 >= total) {
      const newStartPage = total - 5
      setStartPage(newStartPage)
    }
    if (index >= groupCount && index + 5 < total) {
      const newStartPage = index - 2
      setStartPage(newStartPage)
    }
    if (index < groupCount) {
      setStartPage(1)
    }
    //第一页时重新设置分组的起始页
    if (index === 0) {
      setStartPage(0)
    }
    setIsActive(index - 1)
  }
  const leftHandleClick = () => {
    if (isActive > 0) {
      const newIsActive = isActive
      handleClick(newIsActive)
    }
  }

  const rightHandleClick = () => {
    if (isActive < total - 1) {
      const newIsActive = isActive + 2
      handleClick(newIsActive)
    }
  }

  const paginationItemsList: number[] = []
  for (let i = 1; i <= total; i++) {
    paginationItemsList.push(i)
  }

  const renderPaginationItem = () => {
    if (total <= 10) {
      return paginationItemsList.map((item, index) => (
        <li
          key={index}
          className={classNames('pagination-item', {
            'is-active': index === isActive
          })}
          onClick={() => handleClick(index)}
        >
          <a>{item}</a>
        </li>
      ))
    } else if (total > 10) {
      const pages = []
      let pageLength = 0
      if (groupCount + startPage > total) {
        pageLength = total
      } else {
        pageLength = groupCount + startPage
      }
      // 第一页
      pages.push(
        <li
          key={1}
          className={classNames('pagination-item', {
            'is-active': 0 === isActive
          })}
          onClick={() => handleClick(1)}
        >
          <a>{1}</a>
        </li>
      )
      //前面省略号(当当前页码比分组的页码大时显示省略号)
      if (isActive + 1 >= groupCount) {
        pages.push(
          <li className={classNames('pagination-item')} key={-1}>
            ···
          </li>
        )
      }
      //非第一页和最后一页显示

      for (let index = startPage; index < pageLength; index++) {
        if (index <= total && index > 1) {
          pages.push(
            <li
              className={classNames('pagination-item', {
                'is-active': index - 1 === isActive
              })}
              key={index}
              onClick={() => handleClick(index)}
            >
              <a> {index}</a>
            </li>
          )
        }
      }
      //后面省略号
      if (total - startPage >= groupCount + 2) {
        pages.push(
          <li className={classNames('pagination-item')} key={-2}>
            ···
          </li>
        )
      }
      // 最后一页
      pages.push(
        <li
          key={total}
          className={classNames('pagination-item', {
            'is-active': total - 1 === isActive
          })}
          onClick={() => handleClick(total)}
        >
          <a>{total}</a>
        </li>
      )
      return pages
    }
  }
  const renderPaginationSelectorItem = () => {
    return (
      <div className='pagination-selector'>
        <p>10 / 页</p>
      </div>
    )
  }
  const renderSimplePaginationItem = () => {
    return (
      <div className='simple-pager'>
        <input type='text' value={isActive} /> <p>/</p> {total}
      </div>
    )
  }

  return (
    <div className='oc-pagination'>
      {simple ? (
        <ul className='pagination-items'>
          <li className='pagination-left' onClick={leftHandleClick}>
            <Icon icon='angle-left' className='angle-left' />
          </li>
          {renderSimplePaginationItem()}
          <li className='pagination-right' onClick={rightHandleClick}>
            <Icon icon='angle-right' className='angle-right' />
          </li>
        </ul>
      ) : (
        <ul className='pagination-items'>
          <li className='pagination-left' onClick={leftHandleClick}>
            <Icon icon='angle-left' className='angle-left' />
          </li>
          {renderPaginationItem()}
          <li className='pagination-right' onClick={rightHandleClick}>
            <Icon icon='angle-right' className='angle-right' />
          </li>
          {total > 50 ? renderPaginationSelectorItem() : null}
        </ul>
      )}
    </div>
  )
}

export default Pagination
