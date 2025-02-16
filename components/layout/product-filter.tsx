import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProductFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Select defaultValue="all">
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Kategori" />
        </SelectTrigger>
        <SelectContent >
          <SelectItem value="all">Semua</SelectItem>
          <SelectItem value="hosting">Hosting</SelectItem>
          <SelectItem value="vps">VPS</SelectItem>
          <SelectItem value="domain">Domain</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="relevance">
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
    </div>
  )
}

