
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // console.log("Layout rendering with children:", children);
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
