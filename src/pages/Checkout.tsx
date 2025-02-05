import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, Truck, Shield, Lock, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const checkoutSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address: z.string().min(5),
  city: z.string().min(2),
  country: z.string().min(2),
  postalCode: z.string().min(4),
  cardNumber: z.string().min(16).max(16),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/),
  cvv: z.string().min(3).max(4)
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema)
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-3xl font-light mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been confirmed and will be shipped shortly.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-soft mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Order number</span>
              <span className="font-medium">#ORD-2024-001</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Estimated delivery</span>
              <span className="font-medium">March 25, 2024</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary-600 transition-colors"
            >
              Continue Shopping
            </Link>
            <button className="px-8 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              View Order Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/cart" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Cart
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {[
              { number: 1, title: 'Information' },
              { number: 2, title: 'Shipping' },
              { number: 3, title: 'Payment' }
            ].map((s) => (
              <div key={s.number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= s.number ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {s.number}
                </div>
                <div className={`ml-2 ${step >= s.number ? 'text-primary' : 'text-gray-400'}`}>
                  {s.title}
                </div>
                {s.number < 3 && (
                  <div className={`w-24 h-[2px] mx-4 ${
                    step > s.number ? 'bg-primary' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-medium">Contact Information</h2>
                  <p className="text-sm text-gray-600">We'll use this to keep you informed about your order</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-medium">Shipping Information</h2>
                  <p className="text-sm text-gray-600">Enter your shipping details</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    {...register('firstName')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.firstName && (
                    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.firstName.message}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    {...register('lastName')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.lastName && (
                    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.lastName.message}
                    </div>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    {...register('address')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.address && (
                    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.address.message}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    {...register('city')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.city && (
                    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.city.message}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    {...register('postalCode')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.postalCode && (
                    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.postalCode.message}
                    </div>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select
                    {...register('country')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                  </select>
                  {errors.country && (
                    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.country.message}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-medium">Payment Information</h2>
                  <p className="text-sm text-gray-600">Enter your payment details</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register('cardNumber')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                    />
                    <CreditCard className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  {errors.cardNumber && (
                    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.cardNumber.message}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      {...register('expiryDate')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="MM/YY"
                    />
                    {errors.expiryDate && (
                      <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.expiryDate.message}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                      type="text"
                      {...register('cvv')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="123"
                    />
                    {errors.cvv && (
                      <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.cvv.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className={`w- full bg-primary text-white rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-primary-600 transition-colors ${
                isProcessing ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>Complete Order</>
              )}
            </button>
          </form>
        </div>

        <div className="lg:w-[400px]">
          <div className="bg-white rounded-2xl p-6 shadow-soft sticky top-24 space-y-6">
            <h3 className="text-lg font-medium">Order Summary</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80" 
                    alt="Product" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Trendy Monogram Mini Purse</h4>
                  <p className="text-sm text-gray-600">Quantity: 1</p>
                </div>
                <span className="font-medium">$225.00</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80" 
                    alt="Product" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Vintage Leather Handbag</h4>
                  <p className="text-sm text-gray-600">Quantity: 1</p>
                </div>
                <span className="font-medium">$345.00</span>
              </div>
            </div>

            <div className="h-px bg-gray-200"></div>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>$570.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>$15.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>$57.00</span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>$642.00</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Truck className="w-5 h-5" />
                <span>Free shipping on orders over $500</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Shield className="w-5 h-5" />
                <span>Secure checkout with SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;