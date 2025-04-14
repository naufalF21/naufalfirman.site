import { Hero, Work, About, Contact } from "./_components";

export default async function Home() {
  return (
    <div className="px-6 lg:px-0">
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
