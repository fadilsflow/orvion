"use client";

import { ProductFilters } from "@/components/layout/product-filter";
import { ProductGrid } from "@/components/layout/product-grid";
// Pastikan path ini sesuai dengan lokasi komponen ProductGrid
import React, { useState } from "react";

const DomainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [selectedSort, setSelectedSort] = useState("relevance");

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className=" px-4 py-8 flex flex-col items-center ">
        <div className=" mb-8  space-y-6 text-center flex flex-col items-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Produk Hosting</h1>
            <p className="text-muted-foreground pb-5">
              Pilih dari berbagai solusi hosting kami
            </p>
          </div>
          <ProductFilters
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
            onCategoryChange={setSelectedCategory}
            onSortChange={setSelectedSort}
            showCategoryFilter={false} // Menyembunyikan filter kategori
          />
          <ProductGrid selectedCategory="hosting" selectedSort={selectedSort} />
        </div>
      </main>
    </div>
  );
};

export default DomainPage;
