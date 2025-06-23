import { useState } from 'react'

import JarContents from './JarContents'
import CalorieChart from './CalorieChart'

import type { JarItem } from '../../types'
interface Props {
  jarItems: JarItem[]
  totalCalories: number
  onRemoveItem: (jarItemId: string) => void
  onСlearAllFromJar: () => void
}

type JarViewMode = 'list' | 'chart'

const FruitJar = ({ jarItems, totalCalories, onRemoveItem, onСlearAllFromJar }: Props) => {
  const [viewMode, setViewMode] = useState<JarViewMode>('list')
  const totalItems = jarItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleViewMode = (mode: JarViewMode) => () => {
    setViewMode(mode)
  }

  return (
    <div className='h-full flex flex-col p-6'>
      {/* Header with View Toggle */}
      <div className='mb-6'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-bold text-gray-800 flex items-center gap-2'>Selected Fruits</h2>
          {jarItems.length > 0 && (
            <button
              onClick={onСlearAllFromJar}
              className='px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-600 transition-colors'
            >
              Clear All
            </button>
          )}
        </div>

        {/* View Toggle */}
        {jarItems.length > 0 && (
          <div className='flex items-center gap-4 mb-4'>
            <label className='text-sm font-medium text-gray-700'>View:</label>
            <div className='flex rounded-md border border-gray-300 overflow-hidden'>
              <button
                onClick={handleViewMode('list')}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'list' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                List
              </button>
              <button
                onClick={handleViewMode('chart')}
                className={`px-4 py-2 text-sm font-medium border-l border-gray-300 transition-colors ${
                  viewMode === 'chart' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Chart
              </button>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className='text-sm text-gray-600'>
          <div>Items: {totalItems}</div>
          <div className='font-medium text-lg mt-1'>Total: {totalCalories} calories</div>
        </div>
      </div>

      {/* Content */}
      {jarItems.length === 0 ? (
        <div className='flex items-center justify-center p-6 '>
          <div className='text-center text-gray-500'>
            <div className='text-4xl mb-2'>🫙</div>
            <div>Your jar is empty</div>
            <div className='text-sm'>Add some fruits from the left!</div>
          </div>
        </div>
      ) : (
        <div className='flex-1 min-h-0'>
          {viewMode === 'list' ? (
            <JarContents jarItems={jarItems} onRemoveItem={onRemoveItem} />
          ) : (
            <div className='flex items-center justify-center'>
              <CalorieChart jarItems={jarItems} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default FruitJar
