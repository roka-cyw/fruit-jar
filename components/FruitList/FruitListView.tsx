import type { Fruit } from '../../types'

interface Props {
  fruits: Fruit[]
  onAddFruit: (fruit: Fruit) => void
}

const FruitListView = ({ fruits, onAddFruit }: Props) => {
  return (
    <div className='flex-1 overflow-y-auto'>
      <div className='mb-4'>
        <h2 className='text-xl font-bold'>All Fruits ({fruits.length})</h2>
      </div>

      <div className='space-y-3'>
        {fruits.map(fruit => (
          <div
            key={fruit.id}
            className='flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors'
          >
            <div className='flex flex-col'>
              <span className='font-medium text-gray-900'>{fruit.name}</span>
              <span className='text-sm text-gray-500'>
                {fruit.nutritions.calories} calories • {fruit.family}
              </span>
            </div>
            <button
              onClick={() => onAddFruit(fruit)}
              className='px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors flex-shrink-0'
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FruitListView
