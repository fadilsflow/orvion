// components/product-form.tsx
"use client"

import { useState } from 'react'
import { Product } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type ProductFormProps = {
  initialData?: Product | null
  onSuccess?: () => void
}

export const ProductForm = ({ initialData, onSuccess }: ProductFormProps) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    price: initialData?.price.toString() || '',
    category: initialData?.category || 'minecraft',
    specs: initialData?.specs || {
      ram: '600 MB',
      cpu: '100%',
      ssd: '5120 MB',
      backupSlots: '1',
      databaseSlots: '1',
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      specs: formData.specs
    }

    try {
      if (initialData) {
        await ProductService.update(initialData.id, productData)
      } else {
        await ProductService.create(productData)
      }
      onSuccess?.()
    } catch (error) {
      console.error('Error saving product:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Product Name</Label>
        <Input 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>
      
      <div>
        <Label>Price</Label>
        <Input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({...formData, price: e.target.value})}
          required
        />
      </div>

      <div>
        <Label>Category</Label>
        <Select
          value={formData.category}
          onValueChange={(value) => setFormData({...formData, category: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="minecraft">Minecraft</SelectItem>
            <SelectItem value="vps">VPS</SelectItem>
            <SelectItem value="web-hosting">Web Hosting</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Add fields for specs here */}

      <Button type="submit" className="w-full">
        {initialData ? 'Update Product' : 'Create Product'}
      </Button>
    </form>
  )
}