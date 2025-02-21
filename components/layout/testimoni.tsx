"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

const testimonials = [
  {
    name: "@TechBros",
    comment:
      "VPS Digital Ocean 8GB 4Core seharga 35K/bulan ini performanya gahar! 🚀 Host beberapa bot Discord dan web API tanpa kendala 🔥",
  },
  {
    name: "@StartupX",
    comment:
      "Pakai Hosting Premium 16GB, website kami tetap stabil meskipun traffic naik drastis. Worth banget buat bisnis kecil! 💼",
  },
  {
    name: "@DomainLover",
    comment:
      "Dapet .com domain seharga 125K? Murah cuy! Pas buat branding startup gue 🌐🔥",
  },
  {
    name: "@ProGamer",
    comment:
      "Private Host 24GB CPU 800 buat server gaming komunitas? TPS stabil 20, anti-lag! 🕹️🔥",
  },
  {
    name: "@BackupKing",
    comment:
      "Private Host 16GB + backup slots 5? File penting tetap aman, ga perlu panik kehilangan data 📂🔒",
  },
];

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
                  <Image
                    src={"/favicon-32x32.png"}
                    width={20}
                    height={20}
                    alt="customer"
                  />
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
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
  );
}
