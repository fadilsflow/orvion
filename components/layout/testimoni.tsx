"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "lucide-react"

const testimonials = [
    {
        name: "@GamerMurah",
        comment: "Basic 1 harga 15K bisa ngehost server Minecraft 10 player lancar jaya! 💥 RAM 8GB nggak nge-lag meski mobs pada ngerush 💀",
    },
    {
        name: "@ProPlayerID",
        comment: "Premium 4 RAM 24GB + anti DDoS 90% 🛡️ Pas event raid 50 player, server tetap chill kayak minum es teh 🧊",
    },
    {
        name: "@StreamerAnjay",
        comment: "Disk 25TB buat backup world 🌍 Harga 120K? Worth lah! Server 24/7 uptime bikin stream nggak keputus 🎥",
    },
    {
        name: "@DevLocal",
        comment: "Lokasi Jakarta bikin ping 10ms 🏎️💨 Player pada auto ngepot beli premium nih! 💰",
    },
    {
        name: "@ServerGala",
        comment: "Private 5 pakai Intel E-2286G6 🚀 TPS stabil 20 meski 100 player build mega base! 🏗️",
    },
    {
        name: "@ModdingAddict",
        comment: "Private 3 disk 70GB muat 200+ mod 🧨 Pas buat server All The Mods 8 💣 Gak perlu takut kehabisan space!",
    },
]

export default function Testimonials() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex overflow-x-auto space-x-6 pb-4">
                {testimonials.map((testimonial, index) => (
                    <Card
                        key={index}
                        className="min-w-[300px] hover:border-primary/30 transition-colors bg-muted"
                    >
                        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                            <div className="flex items-center space-x-4">
                                <div className="p-2 rounded-full bg-primary/10">
                                    <User className="w-5 h-5 text-primary" />
                                </div>
                                <CardTitle className="text-lg">
                                    {testimonial.name}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {testimonial.comment}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}