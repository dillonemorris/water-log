import React from 'react'
import { CounterImpl } from './components/CounterImpl'
import { CupSizeSelect } from './components/CupSizeSelect'
import { GoalInput } from './components/GoalInput'
import { ProgressEncouragement } from './components/ProgressEncouragement'
import { useCounter } from './useCounter'
import { useNumState } from './useNumState'

function App() {
  const [cupSize, setCupSize] = useNumState('cup-size', 16)
  const [goal, setGoal] = useNumState('goal', 80)
  const { count, resetCount, increment, decrement } = useCounter(cupSize)
  const reset = () => {
    resetCount()
    setGoal(80)
    setCupSize(16)
    localStorage.clear()
  }

  return (
    <div className="h-screen fixed w-full bg-wave-background bg-cover px-2">
      <div className="flex justify-end my-3 lg:my-6 mx-1 lg:mx-6">
        <button
          className="rounded-full uppercase tracking-wide font-semibold text-sm lg:text-base bg-gray-100 text-gray-600 px-6 lg:px-12 py-1 lg:py-3"
          onClick={reset}
        >
          Clear
        </button>
      </div>
      <div className="pt-16 lg:pt-32">
        <div className="flex flex-col items-center max-w-lg m-auto ">
          <h1 className="text-4xl lg:text-6xl pb-0 lg:pb-2 font-black text-black ">
            Stay Hydrated.
          </h1>
          <p className="text-2xl lg:text-3xl font-extrabold mb-4 lg:mb-8 text-blue-600 ">
            It's the key to staying healthy.
          </p>

          <div className="bg-white w-full py-8 px-8 rounded-2xl shadow text-base flex flex-col max-w-4xl my-auto">
            <div className="flex mb-4">
              <CupSizeSelect
                value={cupSize}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCupSize(parseInt(e.target.value))
                }
              />
              <GoalInput
                value={goal}
                onChange={(e) => {
                  const valueAsNumber = parseInt(e.target.value)
                  if (isNaN(valueAsNumber)) return setGoal(0)
                  setGoal(valueAsNumber)
                }}
              />
              <ProgressEncouragement progress={count / goal} />
            </div>
            <CounterImpl
              count={count}
              increment={increment}
              decrement={decrement}
              goal={goal}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
