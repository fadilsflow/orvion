
import { ProductFilters } from "@/components/layout/product-filter"
import { ProductGrid } from "@/components/layout/product-grid"

export default function Page() {
    return (
        <div className="min-h-screen bg-background">


            {/* Main Content */}
            <main className="container items-center mx-auto px-4 py-8">
                <div className=" mb-8 space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold">Semua Produk</h1>
                    <p className="text-muted-foreground">Pilih dari berbagai solusi hosting kami</p>
                    </div>
                    <ProductFilters />
                </div>

                <ProductGrid />
            </main>
        </div>
    )
}

