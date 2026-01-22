import Dashboard from "./sections/dashboard";
import Features from "./sections/features";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Testimonials from "./sections/testimonials";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Dashboard />
    </main>
  );
}
