"use client";

import { ProductFilters } from "@/components/layout/product-filter";
import { ProductGrid } from "@/components/layout/product-grid";
// Pastikan path ini sesuai dengan lokasi komponen ProductGrid
import React, { useState } from "react";

export function ProductLanding() {
  const [selectedCategory, setSelectedCategory] = useState("hosting");

  const [selectedSort, setSelectedSort] = useState("relevance");

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className=" px-4 py-8 flex flex-col items-center ">
        <div className=" mb-8  space-y-6 text-center flex flex-col items-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Mau bikin Server Minecraft? Pilih yang Lo Butuh!
            </h1>
            <p className="text-muted-foreground pb-5">
              Butuh hosting, VPS, atau domain buat server Minecraft? Ada yang
              murah, ada yang kenceng, tinggal pilih sesuai kebutuhan. Gak pake
              ribet, langsung gas!
            </p>
          </div>
          <ProductFilters
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
            onCategoryChange={setSelectedCategory}
            onSortChange={setSelectedSort}
            showCategoryFilter={true} // Menyembunyikan filter kategori
          />
          <ProductGrid
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
          />
        </div>
      </main>
    </div>
  );
}
