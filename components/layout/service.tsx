"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Service() {
  const [packages, setPackages] = useState({
    hosting: [],
    domain: [],
    vps: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/product.json"); // Ganti dengan path yang sesuai
      const data = await response.json();

      // Kelompokkan data berdasarkan kategori
      const groupedPackages = data.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push({
          package: item.name,
          cpu: item.specs.cpu,
          ram: item.specs.ram,
          disk: item.specs.ssd,
          price: item.discountPrice ? item.discountPrice : item.price,
        });
        return acc;
      }, {});

      setPackages(groupedPackages);
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto px-10 py-20 ">
      <h2 className="text-3xl font-bold text-center mb-4">
        Hosting Minecraft Terbaik untuk Server Anda
      </h2>
      <p className="text-muted-foreground text-center mb-12">
        Dapatkan performa stabil, koneksi cepat, dan uptime maksimal untuk
        pengalaman bermain tanpa gangguan.
      </p>

      {/* Tabs */}
      <Tabs defaultValue="hosting" className="w-full ">
        <TabsList className="grid w-full grid-cols-3 justify-center ">
          <TabsTrigger value="hosting">Hosting</TabsTrigger>
          <TabsTrigger value="domain">Domain</TabsTrigger>
          <TabsTrigger value="vps">VPS</TabsTrigger>
        </TabsList>

        {/* Table Content */}
        {Object.entries(packages).map(([key, items]) => (
          <TabsContent key={key} value={key}>
            <div className="rounded-lg overflow-hidden">
              <div className="overflow-x-auto ">
                <Table className="min-w-[600px] lg:min-w-full">
                  {/* Table Header */}
                  <TableHeader className="bg-muted">
                    <TableRow>
                      <TableHead className="text-center">Paket</TableHead>
                      <TableHead className="text-center">CPU</TableHead>
                      <TableHead className="text-center">RAM</TableHead>
                      <TableHead className="text-center">Disk</TableHead>
                      <TableHead className="text-center">Harga</TableHead>
                    </TableRow>
                  </TableHeader>

                  {/* Table Body */}
                  <TableBody>
                    {items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium py-4 text-center">
                          {item.package}
                        </TableCell>
                        <TableCell className="py-4 text-center">
                          {item.cpu}
                        </TableCell>
                        <TableCell className="py-4 text-center">
                          {item.ram}
                        </TableCell>
                        <TableCell className="py-4 text-center">
                          {item.disk}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          {item.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
