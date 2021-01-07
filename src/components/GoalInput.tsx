import React from 'react'

type GoalInputProps = {
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const GoalInput: React.FC<GoalInputProps> = ({ value, onChange }) => {
  return (
    <div className="mr-2 lg:mr-4">
      <label
        htmlFor="Goal"
        className="block text-sm lg:text-base font-medium text-gray-600"
      >
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
          className="text-base lg:text-2xl mt-1 w-24 lg:w-32 font-bold text-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 border-none block pl-3 pr-2 rounded-md"
          placeholder="0"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="ounces" className="sr-only">
            Ounces
          </label>
          <span className="text-sm lg:text-base focus:ring-blue-500 focus:border-blue-500 py-0 pl-2 pr-3 border-transparent bg-transparent text-gray-600">
            oz
          </span>
        </div>
      </div>
    </div>
  )
}
