"use client"

import { Box, Server } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import PurchaseDialog from "./purchase-dialog"

const products = Array(8).fill({
    name: "Orvion Basic 1",
    price: "Rp 75.000",
    specs: {
        ram: "600 MB",
        cpu: "100%",
        ssd: "5120 MB",
        backupSlots: "1",
        databaseSlots: "1",
    },
  
})

export function ProductGrid() {
    const [selectedProduct, setSelectedProduct] = useState<{ index: number; isOpen: boolean }>({
        index: -1,
        isOpen: false,
    })

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {products.map((product, index) => (
                    <Card
                        key={index}
                        className={cn(
                            " group relative overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-sm",
                            selectedProduct.index === index && "border-primary",
                        )}
                        onClick={() => setSelectedProduct({ index, isOpen: true })}
                    >
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                        <CardContent className="bg-muted/20 p-6">
                            <div className="flex justify-center mb-6">
                                <div className="w-12 h-12  border-emerald-500 bg-emerald-800 rounded-md flex items-center justify-center">
                                    <Box className="w-6 h-6 text-dark" />
                                </div>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span>RAM: {product.specs.ram}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span>CPU: {product.specs.cpu}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span>SSD: {product.specs.ssd}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span>Slot Backup: {product.specs.backupSlots}</span>
                                </div>
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
                            <span className="text-sm font-semibold text-primary bg-blue-700  px-3 py-1 rounded-full">
                                {product.price}
                            </span>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <PurchaseDialog
                open={selectedProduct.isOpen}
                onOpenChange={(open) => setSelectedProduct((prev) => ({ ...prev, isOpen: open }))}
                product={selectedProduct.index !== -1 ? products[selectedProduct.index] : null}
            />
        </>
    )
}

