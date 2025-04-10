import { Navbar } from "~/components/ui/navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="text-primary font-medium">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
