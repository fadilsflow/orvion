"use client";

import { useEffect, useState, useMemo, type JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import PurchaseDialog from "./purchase-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Box, Server, Globe, Cpu, Check } from "lucide-react";
import { Button } from "../ui/button";

// Define the Product interface
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

// Define the props for the ProductGrid component
interface ProductGridProps {
  selectedCategory: string;
  selectedSort: string; // Define the possible sort options
}

// Pemetaan kategori ke ikon
const categoryIcons: Record<string, JSX.Element> = {
  hosting: <Server className="w-6 h-6 text-dark" />,
  domain: <Globe className="w-6 h-6 text-dark" />,
  vps: <Cpu className="w-6 h-6 text-dark" />,
};

export function ProductGrid({
  selectedCategory,
  selectedSort,
}: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
        const data: Product[] = await response.json(); // Use the Product interface

        data.forEach((product: Product) => {
          product.specs = product.specs || {
            ram: "N/A", // Default value
            cpu: "N/A", // Default value
            ssd: "N/A", // Default value
          };
        });

        setProducts(data);
      } catch (error) {
        setError("Gagal memuat produk. Silakan coba lagi.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.category === selectedCategory);
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
    return <div className="text-red-700 text-center">{error}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {sortedProducts.map((product) => (
          <Card key={product.id} className={cn("relative overflow-hidden")}>
            <CardContent className="p-6 bg-muted/20">
              <div className="flex flex-col justify-center text-center items-center mb-4 px-10">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  {categoryIcons[product.category] || (
                    <Box className="w-8 h-8 text-white" />
                  )}
                </div>
                <div className=" mt-4">
                  <h1 className="text-lg font-semibold text-white border-b w-full pb-2">
                    {product.name}
                  </h1>
                </div>
              </div>
              <div className="flex items-center text-center font-medium flex-col space-y-3">
                {product.specs ? (
                  Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 ">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span>{`${
                        key.charAt(0).toUpperCase() + key.slice(1)
                      }: ${value}`}</span>
                    </div>
                  ))
                ) : (
                  <div>No specifications available.</div>
                )}
              </div>
              <div className="mt-6 text-center">
                <Button
                  variant={"outline"}
                  className="bg-blue-800 border border-blue-500 hover:bg-blue-900  font-bold text-white"
                  onClick={() =>
                    setSelectedProduct({ id: product.id, isOpen: true })
                  }
                >
                  Rp {product.price.toLocaleString("id-ID")}{" "}
                  <span className="text-sm font-normal">/{product.times}</span>
                </Button>
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
        product={
          products.find((p) => p.id === selectedProduct.id)
            ? {
                name: products.find((p) => p.id === selectedProduct.id)!.name,
                price: products
                  .find((p) => p.id === selectedProduct.id)!
                  .price.toString(),
                specs: {
                  ram:
                    products.find((p) => p.id === selectedProduct.id)!.specs
                      ?.ram || "N/A",
                  cpu:
                    products.find((p) => p.id === selectedProduct.id)!.specs
                      ?.cpu || "N/A",
                  ssd:
                    products.find((p) => p.id === selectedProduct.id)!.specs
                      ?.ssd || "N/A",
                  backupSlots:
                    products.find((p) => p.id === selectedProduct.id)!.specs
                      ?.backupSlots || "N/A",
                  databaseSlots:
                    products.find((p) => p.id === selectedProduct.id)!.specs
                      ?.databaseSlots || "N/A",
                },
              }
            : null
        }
      />
    </>
  );
}
