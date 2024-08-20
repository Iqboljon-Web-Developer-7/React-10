import React, { memo } from "react";
import { useStateValue } from "@/context";
import Products from "@/components/products/Products";

const Wishlist = () => {
  const [data, dispatch] = useStateValue();

  console.log(data);

  return (
    <section className="wrapper my-5">
      <h2>Wishlist</h2>
      <Products data={data?.wishlist} />
    </section>
  );
};

export default memo(Wishlist);
