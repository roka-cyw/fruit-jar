import { useState } from 'react'

import type { Fruit, ViewMode, GroupedFruits } from '../../types'

interface Props {
  groupedFruits: GroupedFruits[]
  viewMode: ViewMode
  onAddFruit: (fruit: Fruit) => void
  onAddGroup: (fruits: Fruit[]) => void
}

const GroupedFruitDisplay = ({ groupedFruits, viewMode, onAddFruit, onAddGroup }: Props) => {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())

  const toggleGroup = (groupName: string) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(groupName)) {
      newExpanded.delete(groupName)
    } else {
      newExpanded.add(groupName)
    }
    setExpandedGroups(newExpanded)
  }

  const totalFruits = groupedFruits.reduce((total, group) => total + group.fruits.length, 0)

  return (
    <div className='flex-1 overflow-y-auto'>
      <div className='mb-4'>
        <h2 className='text-xl font-bold'>All Fruits ({totalFruits})</h2>
      </div>

      <div className='space-y-4'>
        {groupedFruits.map(group => {
          const isExpanded = expandedGroups.has(group.groupName)

          return (
            <div key={group.groupName} className='border border-gray-200 rounded-lg'>
              {/* Group Header */}
              <div
                className='flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors'
                onClick={() => toggleGroup(group.groupName)}
              >
                <div className='flex items-center gap-2'>
                  <span className='text-lg font-medium'>
                    {isExpanded ? '⬇️' : '➡️'} {group.groupName}
                  </span>
                  <span className='text-sm text-gray-500'>({group.fruits.length})</span>
                </div>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    onAddGroup(group.fruits)
                  }}
                  className='px-3 py-1 bg-green-700 text-white text-sm rounded hover:bg-green-600 transition-colors'
                >
                  Add All
                </button>
              </div>

              {/* Group Content */}
              {isExpanded && (
                <div className='p-4 border-t border-gray-200'>
                  {viewMode === 'list' ? (
                    // List View for Group
                    <div className='space-y-2'>
                      {group.fruits.map(fruit => (
                        <div
                          key={fruit.id}
                          className='flex justify-between items-center p-3 bg-white border border-gray-100 rounded hover:bg-gray-50 transition-colors'
                        >
                          <div className='flex flex-col'>
                            <span className='font-medium text-gray-900'>{fruit.name}</span>
                            <span className='text-sm text-gray-500'>
                              {fruit.nutritions.calories} calories • {fruit.family}
                            </span>
                          </div>
                          <button
                            onClick={() => onAddFruit(fruit)}
                            className='px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-600 transition-colors'
                          >
                            Add
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Table View for Group
                    <div className='overflow-x-auto'>
                      <table className='min-w-full bg-white'>
                        <thead className='bg-gray-50'>
                          <tr>
                            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>Name</th>
                            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>Family</th>
                            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>Order</th>
                            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>Genus</th>
                            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>
                              Calories
                            </th>
                            <th className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase'>Action</th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200'>
                          {group.fruits.map(fruit => (
                            <tr key={fruit.id} className='hover:bg-gray-50'>
                              <td className='px-4 py-2 text-sm font-medium text-gray-900'>{fruit.name}</td>
                              <td className='px-4 py-2 text-sm text-gray-500'>{fruit.family}</td>
                              <td className='px-4 py-2 text-sm text-gray-500'>{fruit.order}</td>
                              <td className='px-4 py-2 text-sm text-gray-500'>{fruit.genus}</td>
                              <td className='px-4 py-2 text-sm text-gray-500'>{fruit.nutritions.calories}</td>
                              <td className='px-4 py-2'>
                                <button
                                  onClick={() => onAddFruit(fruit)}
                                  className='px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-600 transition-colors'
                                >
                                  Add
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GroupedFruitDisplay
