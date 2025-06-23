import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

import type { JarItem } from '../../types'

const COLORS = [
  '#3b82f6',
  '#ef4444',
  '#10b981',
  '#f59e0b',
  '#8b5cf6',
  '#06b6d4',
  '#84cc16',
  '#f97316',
  '#fb7185',
  '#6366f1',
  '#14b8a6',
  '#eab308',
  '#a855f7',
  '#0ea5e9',
  '#22c55e',
  '#dc2626',
  '#2563eb',
  '#d97706',
  '#7c3aed',
  '#0891b2',
  '#65a30d',
  '#ea580c',
  '#059669',
  '#0f766e',
  '#ca8a04'
]

interface Props {
  jarItems: JarItem[]
}

const CalorieChart = ({ jarItems }: Props) => {
  const chartData = jarItems.map((item, index) => ({
    name: item.fruit.name,
    calories: item.fruit.nutritions.calories * item.quantity,
    quantity: item.quantity,
    fill: COLORS[index % COLORS.length]
  }))

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className='bg-white p-3 border border-gray-200 rounded-lg shadow-lg'>
          <div className='font-medium'>{data.name}</div>
          <div className='text-sm text-gray-600'>
            {data.calories} calories
            {data.quantity > 1 && ` (x${data.quantity})`}
          </div>
        </div>
      )
    }
    return null
  }

  if (jarItems.length === 0) {
    return null
  }

  return (
    <div className='bg-gray-50 rounded-lg p-4 w-full'>
      <h3 className='text-lg font-medium text-gray-800 mb-3 text-center'>Calorie Distribution</h3>

      <div className='h-64'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={chartData}
              cx='50%'
              cy='50%'
              outerRadius={80}
              dataKey='calories'
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className='mt-3 space-y-1'>
        {chartData.map((item, index) => (
          <div key={index} className='flex items-center gap-2 text-sm'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.fill }} />
            <span className='text-gray-700'>
              {item.name}: {item.calories} cal
              {item.quantity > 1 && ` (x${item.quantity})`}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalorieChart
