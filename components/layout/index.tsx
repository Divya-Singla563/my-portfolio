import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
