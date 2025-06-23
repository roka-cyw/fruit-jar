import type { Fruit } from '../../types'

interface Props {
  fruits: Fruit[]
  onAddFruit: (fruit: Fruit) => void
}

const FruitTableView = ({ fruits, onAddFruit }: Props) => {
  return (
    <div className='flex-1 overflow-y-auto'>
      <div className='mb-4'>
        <h2 className='text-xl font-bold'>All Fruits ({fruits.length})</h2>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200 rounded-lg'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
              <th className='px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Family</th>
              <th className='px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Order</th>
              <th className='px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Genus</th>
              <th className='px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Calories
              </th>
              <th className='px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Action</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {fruits.map(fruit => (
              <tr key={fruit.id} className='hover:bg-gray-50 transition-colors'>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <div className='text-sm font-medium text-gray-900'>{fruit.name}</div>
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{fruit.family}</div>
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{fruit.order}</div>
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{fruit.genus}</div>
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{fruit.nutritions.calories}</div>
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <button
                    onClick={() => onAddFruit(fruit)}
                    className='px-4 py-1 bg-blue-800 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors'
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FruitTableView
