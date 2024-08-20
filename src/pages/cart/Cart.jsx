import React, { memo } from "react";
import { useStateValue } from "@/context";
import Products from "@/components/products/Products";
import CartProducts from "@/components/cart/CartProducts";

const Cart = () => {
  const [data, dispatch] = useStateValue();

  return (
    <section className="wrapper my-6">
      <h2 className="dark:text-slate-200">Cart items :)</h2>
      <CartProducts data={data.cart} />
    </section>
  );
};

export default memo(Cart);
