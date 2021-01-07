import React from 'react'

type GoalInputProps = {
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const GoalInput: React.FC<GoalInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="Goal" className="block font-medium text-gray-600">
        Goal
      </label>
      <div className="relative rounded-md">
        <input
          type="text"
          pattern="[0-9]*"
          name="goal"
          id="goal"
          onChange={onChange}
          value={value}
          className="text-2xl mt-1 w-32 font-bold text-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 border-none block pl-3 pr-2 rounded-md"
          placeholder="0"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="ounces" className="sr-only">
            Ounces
          </label>
          <span className="focus:ring-blue-500 focus:border-blue-500 py-0 pl-2 pr-3 border-transparent bg-transparent text-gray-600">
            ounces
          </span>
        </div>
      </div>
    </div>
  )
}
