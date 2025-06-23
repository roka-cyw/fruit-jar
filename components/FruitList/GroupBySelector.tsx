import React from 'react'

import type { GroupByOption } from '../../types'

interface GroupBySelectorProps {
  value: GroupByOption
  onChange: (value: GroupByOption) => void
}

const GroupBySelector: React.FC<GroupBySelectorProps> = ({ value, onChange }) => {
  const options = [
    { value: 'none', label: 'None' },
    { value: 'family', label: 'Family' },
    { value: 'order', label: 'Order' },
    { value: 'genus', label: 'Genus' }
  ]

  return (
    <div className='flex flex-col'>
      <label className='text-sm font-medium text-gray-700 mb-1'>Group by</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value as GroupByOption)}
        className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GroupBySelector
