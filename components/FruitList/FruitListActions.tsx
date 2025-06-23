import GroupBySelector from './GroupBySelector'
import ViewToggle from './ViewToggle'

import type { GroupByOption, ViewMode } from '../../types'

interface Props {
  groupBy: GroupByOption
  onGroupByChange: (value: GroupByOption) => void
  viewMode: ViewMode
  onViewModeChange: (value: ViewMode) => void
}

const FruitListActions = ({ groupBy, onGroupByChange, viewMode, onViewModeChange }: Props) => {
  return (
    <div className='flex flex-row justify-around gap-24 p-4 bg-gray-50 rounded-lg border border-gray-200'>
      <GroupBySelector value={groupBy} onChange={onGroupByChange} />
      <ViewToggle mode={viewMode} onChange={onViewModeChange} />
    </div>
  )
}

export default FruitListActions
