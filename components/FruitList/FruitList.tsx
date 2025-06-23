import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

import FruitListActions from './FruitListActions'
import FruitListView from './FruitListView'
import FruitTableView from './FruitTableView'

import type { Fruit, GroupByOption, ViewMode } from '../../types'

const FruitList = () => {
  const [fruits, setFruits] = useState<Fruit[]>([])
  const [loading, setLoading] = useState(true)
  const [groupBy, setGroupBy] = useState<GroupByOption>('none')
  const [viewMode, setViewMode] = useState<ViewMode>('list')

  useEffect(() => {
    fetch('https://fruity-proxy.vercel.app/api/fruits', {
      headers: {
        'x-api-key': 'fruit-api-challenge-2025'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch fruits')
        }
        return response.json()
      })
      .then(data => {
        setFruits(data)
        setLoading(false)
        toast('Fruits fetched successfully', { icon: '👌' })
      })
      .catch(error => {
        toast.error('Failed to fetch fruits')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className='h-full flex items-center justify-center'>
        <div className='text-gray-500'>Loading fruits...</div>
      </div>
    )
  }

  return (
    <div className='h-full bg-grey-200 flex flex-col p-6 gap-10'>
      {/* Actions Section */}
      <div className=''>
        <FruitListActions
          groupBy={groupBy}
          onGroupByChange={setGroupBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>

      {/* Fruits List Section */}
      {viewMode === 'list' ? (
        <FruitListView fruits={fruits} onAddFruit={() => console.log('on add list')} />
      ) : (
        <FruitTableView fruits={fruits} onAddFruit={() => console.log('on add table')} />
      )}
    </div>
  )
}

export default FruitList
