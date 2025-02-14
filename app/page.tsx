import { Hero } from "@/components/layout/hero";
import { Features } from "@/components/layout/features";
import { Service } from "@/components/layout/service";
import Testimonials from "@/components/layout/testimoni";
import Comunity from "@/components/layout/comunity";


export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Features />
      <Comunity />
      <Testimonials />

    </div>
  );
}
