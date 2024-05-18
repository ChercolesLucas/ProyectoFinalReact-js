import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CheckoutForm = ({ onClose }) => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar la lógica de checkout, como enviar los datos a un servidor
    console.log('Order Details:', {
      name,
      address,
      paymentMethod,
      cart,
      total
    });
    clearCart();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Address</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Payment Method</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Select a method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
