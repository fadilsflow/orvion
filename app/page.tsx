import { Hero } from "@/components/layout/hero";
import { Features } from "@/components/layout/features";
import { Service } from "@/components/layout/service";
import Testimonials from "@/components/layout/testimoni";
import Comunity from "@/components/layout/comunity";
import { ProductLanding } from "@/components/layout/porduct-landing";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductLanding />
      <Service />
      <Features />
      <Comunity />
      <Testimonials />
    </div>
  );
}
