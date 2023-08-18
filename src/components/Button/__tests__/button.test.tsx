import React from 'react'
import { render } from '@testing-library/react'
import Button from '../Button'

test('fast', () => {
  const wrapper = render(<Button>HHH</Button>)
  const element = wrapper.queryByText('HHH')
  expect(element).toBeTruthy()
  expect(element).toBeInTheDocument()
})
