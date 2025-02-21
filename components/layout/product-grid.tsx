"use client";

import { useEffect, useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import PurchaseDialog from "./purchase-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Box, Server, Globe, Cpu, Check } from "lucide-react"; // Import ikon yang diperlukan

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  times: string;
  specs: {
    ram: string;
    cpu: string;
    ssd: string;
    backupSlots?: string; // Optional
    databaseSlots?: string; // Optional
  } | null;
}

interface ProductGridProps {
  selectedCategory: string;
  selectedSort: string;
}

// Pemetaan kategori ke ikon
const categoryIcons = {
  hosting: <Server className="w-6 h-6 text-dark" />,
  domain: <Globe className="w-6 h-6 text-dark" />,
  vps: <Cpu className="w-6 h-6 text-dark" />,
};

export function ProductGrid({
  selectedCategory,
  selectedSort,
}: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<{
    id: string | null;
    isOpen: boolean;
  }>({ id: null, isOpen: false });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/product.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Gagal memuat produk. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    );
  }, [products, selectedCategory]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (selectedSort) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [filteredProducts, selectedSort]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[350px] w-full rounded-xl" />
          ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {sortedProducts.map((product) => (
          <Card
            key={product.id}
            className={cn(
              "group relative overflow-hidden transition-all duration-300",
              "hover:border-primary hover:shadow-lg cursor-pointer",
              selectedProduct.id === product.id && "border-primary"
            )}
            onClick={() => setSelectedProduct({ id: product.id, isOpen: true })}
            role="button"
            aria-label={`View details for ${product.name}`}
          >
            <CardContent className="bg-muted/20 p-6">
              <div className="flex flex-col justify-center text-center items-center mb-4 px-10">
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
                  {categoryIcons[product.category] || (
                    <Box className="w-6 h-6 text-dark" />
                  )}
                </div>
                <div>
                  <h1 className="text-lg font-medium border-b mt-2">
                    {product.name}
                  </h1>
                </div>
              </div>
              <div className="flex items-center text-center font-light flex-col space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span>{`${
                      key.charAt(0).toUpperCase() + key.slice(1)
                    }: ${value}`}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-center bg-blue-700 rounded-full">
                <h1 className="text-lg w-full font-semibold text-primary px-3 py-1 rounded-full">
                  Rp {product.price.toLocaleString("id-ID")}{" "}
                  <span className="text-sm">{product.times}</span>
                </h1>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <PurchaseDialog
        open={selectedProduct.isOpen}
        onOpenChange={(open) =>
          setSelectedProduct((prev) => ({ ...prev, isOpen: open }))
        }
        product={products.find((p) => p.id === selectedProduct.id)}
      />
    </>
  );
}
