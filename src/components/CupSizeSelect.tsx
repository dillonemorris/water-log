import React from 'react'

type CupSizeSelectProps = {
  value: number
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const CupSizeSelect: React.FC<CupSizeSelectProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="mr-2 lg:mr-4">
      <label
        htmlFor="Cup size"
        className="block text-sm lg:text-base font-medium text-gray-600"
      >
        Cup size
      </label>
      <label htmlFor="ounces" className="sr-only">
        Ounces
      </label>
      <select
        id="Ounces"
        name="Cup size ounces"
        value={value}
        onChange={onChange}
        className="bg-gray-100 text-base lg:text-2xl font-bold focus:ring-blue-500 mt-1 focus:border-blue-500 py-2 pr-8 lg:pr-12 border-transparent bg-transparent text-gray-600 rounded-md"
      >
        <option>16</option>
        <option>18</option>
        <option>24</option>
        <option>32</option>
        <option>40</option>
      </select>
    </div>
  )
}
