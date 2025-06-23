import type { Fruit } from '../types'

const API_BASE = 'https://fruity-proxy.vercel.app/api'
const API_KEY = 'fruit-api-challenge-2025'

const apiHeaders = {
  'x-api-key': API_KEY
}

export const fruitApi = {
  async getAllFruits(): Promise<Fruit[]> {
    const response = await fetch(`${API_BASE}/fruits`, {
      headers: apiHeaders
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch fruits: ${response.status}`)
    }

    return response.json()
  }
}
