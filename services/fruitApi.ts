import type { Fruit } from '../types'

const API_BASE = import.meta.env.VITE_API_BASE || 'https://fruity-proxy.vercel.app/api'
const API_KEY = import.meta.env.VITE_API_KEY || 'fruit-api-challenge-2025'

const apiHeaders = {
  'x-api-key': API_KEY
}

export const fruitApi = {
  async getAllFruits(): Promise<Fruit[]> {
    console.log('API_BASE:', API_BASE)
    console.log('API_KEY:', API_KEY)
    console.log('Environment:', import.meta.env.MODE)

    const response = await fetch(`${API_BASE}/fruits`, {
      headers: apiHeaders
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch fruits: ${response.status}`)
    }

    return response.json()
  }
}
