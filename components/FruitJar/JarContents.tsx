import type { JarItem } from '../../types'

interface Props {
  jarItems: JarItem[]
  onRemoveItem: (jarItemId: string) => void
}

const JarContents = ({ jarItems, onRemoveItem }: Props) => {
  const handleRemoveItem = (jarItemId: string) => () => {
    onRemoveItem?.(jarItemId)
  }

  return (
    <div className='h-full flex flex-col'>
      <h3 className='text-lg font-medium text-gray-800 mb-3'>Selected Fruits</h3>

      <div className='flex-1 overflow-y-auto space-y-2'>
        {jarItems.map(item => (
          <div
            key={item.id}
            className='flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
          >
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-gray-900'>{item.fruit.name}</span>
                {item.quantity > 1 && (
                  <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'>x{item.quantity}</span>
                )}
              </div>
              <div className='text-sm text-gray-500'>
                {item.fruit.nutritions.calories} cal each
                {item.quantity > 1 && (
                  <span className='ml-2 font-medium'>= {item.fruit.nutritions.calories * item.quantity} cal total</span>
                )}
              </div>
            </div>

            <button
              onClick={handleRemoveItem(item.id)}
              className='px-2 py-1 bg-red-100 text-red-700 text-sm rounded hover:bg-red-200 transition-colors flex-shrink-0'
              title={`Remove one ${item.fruit.name}`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JarContents
