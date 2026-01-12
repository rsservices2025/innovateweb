import { HeroSection } from "@/components/sections/hero";
import { Footer } from "@/components/shared/footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <Footer />
    </main>
  );
}