"use client"

import { useEffect, useState } from "react"
import { Product } from "@prisma/client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import PurchaseDialog from "./purchase-dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { ProductService } from "@/lib/services/product-service"
import { Box } from "lucide-react"

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<{
    id: string | null
    isOpen: boolean
  }>({ id: null, isOpen: false })

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await ProductService.getAll()
        setProducts(data)
      } catch (error) {
        console.error('Gagal memuat produk:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {Array(4).fill(0).map((_, i) => (
          <Skeleton key={i} className="h-[350px] w-full rounded-xl" />
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className={cn(
              "group relative overflow-hidden transition-all duration-300",
              "hover:border-primary hover:shadow-sm cursor-pointer",
              selectedProduct.id === product.id && "border-primary"
            )}
            onClick={() => setSelectedProduct({ id: product.id, isOpen: true })}
          >
            <CardContent className="bg-muted/20 p-6">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 border-emerald-500 bg-emerald-800 rounded-md flex items-center justify-center">
                  <Box className="w-6 h-6 text-dark" />
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                {/* RAM */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span>RAM: {product.specs.ram}</span>
                </div>

                {/* CPU */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span>CPU: {product.specs.cpu}</span>
                </div>

                {/* SSD */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span>SSD: {product.specs.ssd}</span>
                </div>

                {/* Backup Slots */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span>Slot Backup: {product.specs.backupSlots}</span>
                </div>

                {/* Database Slots */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span>Slot Database: {product.specs.databaseSlots}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-4 flex items-center justify-between bg-muted/50 border-t">
              <span className="text-sm font-medium">{product.name}</span>
              <span className="text-sm font-semibold text-primary bg-blue-700 px-3 py-1 rounded-full">
                Rp {product.price.toLocaleString('id-ID')}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      <PurchaseDialog
        open={selectedProduct.isOpen}
        onOpenChange={(open) => setSelectedProduct(prev => ({ ...prev, isOpen: open }))}
        product={products.find(p => p.id === selectedProduct.id)}
      />
    </>
  )
}