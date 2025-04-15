import { Footer } from "~/components/ui/footer/footer";
import { Navbar } from "~/components/ui/navbar";
import { HydrateClient } from "~/trpc/server";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <HydrateClient>
      <main className="text-primary font-medium">
        <Navbar />
        {children}
        <Footer />
      </main>
    </HydrateClient>
  );
};

export default Layout;
