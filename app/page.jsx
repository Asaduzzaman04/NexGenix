import Hero from "@/components/Home/Hero";
import IntroProject from "@/components/Home/IntroProject";
import Service from "@/components/Home/Service";
import StatsGrid from "@/components/home/StatsGrid"

export default function Home() {
  return (
    <main className="mt-20">
      {/* hero-component  */}
      <Hero />
      {/* server-component */}
      <Service/>
      {/* stats-grid */}
      <StatsGrid/>
      {/* intro-project */}
      <IntroProject/>
    </main>
  );
}
