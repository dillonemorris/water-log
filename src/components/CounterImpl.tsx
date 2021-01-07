import React from 'react'

type CounterImplProps = {
  goal: number
  count: number
  increment: () => void
  decrement: () => void
}

export const CounterImpl: React.FC<CounterImplProps> = ({
  goal,
  count,
  increment,
  decrement,
}) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 px-12 py-4 rounded-2xl">
      <button
        onClick={decrement}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-3 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 40 40"
        >
          <path
            d="M1.25 20.063h37.5"
            stroke="#4B5563"
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="flex items-end justify-center w-full">
        <h1 className="font-black text-6xl">{count}</h1>
        <span className="px-4 text-2xl font-black text-gray-500 mb-1">/</span>
        <h3 className="text-2xl font-bold text-gray-500 mb-1">{goal}</h3>
      </div>
      <button
        onClick={increment}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-3 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 40 40"
        >
          <g
            stroke="#4B5563"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1.25 20h37.5M20 1.25v37.5" strokeWidth="5" />
          </g>
        </svg>
      </button>
    </div>
  )
}
