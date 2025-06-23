import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import FruitList from '../components/FruitList/FruitList'
import FruitJar from '../components/FruitJar/FruitJar'
import type { Fruit, JarItem } from '../types'

const App = () => {
  const [jarItems, setJarItems] = useState<JarItem[]>([])

  const handleAddToJar = (fruit: Fruit) => {
    const existingItem = jarItems.find(item => item.fruit.id === fruit.id)

    if (existingItem) {
      setJarItems(prev =>
        prev.map(item => (item.fruit.id === fruit.id ? { ...item, quantity: item.quantity + 1 } : item))
      )
    } else {
      const newItem: JarItem = {
        fruit,
        quantity: 1,
        id: `${fruit.id}-${Date.now()}`
      }
      setJarItems(prev => [...prev, newItem])
    }

    toast.success(`Added ${fruit.name} to jar`)
  }

  const handleAddMultipleToJar = (fruits: Fruit[]) => {
    fruits.forEach(fruit => handleAddToJar(fruit))
    toast.success(`Added ${fruits.length} fruits to jar`)
  }

  const handleRemoveFromJar = (jarItemId: string) => {
    const item = jarItems.find(item => item.id === jarItemId)
    if (!item) return

    if (item.quantity > 1) {
      setJarItems(prev =>
        prev.map(jarItem => (jarItem.id === jarItemId ? { ...jarItem, quantity: jarItem.quantity - 1 } : jarItem))
      )
    } else {
      setJarItems(prev => prev.filter(jarItem => jarItem.id !== jarItemId))
    }

    toast.success(`Removed ${item.fruit.name} from jar`)
  }

  const handleСlearAllFromJar = () => {
    setJarItems([])
    toast.success('Jar cleared')
  }

  const totalCalories = jarItems.reduce((total, item) => total + item.fruit.nutritions.calories * item.quantity, 0)

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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left Section */}
          <div className='bg-white rounded-lg shadow-sm border'>
            <FruitList onAddFruit={handleAddToJar} onAddMultiple={handleAddMultipleToJar} />
          </div>

          {/* Right Section */}
          <div className='bg-white rounded-lg shadow-sm border'>
            <FruitJar
              jarItems={jarItems}
              totalCalories={totalCalories}
              onRemoveItem={handleRemoveFromJar}
              onСlearAllFromJar={handleСlearAllFromJar}
            />
          </div>
        </div>
      </main>

      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: 'green',
              secondary: 'white'
            }
          }
        }}
        position='bottom-right'
      />
    </div>
  )
}

export default App
