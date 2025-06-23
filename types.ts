export type GroupByOption = 'none' | 'family' | 'genus' | 'order'
export type ViewMode = 'list' | 'table'

export interface Fruit {
  id: number
  name: string
  family: string
  genus: string
  order: string
  nutritions: {
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
  }
}

export interface GroupedFruits {
  groupName: string
  fruits: Fruit[]
}

export interface JarItem {
  fruit: Fruit
  quantity: number
  id: string
}
