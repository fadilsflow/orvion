import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Cpu, HardDrive, Clock, Server, Settings } from "lucide-react"

const features = [
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description:
      "Kecepatan baca/tulis hingga 3500 MB/s, 5x lebih cepat dari SSD biasa. Ideal untuk aplikasi berat.",
    iconColor: "#3B82F6",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description:
      "Proteksi multi-layer hingga 1 Tbps. Uptime 99.9% terjamin.",
    iconColor: "#10B981",
  },
  {
    icon: Clock,
    title: "Support 24/7",
    description:
      "Tim support siap membantu Anda kapan saja. Respon cepat, solusi tepat.",
    iconColor: "#F59E0B",
  },
  {
    icon: Server,
    title: "Daily Auto Backup",
    description:
      "Backup harian otomatis dengan enkripsi AES-256. Data aman, bisnis lancar.",
    iconColor: "#8B5CF6",
  },
  {
    icon: Cpu,
    title: "Performa Super Kencang!",
    description:
      "Prosesor Intel Xeon generasi terbaru. Kecepatan clock hingga 4.8 GHz.",
    iconColor: "#DC2626",
  },
  {
    icon: Settings,
    title: "Uptime 99.9%",
    description:
      "Infrastruktur handal dengan jaminan uptime 99.9%. Tanpa downtime.",
    iconColor: "#14B8A6",
  },
]

export function Features() {
  return (
    <section className="container mx-auto px-10 py-20">
      <h2 className="text-3xl font-bold text-foreground text-center mb-4">Cepat. Andal. Efisien.</h2>
      <p className="text-muted-foreground text-center mb-12">Hadirkan performa website dan pengalaman terbaik bagi pengunjung dengan web hosting paling andal.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className={`
              bg-muted border border-accent hover:border-primary/30  transition-all duration-300 
              shadow-sm  relative overflow-hidden group
            `}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: feature.iconColor }}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-muted-foreground">
                  {feature.title}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}