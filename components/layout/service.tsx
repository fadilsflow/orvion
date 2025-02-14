import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const packages = {
    basic: [
        { package: "Basic 1", cpu: "400%", ram: "8GB", disk: "15GB", price: "Rp15.000/Bulan" },
        { package: "Basic 2", cpu: "600%", ram: "12GB", disk: "20GB", price: "Rp25.000/Bulan" },
        { package: "Basic 3", cpu: "800%", ram: "16GB", disk: "25GB", price: "Rp30.000/Bulan" },
        { package: "Basic 4", cpu: "500%", ram: "10GB", disk: "18GB", price: "Rp20.000/Bulan" },
        { package: "Basic 5", cpu: "700%", ram: "14GB", disk: "22GB", price: "Rp27.000/Bulan" },
        { package: "Basic 6", cpu: "900%", ram: "18GB", disk: "28GB", price: "Rp35.000/Bulan" },
    ],
    premium: [
        { package: "Premium 1", cpu: "1000%", ram: "32GB", disk: "50GB", price: "Rp50.000/Bulan" },
        { package: "Premium 2", cpu: "1200%", ram: "48GB", disk: "75GB", price: "Rp75.000/Bulan" },
        { package: "Premium 3", cpu: "1400%", ram: "56GB", disk: "85GB", price: "Rp85.000/Bulan" },
        { package: "Premium 4", cpu: "1100%", ram: "40GB", disk: "60GB", price: "Rp65.000/Bulan" },
        { package: "Premium 5", cpu: "1300%", ram: "52GB", disk: "80GB", price: "Rp80.000/Bulan" },
        { package: "Premium 6", cpu: "1500%", ram: "60GB", disk: "90GB", price: "Rp90.000/Bulan" },
    ],
    private: [
        { package: "Private 1", cpu: "1600%", ram: "64GB", disk: "100GB", price: "Rp100.000/Bulan" },
        { package: "Private 2", cpu: "2000%", ram: "96GB", disk: "150GB", price: "Rp150.000/Bulan" },
        { package: "Private 3", cpu: "1800%", ram: "80GB", disk: "120GB", price: "Rp120.000/Bulan" },
        { package: "Private 4", cpu: "2200%", ram: "112GB", disk: "180GB", price: "Rp180.000/Bulan" },
        { package: "Private 5", cpu: "2400%", ram: "128GB", disk: "200GB", price: "Rp200.000/Bulan" },
        { package: "Private 6", cpu: "2600%", ram: "144GB", disk: "250GB", price: "Rp250.000/Bulan" },
    ]
}

export function Service() {
    return (
        <section className="container mx-auto px-10 py-20 ">
            <h2 className="text-3xl font-bold text-center mb-4">Hosting Minecraft Terbaik untuk Server Anda
            </h2>
            <p className="text-muted-foreground text-center mb-12">Dapatkan performa stabil, koneksi cepat, dan uptime maksimal untuk pengalaman bermain tanpa gangguan.</p>

            {/* Tabs */}
            <Tabs defaultValue="basic" className="w-full ">
                <TabsList className="grid w-full grid-cols-3 justify-center ">
                    <TabsTrigger value="basic">
                        Basic
                    </TabsTrigger>
                    <TabsTrigger value="premium">
                        Premium
                    </TabsTrigger>
                    <TabsTrigger value="private">
                        Private
                    </TabsTrigger>
                </TabsList>

                {/* Table Content */}
                {Object.entries(packages).map(([key, items]) => (
                    <TabsContent key={key} value={key} >
                        <div className="rounded-lg overflow-hidden">
                            <div className="overflow-x-auto ">
                                <Table className="min-w-[600px] lg:min-w-full">
                                    {/* Table Header */}
                                    <TableHeader className="bg-muted">
                                        <TableRow >
                                            <TableHead className="text-center">
                                                Paket
                                            </TableHead>
                                            <TableHead className="text-center">
                                                CPU
                                            </TableHead>
                                            <TableHead className="text-center">
                                                RAM
                                            </TableHead>
                                            <TableHead className="text-center">
                                                Disk
                                            </TableHead>
                                            <TableHead className="text-center">
                                                Harga
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    {/* Table Body */}
                                    <TableBody>
                                        {items.map((item) => (
                                            <TableRow
                                                key={item.package}

                                            >
                                                <TableCell className=" font-medium  py-4 text-center">
                                                    {item.package}
                                                </TableCell>
                                                <TableCell className="py-4 text-center">{item.cpu}</TableCell>
                                                <TableCell className=" py-4 text-center">{item.ram}</TableCell>
                                                <TableCell className="py-4 text-center">{item.disk}</TableCell>
                                                <TableCell className="text-center  py-4">
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
    )
}