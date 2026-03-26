import { ReactNode } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import StickyCallBar from "@/components/StickyCallBar";
import FloatingServiceButton from "@/components/FloatingServiceButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <TopBar />
    <Header />
    <main className="flex-1 pb-16 lg:pb-0">{children}</main>
    <Footer />
    <StickyCallBar />
    <FloatingServiceButton />
    <ExitIntentPopup />
  </div>
);

export default Layout;
