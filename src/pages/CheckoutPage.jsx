import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const CheckoutPage = () => {
    const { cart, total } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        cardNumber: "",
        expirationDate: "",
        cvv: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se manejaria la lógica de envío del formulario
        console.log("Form submitted", formData);
    };

    return (
        <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold mb-8">Checkout</h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Expiration Date</label>
                        <input
                            type="text"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-black text-white py-2 px-4 rounded-md">
                        Place Order
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CheckoutPage;
