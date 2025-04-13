import { Footer } from "~/components/ui/footer/footer";
import { Navbar } from "~/components/ui/navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="text-primary font-medium">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
