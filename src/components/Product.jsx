import React, {useContext} from "react";

import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs"

import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
    const {addToCart} =  useContext(CartContext)
    
    const { id, image, category, title, price } = product;

    return (
      <div>
        <div
          className="border border-[#e4e4e4] rounded-[10px] h-[300px] mb-4 relative overflow-hidden group
        trasition "
        >
          <div className="w-full h-full flex justify-center items-center">
            {/* image */}
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </div>
          </div>
          <div
            className="absolute top-6  -right-11 group-hover:right-5  p-2 flex flex-col
                items-center justify-centergap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <button >
              <div className=" rounded-t-[5px]  flex justify-center items-center text-white w-12 h-12 bg-gray-600">
                <BsPlus
                  onClick={() => addToCart(product, id)}
                  className="text-3xl"
                />
              </div>
              <Link
                to={`/product/${id}`}
                className="w-12 h-12 rounded-b-[5px]  bg-white flex justify-center items-center text-primar drop-shadow-md "
              >
                <BsEyeFill />
              </Link>
            </button>
          </div>
        </div>

        <div>
          <div className="text-sm capitalize text-gray-600 mb-1">
            {category}
          </div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold  mb-1">{title}</h2>
          </Link>
          <div className="font-semibold">$ {price.toFixed(2)}</div>
        </div>
      </div>
    );
};

export default Product;
