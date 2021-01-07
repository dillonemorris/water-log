import { useCallback } from 'react'
import { useNumState } from './useNumState'

const useCounter = (step: number) => {
  const [count, setCount] = useNumState('count', 0)
  const resetCount = useCallback(() => setCount(0), [setCount])
  const increment = useCallback(
    () => setCount((currentCount) => currentCount + step),
    [setCount, step]
  )
  const decrement = useCallback(
    () =>
      setCount((currentCount) =>
        currentCount - step > 0 ? currentCount - step : 0
      ),
    [setCount, step]
  )

  return {
    count,
    resetCount,
    increment,
    decrement,
  }
}

export { useCounter }
