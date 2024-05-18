// pages/ProductDetails.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  
  const products = product.find((item) => item.id === parseInt(id));

  if (!products) {
    // Si `products` es undefined, devuelve null o un mensaje de carga
    return <p>Loading...</p>;
  }
  const { title, price, description, image } = products;
  return     <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* Wrapper de imagen & titulo */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Imagen */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt={title} />
          </div>
          {/* Titulo */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl font-medium mt-6 mb-6">${price}</div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(products, products.id)}
              className="bg-black py-4 px-8 text-white "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
};

export default ProductDetails;

