// lib/services/product-service.ts
export const ProductService = {
    async getAll(): Promise<Product[]> {
      const response = await fetch('/api/products')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      return response.json()
    },
  
    async getById(id: string): Promise<Product | null> {
      const response = await fetch(`/api/products/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch product')
      }
      return response.json()
    },
  
    async create(data: Omit<Product, 'id'>): Promise<Product> {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Failed to create product')
      }
      return response.json()
    },
  
    async update(id: string, data: Partial<Product>): Promise<Product> {
      const response = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Failed to update product')
      }
      return response.json()
    },
  
    async delete(id: string): Promise<void> {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete product')
      }
    },
  }