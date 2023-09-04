import React from "react";

function ProductItemCategory(props) {
  return (
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
            >
              Add to cart
            </button>
          </div>
          <button className="bg-gray-400 px-2 py-1 rounded-full">
            <i className="fa-solid fa-heart" />
          </button>
          <div className="bg-gray-400 px-2 py-1 rounded-full">
            <i className="fa-solid fa-eye" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItemCategory;
