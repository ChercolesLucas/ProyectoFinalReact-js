import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    //estado de la carta
    const [cart, setCart] = useState([])
    
    //estado del importe del producto
    const [itemAmount, setItemAmount] = useState(0);

    //estado del precio total/final
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount;
        }, 0);
        setTotal(total);
    })

    //anadir producto al carrito
    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };

        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
                
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem]);
        }
    }

    //actualizar el importe del producto
    useEffect(() => {
        if (cart) { 
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
        setItemAmount(amount)
        }
    }, [cart])

    //eliminar producto desde carrito
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);    
    }
    
    //limpiar carrito
    const clearCart = () => {
        setCart([]);
    }

    //sumar cantidad del producto
    const increaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id);
        addToCart(cartItem, id);
    };

        //restar cantidad del producto
    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        
            if (cartItem.amount < 2) {
                removeFromCart(id)
            }
        }
    };


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            increaseAmount,
            decreaseAmount,
            itemAmount,
            total,
        }}>
        {children}
        </CartContext.Provider>
    );
};

export default  CartProvider;
