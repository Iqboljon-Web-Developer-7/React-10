import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Home from "./home/Home";
import Wishlist from "./wishlist/Wishlist";
import Cart from "./cart/Cart";

const Pages = () => {
  return (
    <main className="dark:bg-slate-950 duration-200">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default memo(Pages);
