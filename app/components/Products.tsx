import React from "react";
import { Id } from "../data/types";
import Article from "./Article";
import Image from "./Image";
import { products } from "../data/products";
import Hero from "./Hero";

const Products: React.FC<Id> = ({ id }) => {
  const product = products.find((item) => item.id === id);
  if (!product) return null;

  return (
    <div className={`flex ${product.row} ${id > 0 ? "pt-40" : "pt-0"}`}>
      {/* {!(typeof product.url === "object") && <Article id={id} />} */}
      {id >= 1 && id <= 6 ? (
        <>
          <Article id={id} />
          <Image id={id} />
        </>
      ) : (
        <Hero />
      )}
    </div>
  );
};

export default Products;
