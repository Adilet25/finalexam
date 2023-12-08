import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import "../styles/MainLayout.scss";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
