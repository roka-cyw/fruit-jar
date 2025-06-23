import { Toaster } from 'react-hot-toast'

import FruitList from '../components/FruitList/FruitList'
import FruitJar from '../components/FruitJar/FruitJar'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <h1 className='text-2xl font-bold text-gray-900'>Fruit App</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-10xl mx-auto px-4 py-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-120px)]'>
          {/* Left Section */}
          <div className='bg-white rounded-lg shadow-sm border'>
            <FruitList />
          </div>

          {/* Right Section */}
          <div className='bg-white rounded-lg shadow-sm border'>
            <FruitJar />
          </div>
        </div>
      </main>

      <Toaster position='bottom-right' />
    </div>
  )
}

export default App
