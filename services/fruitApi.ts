import type { Fruit } from '../types'

const getApiBase = () => {
  if (typeof window === 'undefined') return ''
  if (window.location.hostname === 'localhost') {
    return 'https://fruity-proxy.vercel.app/api'
  }
  return '/api'
}

const API_BASE = getApiBase()

export const fruitApi = {
  async getAllFruits(): Promise<Fruit[]> {
    console.log('API_BASE:', API_BASE)

    const response = await fetch(`${API_BASE}/fruits`, {
      headers: API_BASE.includes('fruity-proxy')
        ? {
            'x-api-key': 'fruit-api-challenge-2025'
          }
        : {}
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch fruits: ${response.status}`)
    }

    return response.json()
  }
}
