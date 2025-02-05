import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

const cartItems = [
  {
    id: 1,
    name: 'Trendy Monogram Mini Purse',
    price: 225.00,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
    quantity: 1,
    color: 'Brown',
    size: 'Medium'
  },
  {
    id: 2,
    name: 'Vintage Leather Handbag',
    price: 345.00,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80',
    quantity: 1,
    color: 'Black',
    size: 'Large'
  }
];

const Cart = () => {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light mb-8" style={{ fontFamily: 'Helvetica Neue' }}>Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {items.length > 0 ? (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                      <div className="text-sm text-gray-600 mb-4">
                        <span>Color: {item.color}</span>
                        <span className="mx-2">•</span>
                        <span>Size: {item.size}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-4">Your cart is empty</h3>
              <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors"
              >
                Continue Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="lg:w-[400px]">
            <div className="bg-white rounded-2xl p-6 shadow-soft sticky top-24">
              <h3 className="text-lg font-medium mb-6">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="w-full bg-primary text-white rounded-xl py-4 mt-6 flex items-center justify-center gap-2 hover:bg-primary-600 transition-colors group"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
                className="w-full text-center mt-4 text-gray-600 hover:text-primary transition-colors inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;