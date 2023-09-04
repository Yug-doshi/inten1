import React, { useEffect } from "react";
import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import Navbar_Product from "./Navbar_Product";
import Cart from "./cart";


function ProductItem(props) {
  const cart = props.cart;
  const [anchorEl, setAnchorEl] = useState(null);

  const setcart = (args) => props.setcart(args);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };


  return (
    <>
      <div className="w-1/4 p-4">
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Product Card Design Using Tailwind CSS</title>
        <div className="overflow-hidden shadow-2xl border-2 border-slate-100">
          <img
            className="w-full"
            src={props.url}
            alt=""
            style={{ height: "180px", width: "100%" }}
          />
          <div className="p-4">
            <h2 className="text-4xl font-bold mb-5">
              {props.title.length <= 20
                ? props.title
                : props.title.substring(0, 20) + ".."}
            </h2>
            <h3 className="text-4xl font-bold mb-2">
              Price: <u>{props.price}$</u>
            </h3>
            <div className="flex gap-5 items-center">
              <h4 className="text-gray-600 font-bold line-through text-base">
                <h3>Price: {props.price}$</h3>
              </h4>
              <p className="bg-green-500 px-3 ml-16 py-3 rounded-full font-bold text-white">
                Save {props.save} %
              </p>
            </div>
          </div>
          <div className="mb-4 p-4">
            <h4>
              {props.desc.length <= 60
                ? props.desc
                : props.desc.substring(0, 60) + ".."}
            </h4>
          </div>
          <div className="flex gap-6 mb-5 p-4">
            <div className="text-yellow-500 text-base">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star-half-stroke" />
              <i className="fa-regular fa-star" />
            </div>
            <h3 className="font-bold text-gray-500">{props.rating}K</h3>
          </div>
          <div className="flex gap-3 items-center p-4">
            <div>
              <button
                className="font-bold bg-orange-400 px-10 py-2 mr-3 rounded-lg text-white"
                style={{ height: "50px", width: "300px" }}
                onClick={() => {
                  let productData = {
                    id: props.id,
                    title: props.title,
                    price: props.price,
                    image: props.url,
                    description: props.description,
                    quantity: 1,
                  };
                  if (
                    cart?.length &&
                    cart.find((item) => item.id === props.id)
                  ) {
                    let index = cart.findIndex((item) => item.id === props.id);
                    let newCart = [...cart];
                    newCart[index].quantity += 1;
                    setcart(newCart);
                    return;
                  }
                  props.setcart([...cart, productData]);
                  <Cart
                    cart={cart}
                    setcart={(args) => props.setcart(args)}
                  ></Cart>;
                }
                
              }
              >
                Add to cart
              </button>
            </div>

            <div className="px-2 py-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
                                    