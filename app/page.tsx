import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="pt-28"
      >
        <Hero />
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-28"
      >
        <About />
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-28"
      >
        <Features />
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="scroll-mt-28"
      >
        <HowItWorks />
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}