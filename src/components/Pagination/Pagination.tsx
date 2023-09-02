import classNames from 'classnames'
import React, { useState } from 'react'
import type { FC } from 'react'
import Icon from '../Icon'

interface IProps {
  defaultCurrent?: number
  total: number
}

const Pagination: FC<IProps> = (props) => {
  const { defaultCurrent, total } = props
  const [isActive, setIsActive] = useState(0)

  const handleClick = (index: React.SetStateAction<number>) => {
    setIsActive(index)
  }
  const leftHandleClick = () => {
    if (isActive > 0) {
      const newIsActive = isActive - 1
      setIsActive(newIsActive)
    } else {
      setIsActive(total - 1)
    }
  }

  const rightHandleClick = () => {
    if (isActive < total - 1) {
      const newIsActive = isActive + 1
      setIsActive(newIsActive)
    } else {
      setIsActive(0)
    }
  }

  const paginationItemsList: number[] = []
  for (let i = 1; i <= total; i++) {
    paginationItemsList.push(i)
  }
  console.log(isActive)

  const renderPaginationItem = () => {
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
  }

  return (
    <div className='oc-pagination'>
      <ul className='pagination-items'>
        <li className='pagination-left' onClick={leftHandleClick}>
          <Icon icon='angle-left' className='angle-left' />
        </li>
        {renderPaginationItem()}
        <li className='pagination-right' onClick={rightHandleClick}>
          <Icon icon='angle-right' className='angle-right' />
        </li>
      </ul>
    </div>
  )
}

export default Pagination
