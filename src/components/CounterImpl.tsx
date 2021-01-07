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
    <div className="flex items-center justify-center bg-gray-100 px-8 lg:px-12 py-4 rounded-2xl">
      <button
        onClick={decrement}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-2 lg:py-3 lg:px-3 rounded-full"
      >
        <svg
          fill="#4B5563"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
        >
          <path d="M1 9h14a1 1 0 000-2H1a1 1 0 000 2z" />
        </svg>
      </button>
      <div className="flex items-end justify-center w-full">
        <h1 className="font-black text-4xl lg:text-6xl">{count}</h1>
        <span className="px-2 lg:px-4 text-base lg:text-2xl font-black text-gray-500 mb-1">
          /
        </span>
        <h3 className="text-base lg:text-2xl font-bold text-gray-500 mb-1">
          {goal}
        </h3>
      </div>
      <button
        onClick={increment}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-2 lg:py-3 lg:px-3 rounded-full"
      >
        <svg
          fill="#4B5563"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
        >
          <path d="M0 8a1 1 0 001 1h5.833A.167.167 0 017 9.167V15a1 1 0 002 0V9.167A.167.167 0 019.167 9H15a1 1 0 000-2H9.167A.167.167 0 019 6.833V1a1 1 0 00-2 0v5.833A.167.167 0 016.833 7H1a1 1 0 00-1 1z" />
        </svg>
      </button>
    </div>
  )
}
