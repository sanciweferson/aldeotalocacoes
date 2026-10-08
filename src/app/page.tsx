import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { About, Benefits, Contact, EquipmentSection, FAQ, Hero, HowItWorks, Reviews } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <EquipmentSection />
      <Benefits />
      <HowItWorks />
      <Reviews />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
