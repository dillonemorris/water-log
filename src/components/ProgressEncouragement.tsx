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
    <div className="bg-gray-100 flex items-center mt-7 rounded-md ml-4 justify-center w-full">
      <p className="text-xl font-bold text-gray-900">
        {encouragements[safeKey]}
      </p>
    </div>
  )
}
