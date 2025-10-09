import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-none">
        <Navbar />
      </header>

      <main className="flex-grow bg-[#D2D2D240]">
        <Outlet />
      </main>

      <footer className="flex-none">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
