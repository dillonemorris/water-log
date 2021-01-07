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
    <div className="h-screen fixed w-full bg-wave-background bg-cover">
      <div className="flex justify-end my-6 mx-6">
        <button
          className="rounded-full uppercase tracking-wide font-semibold bg-gray-100 text-gray-600 px-12 py-3"
          onClick={reset}
        >
          Clear
        </button>
      </div>
      <div className="pt-32">
        <div className="flex flex-col items-center max-w-lg m-auto ">
          <h1 className="text-6xl font-black text-black pb-2">
            Stay Hydrated.
          </h1>
          <p className="font-extrabold mb-8 text-blue-600 text-3xl">
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
