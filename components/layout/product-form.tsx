// components/product-form.tsx
"use client"

import { useState } from 'react'
import { Product } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ProductService } from '@/lib/services/product-service'
import { toast } from 'sonner' // Untuk menampilkan notifikasi

type ProductFormProps = {
  initialData?: Product | null
  onSuccess?: () => void
}

export const ProductForm = ({ initialData, onSuccess }: ProductFormProps) => {
  // State untuk form data
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    price: initialData?.price.toString() || '0',
    category: initialData?.category || 'minecraft',
    specs: {
      ram: initialData?.specs?.ram || '600 MB',
      cpu: initialData?.specs?.cpu || '100%',
      ssd: initialData?.specs?.ssd || '5120 MB',
      backupSlots: initialData?.specs?.backupSlots || '1',
      databaseSlots: initialData?.specs?.databaseSlots || '1',
    },
  })

  // Handler untuk submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validasi sederhana
    if (!formData.name || !formData.price) {
      toast.error('Nama dan harga produk wajib diisi!')
      return
    }

    // Format data untuk dikirim ke API
    const productData = {
      name: formData.name,
      price: parseFloat(formData.price),
      category: formData.category,
      specs: {
        ram: formData.specs.ram,
        cpu: formData.specs.cpu,
        ssd: formData.specs.ssd,
        backupSlots: formData.specs.backupSlots,
        databaseSlots: formData.specs.databaseSlots,
      },
    }

    try {
      if (initialData) {
        // Update produk yang sudah ada
        await ProductService.update(initialData.id, productData)
        toast.success('Produk berhasil diperbarui!')
      } else {
        // Buat produk baru
        await ProductService.create(productData)
        toast.success('Produk berhasil dibuat!')
      }
      onSuccess?.() // Panggil callback onSuccess jika ada
    } catch (error) {
      console.error('Error saving product:', error)
      toast.error('Gagal menyimpan produk. Silakan coba lagi.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Field Nama Produk */}
      <div>
        <Label>Nama Produk</Label>
        <Input
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          placeholder="Contoh: Orvion Basic 1"
          required
        />
      </div>

      {/* Field Harga Produk */}
      <div>
        <Label>Harga (Rp)</Label>
        <Input
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
          placeholder="Contoh: 75000"
          required
        />
      </div>

      {/* Field Kategori Produk */}
      <div>
        <Label>Kategori</Label>
        <Select
          value={formData.category}
          onValueChange={(value) =>
            setFormData({ ...formData, category: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="minecraft">Minecraft</SelectItem>
            <SelectItem value="vps">VPS</SelectItem>
            <SelectItem value="web-hosting">Web Hosting</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Field Spesifikasi Produk */}
      <div className="space-y-4">
        <Label>Spesifikasi</Label>

        {/* RAM */}
        <div>
          <Label className="text-sm text-muted-foreground">RAM</Label>
          <Input
            value={formData.specs.ram}
            onChange={(e) =>
              setFormData({
                ...formData,
                specs: { ...formData.specs, ram: e.target.value },
              })
            }
            placeholder="Contoh: 600 MB"
          />
        </div>

        {/* CPU */}
        <div>
          <Label className="text-sm text-muted-foreground">CPU</Label>
          <Input
            value={formData.specs.cpu}
            onChange={(e) =>
              setFormData({
                ...formData,
                specs: { ...formData.specs, cpu: e.target.value },
              })
            }
            placeholder="Contoh: 100%"
          />
        </div>

        {/* SSD */}
        <div>
          <Label className="text-sm text-muted-foreground">SSD</Label>
          <Input
            value={formData.specs.ssd}
            onChange={(e) =>
              setFormData({
                ...formData,
                specs: { ...formData.specs, ssd: e.target.value },
              })
            }
            placeholder="Contoh: 5120 MB"
          />
        </div>

        {/* Backup Slots */}
        <div>
          <Label className="text-sm text-muted-foreground">
            Slot Backup
          </Label>
          <Input
            value={formData.specs.backupSlots}
            onChange={(e) =>
              setFormData({
                ...formData,
                specs: { ...formData.specs, backupSlots: e.target.value },
              })
            }
            placeholder="Contoh: 1"
          />
        </div>

        {/* Database Slots */}
        <div>
          <Label className="text-sm text-muted-foreground">
            Slot Database
          </Label>
          <Input
            value={formData.specs.databaseSlots}
            onChange={(e) =>
              setFormData({
                ...formData,
                specs: { ...formData.specs, databaseSlots: e.target.value },
              })
            }
            placeholder="Contoh: 1"
          />
        </div>
      </div>

      {/* Tombol Submit */}
      <Button type="submit" className="w-full">
        {initialData ? 'Perbarui Produk' : 'Buat Produk'}
      </Button>
    </form>
  )
}