import Navigation from "@/components/ui/navigation";
import  Hero2  from "@/components/sections/hero2";
import Features from "@/components/sections/features";
import Features2 from "@/components/sections/features2";
import Blog from "@/components/sections/blog";
 import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import Cards from "@/components/sections/cards";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero2 />
      <Cards />
      <Features />
      <Features2 />
      <Blog />
       
      <Footer />
    </main>
  );
}