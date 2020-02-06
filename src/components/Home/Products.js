import React from "react";
import Product from "./Product";
import Title from "../global/Title";

const Products = ({ items: { edges: products } }) => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {products.map(product => {
            if (!product.node) {
              return null;
            }
            return <Product key={product.node.id} product={product.node} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
