"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertCircle, Server, PhoneIcon as WhatsappIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PurchaseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: {
    name: string
    price: string
    specs: {
      ram: string
      cpu: string
      ssd: string
      backupSlots: string
      databaseSlots: string
    }
  } | null
}

export default function PurchaseDialog({ open, onOpenChange, product }: PurchaseDialogProps) {
  if (!product) return null

  const handleWhatsAppPurchase = () => {
    const message = `Halo, saya ingin membeli ${product.name} dengan spesifikasi berikut:
- RAM: ${product.specs.ram}
- CPU: ${product.specs.cpu}
- SSD: ${product.specs.ssd}
- Slot Backup: ${product.specs.backupSlots}
- Slot Database: ${product.specs.databaseSlots}
Harga: ${product.price}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, "_blank")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Server className="w-4 h-4 text-primary" />
            </div>
            {product.name}
          </DialogTitle>
          <DialogDescription>Pilih cara Anda ingin melanjutkan pembelian</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Detail Produk</TabsTrigger>
            <TabsTrigger value="purchase">Beli</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <div className="space-y-4 mt-4">
              <div className="p-4 border rounded-lg space-y-3">
                <div className="font-medium">Spesifikasi Produk</div>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <div>RAM: {product.specs.ram}</div>
                  <div>CPU: {product.specs.cpu}</div>
                  <div>SSD: {product.specs.ssd}</div>
                  <div>Slot Backup: {product.specs.backupSlots}</div>
                  <div>Slot Database: {product.specs.databaseSlots}</div>
                </div>
                <div className="font-semibold text-primary">{product.price}</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="purchase">
            <div className="space-y-4 mt-4">
              <Button  variant="outline" className="w-full gap-2 bg-emerald-800 hover:bg-emerald-900 border-emerald-500 text-white" onClick={handleWhatsAppPurchase}>
                <WhatsappIcon className="w-4 h-4" />
                Beli melalui WhatsApp
              </Button>

              <Button variant="outline" className="w-full bg-blue-800 hover:bg-blue-900 border-blue-500 text-white" variant="default" disabled>
                Beli di Platform
              </Button>

              <Alert variant="default">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Pembelian melalui platform sedang dalam perbaikan. Silakan gunakan WhatsApp untuk saat ini.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

