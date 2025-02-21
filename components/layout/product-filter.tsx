import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProductFiltersProps {
  selectedCategory: string;
  selectedSort: string;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
  showCategoryFilter?: boolean; // Prop opsional untuk menampilkan filter kategori
  showSortFilter?: boolean; // Prop opsional untuk menampilkan filter urutan
}

export function ProductFilters({
  selectedCategory,
  selectedSort,
  onCategoryChange,
  onSortChange,
  showCategoryFilter = true, // Default true
  showSortFilter = true, // Default true
}: ProductFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {showCategoryFilter && (
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            <SelectItem value="hosting">Hosting</SelectItem>
            <SelectItem value="vps">VPS</SelectItem>
            <SelectItem value="domain">Domain</SelectItem>
          </SelectContent>
        </Select>
      )}

      {showSortFilter && (
        <Select value={selectedSort} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Urutkan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevansi</SelectItem>
            <SelectItem value="price-low">Harga: Rendah ke Tinggi</SelectItem>
            <SelectItem value="price-high">Harga: Tinggi ke Rendah</SelectItem>
            <SelectItem value="name">Nama</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
  );
}