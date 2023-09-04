import React, { useEffect, useState } from "react";
import ProductItemCategory from "./ProductItemCategory";
import Navbar_Product from "../Navbar_Product";

function GroceriesItemCategory() {
  const fetchdata = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    setProducts(data.products);
    console.log(products);
  };

  const [products, setProducts] = useState("");
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <Navbar_Product />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Groceries</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products
          ? products.map((product) => {
              if (product.category === "groceries") {
                return (
                  <ProductItemCategory
                    save={product.discountPercentage}
                    url={product.images[0]}
                    title={product.title}
                    price={product.price}
                    desc={product.description}
                    rating={product.rating}
                  ></ProductItemCategory>
                );
              }
            })
          : ""}
      </div>
    </>
  );
}

export default GroceriesItemCategory;
