import { useEffect, useState } from 'react'

function useDebounce(value: any, delay = 300) {
  const [debouncedValue, setBouncedValue] = useState(value)
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setBouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}

export default useDebounce
