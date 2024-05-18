import React, { useContext } from "react";


import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

import {CartContext} from "../contexts/CartContext"

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount  } = useContext(CartContext);
    //destruturacion del item
    const { id, image, amount, title, price } = item;
    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500"> {/*Contenedor principal de la carta */}
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
            {/*Contendor de la imagen */}
                <div>
                    <img className="max-w-[80px]" src={image} alt="" />
                </div>
                {/*Contenedor principal de Titulo & Icono eliminar (x) */}
                <div className="w-full flex flex-col">
                    {/*Contenedor de titulo * icono */}
                <div className="flex justify-between mb-2">
                        {/*Titulo */}
                        <div className="text-sm uppercase font-medium max-w-[240px]">{title}</div>
                        {/*Icono (x)*/}
                    <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
                    <IoMdClose className=" text-gray-500 hover:text-red-500 transition duration-300 "/>
                    </div>
                </div>
                    {/*Contenedor principal de qty */}
                    <div className=" flex gap-x-2 h-[36px] text-sm ">
                        {/*qty */}
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
                            {/*- icono */}
                            <div onClick={()=> decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                            <IoMdRemove />
                            </div>
                            {/*amount */}
                            <div className="h-full flex justify-center items-center px-2">{ amount}</div>
                            {/*+ icono */}
                            <div onClick={()=> increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                                <IoMdAdd/>
                            </div>
                        </div>
                        {/*Precio del producto */}
                        <div className="flex flex-1 items-center justify-around">$ {price}</div>
                        {/*Precio final/total */}
                        <div className="flex flex-1 justify-end items-center text-black font-medium">{ `$ ${parseFloat(price*amount).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartItem;