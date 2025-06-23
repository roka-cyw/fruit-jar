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
