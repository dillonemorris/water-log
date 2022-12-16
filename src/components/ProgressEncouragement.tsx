import React from 'react'

type ProgressEncouragementProps = {
  progress: number
}

const encouragements = [
  'Thirsty? 😅',
  'Nice start! 😄',
  'Keep going 🏄‍♀️',
  'Almost there 🤩',
  'You did it! 🥳',
]

export const ProgressEncouragement: React.FC<ProgressEncouragementProps> = ({
  progress,
}) => {
  const key = Math.floor((encouragements.length - 1) * progress)
  const keyMax = encouragements.length - 1
  const safeKey = key > keyMax ? keyMax : key
  return (
    <div className="flex items-center mt-6 lg:mt-7 rounded-md justify-center w-full">
      <p className="text-sm lg:text-xl font-bold text-gray-900">
        {encouragements[safeKey]}
      </p>
    </div>
  )
}
