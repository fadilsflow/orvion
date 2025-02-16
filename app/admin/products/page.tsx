// app/admin/products/page.tsx
"use client"

import { useEffect, useState } from 'react'
import { Product } from '@prisma/client'
import { ProductService } from '@/lib/services/product-service'
import { ProductForm } from '@/components/layout/product-form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const loadProducts = async () => {
    const data = await ProductService.getAll()
    setProducts(data)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      await ProductService.delete(id)
      loadProducts()
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <Button onClick={() => {
          setSelectedProduct(null)
          setIsDialogOpen(true)
        }}>
          Add New Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h3 className="font-bold">{product.name}</h3>
            <p>Rp {product.price.toLocaleString()}</p>
            <div className="mt-4 flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setSelectedProduct(product)
                  setIsDialogOpen(true)
                }}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedProduct ? 'Edit Product' : 'New Product'}
            </DialogTitle>
          </DialogHeader>
          <ProductForm 
            initialData={selectedProduct}
            onSuccess={() => {
              setIsDialogOpen(false)
              loadProducts()
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}