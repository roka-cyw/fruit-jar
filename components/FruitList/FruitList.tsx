import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { Loader } from 'lucide-react'

import FruitListActions from './FruitListActions'
import FruitListView from './FruitListView'
import FruitTableView from './FruitTableView'
import GroupedFruitDisplay from '../FruitList/GroupedFruitDisplay'

import { fruitApi } from '../../services/fruitApi'
import { groupFruits } from '../../utils/grouping'

import type { Fruit, GroupByOption, ViewMode } from '../../types'

interface Props {
  onAddFruit: (fruit: Fruit) => void
  onAddMultiple: (fruits: Fruit[]) => void
}

const FruitList = ({ onAddFruit, onAddMultiple }: Props) => {
  const [fruits, setFruits] = useState<Fruit[]>([])
  const [loading, setLoading] = useState(true)
  const [groupBy, setGroupBy] = useState<GroupByOption>('none')
  const [viewMode, setViewMode] = useState<ViewMode>('list')

  const groupedFruits = groupBy !== 'none' ? groupFruits(fruits, groupBy) : []

  useEffect(() => {
    const loadFruits = async () => {
      try {
        const data = await fruitApi.getAllFruits()
        setFruits(data)

        toast('Fruits fetched successfully', { icon: '👌' })
      } catch (error) {
        toast.error('Failed to fetch fruits')
        console.error('Error fetching fruits:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFruits()
  }, [])

  if (loading) {
    return (
      <div className='h-full flex items-center justify-center'>
        <div className='text-gray-500 flex'>
          <Loader className='animate-spin w-6 h-6' />
          <p className='ml-2'>Loading fruits... </p>
        </div>
      </div>
    )
  }

  return (
    <div className='h-full bg-grey-200 flex flex-col p-6 gap-10'>
      <FruitListActions
        groupBy={groupBy}
        onGroupByChange={setGroupBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {groupBy !== 'none' ? (
        <GroupedFruitDisplay
          groupedFruits={groupedFruits}
          viewMode={viewMode}
          onAddFruit={onAddFruit}
          onAddGroup={onAddMultiple}
        />
      ) : // Regular flat display when groupBy is 'none'
      viewMode === 'list' ? (
        <FruitListView fruits={fruits} onAddFruit={onAddFruit} />
      ) : (
        <FruitTableView fruits={fruits} onAddFruit={onAddFruit} />
      )}
    </div>
  )
}

export default FruitList
