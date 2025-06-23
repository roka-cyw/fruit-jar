import type { Fruit, GroupByOption, GroupedFruits } from '../types'

export const groupFruits = (fruits: Fruit[], groupBy: GroupByOption): GroupedFruits[] => {
  if (groupBy === 'none') {
    return []
  }

  const grouped = fruits.reduce((acc, fruit) => {
    const groupKey = fruit[groupBy] as string

    if (!acc[groupKey]) {
      acc[groupKey] = []
    }

    acc[groupKey].push(fruit)
    return acc
  }, {} as Record<string, Fruit[]>)

  return Object.entries(grouped)
    .map(([groupName, fruits]) => ({
      groupName,
      fruits: fruits.sort((a, b) => a.name.localeCompare(b.name))
    }))
    .sort((a, b) => a.groupName.localeCompare(b.groupName))
}
