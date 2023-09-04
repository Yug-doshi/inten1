import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Navbar_Product from "./Navbar_Product";

function Product() {
  const fetchdata = async () => {
    let data = await fetch("https://dummyjson.com/products?limit=50");
    data = await data.json();
    console.log(data);
    setProducts(data.products);
    console.log(products);
  };

  const [products, setProducts] = useState("");
  const [cart, setcart] = useState([
  ]);
  useEffect(() => {
    fetchdata();
  }, []);
    useEffect(() => {
      console.log("Cart", cart);
    }, [cart]);
  return (
    <>
      <Navbar_Product />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Products</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products
          ? products.map((product) => {
              return (
                <ProductItem
                  id = {product.id}
                  save={product.discountPercentage}
                  url={product.images[0]}
                  title={product.title}
                  price={product.price}
                  desc={product.description}
                  rating={product.rating}
                  description={product.description}
                  cart={cart}
                  setcart={(args) => setcart(args)}
                ></ProductItem>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default Product;
