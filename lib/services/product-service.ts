// lib/services/product-service.ts
import { Product } from '@prisma/client'
import { prisma } from '@/lib/prisma'

export const ProductService = {
  async getAll(): Promise<Product[]> {
    return await prisma.product.findMany()
  },

  async getById(id: string): Promise<Product | null> {
    return await prisma.product.findUnique({ where: { id } })
  },

  async create(data: Omit<Product, 'id'>): Promise<Product> {
    return await prisma.product.create({ data })
  },

  async update(id: string, data: Partial<Product>): Promise<Product> {
    return await prisma.product.update({ where: { id }, data })
  },

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } })
  },
}