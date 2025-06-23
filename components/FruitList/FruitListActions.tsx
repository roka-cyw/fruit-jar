import React from 'react'

import GroupBySelector from './GroupBySelector'
import ViewToggle from './ViewToggle'

import type { GroupByOption, ViewMode } from '../../types'

interface FruitListActionsProps {
  groupBy: GroupByOption
  onGroupByChange: (value: GroupByOption) => void
  viewMode: ViewMode
  onViewModeChange: (value: ViewMode) => void
}

const FruitListActions: React.FC<FruitListActionsProps> = ({
  groupBy,
  onGroupByChange,
  viewMode,
  onViewModeChange
}) => {
  return (
    <div className='flex flex-row justify-around gap-24 p-4 bg-gray-50 rounded-lg border border-gray-200'>
      <GroupBySelector value={groupBy} onChange={onGroupByChange} />
      <ViewToggle mode={viewMode} onChange={onViewModeChange} />
    </div>
  )
}

export default FruitListActions
