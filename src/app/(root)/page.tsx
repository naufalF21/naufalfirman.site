import { Hero, Work, About, Contact } from "./_components";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
