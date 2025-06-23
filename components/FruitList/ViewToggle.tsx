import type { ViewMode } from '../../types'

interface Props {
  mode: ViewMode
  onChange: (mode: ViewMode) => void
}

const ViewToggle = ({ mode, onChange }: Props) => {
  const handleChange = (mode: ViewMode) => () => {
    onChange?.(mode)
  }

  return (
    <div className='flex flex-col'>
      <label className='text-sm font-medium text-gray-700 mb-1 ml-1'>View</label>
      <div className='flex rounded-md border border-gray-300 overflow-hidden w-fit'>
        <button
          onClick={handleChange('table')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            mode === 'table' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Table
        </button>
        <button
          onClick={handleChange('list')}
          className={`px-6 py-2 text-sm font-medium border-l border-gray-300 transition-colors ${
            mode === 'list' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          List
        </button>
      </div>
    </div>
  )
}

export default ViewToggle
