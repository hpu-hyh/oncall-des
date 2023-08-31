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
    console.log(isActive)
  }
  const leftHandleClick = () => {
    if (isActive > 0) {
      setIsActive(isActive - 1)
    } else {
      setIsActive(total - 1)
    }
    console.log(isActive)
  }
  const rightHandleClick = () => {
    if (isActive < total - 1) {
      setIsActive(isActive + 1)
    } else {
      setIsActive(0)
    }

    console.log(isActive)
  }
  const paginationItemsList: number[] = []
  for (let i = 1; i <= total; i++) {
    paginationItemsList.push(i)
  }

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
