import React, { useState } from 'react';
import { User, Settings, ShoppingBag, Heart, CreditCard, LogOut, Bell, Lock, ChevronRight, Trash2, Mail, Globe, Shield, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const settingsSchema = z.object({
  emailNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  orderUpdates: z.boolean(),
  passwordCurrent: z.string().min(6),
  passwordNew: z.string().min(6),
  passwordConfirm: z.string().min(6),
  language: z.string(),
  currency: z.string(),
  timezone: z.string(),
});

type SettingsFormData = z.infer<typeof settingsSchema>;

const orders = [
  {
    id: '#ORD-2024-001',
    date: '2024-03-15',
    status: 'Delivered',
    total: 299.00,
    items: [
      {
        name: 'Trendy Monogram Mini Purse',
        quantity: 1,
        price: 299.00,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: '#ORD-2024-002',
    date: '2024-03-10',
    status: 'Processing',
    total: 570.00,
    items: [
      {
        name: 'Vintage Leather Handbag',
        quantity: 1,
        price: 345.00,
        image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80'
      },
      {
        name: 'Classic Red Big Bag',
        quantity: 1,
        price: 225.00,
        image: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&q=80'
      }
    ]
  }
];

const paymentMethods = [
  {
    id: 1,
    type: 'Visa',
    last4: '4242',
    expiry: '12/25',
    isDefault: true
  },
  {
    id: 2,
    type: 'Mastercard',
    last4: '8888',
    expiry: '08/24',
    isDefault: false
  }
];

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'orders', label: 'Orders', icon: ShoppingBag },
  { id: 'wishlist', label: 'Wishlist', icon: Heart },
  { id: 'payment', label: 'Payment Methods', icon: CreditCard },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      emailNotifications: true,
      marketingEmails: false,
      orderUpdates: true,
      language: 'en',
      currency: 'USD',
      timezone: 'UTC',
    }
  });

  const onSettingsSubmit = (data: SettingsFormData) => {
    console.log('Settings updated:', data);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                />
                <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-600 transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-medium">Sarah Johnson</h2>
                <p className="text-gray-600">sarah.johnson@example.com</p>
                <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Premium Member</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Verified</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 p-6 bg-white rounded-2xl shadow-soft">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value="Sarah Johnson"
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <input 
                      type="email" 
                      value="sarah.johnson@example.com"
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      value="+1 (555) 123-4567"
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-6 bg-white rounded-2xl shadow-soft">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Shipping Address
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Address</label>
                    <input 
                      type="text" 
                      value="123 Fashion Street"
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      readOnly
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">City</label>
                      <input 
                        type="text" 
                        value="New York"
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Postal Code</label>
                      <input 
                        type="text" 
                        value="10001"
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        readOnly
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Country</label>
                    <input 
                      type="text" 
                      value="United States"
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium">Recent Orders</h2>
              <div className="flex items-center gap-2">
                <select className="px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                  <option>All Orders</option>
                  <option>Processing</option>
                  <option>Delivered</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow">
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-medium">{order.id}</span>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{order.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-medium">${order.total.toFixed(2)}</span>
                        <button className="px-4 py-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium truncate">{item.name}</h4>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <span className="font-medium whitespace-nowrap">${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h2 className="text-2xl font-medium">Payment Methods</h2>
              <button className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5" />
                Add New Card
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id}
                  className={`relative p-6 rounded-2xl border-2 transition-all hover:shadow-medium ${
                    method.isDefault ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <CreditCard className={`w-8 h-8 ${method.isDefault ? 'text-primary' : 'text-gray-400'}`} />
                      {method.isDefault && (
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Default</span>
                      )}
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">{method.type} •••• {method.last4}</p>
                    <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                  </div>
                  {!method.isDefault && (
                    <button className="mt-4 w-full px-4 py-2 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-colors">
                      Set as Default
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'wishlist':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium">My Wishlist</h2>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-xl">3 items</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Trendy Monogram Mini Purse',
                  price: 299.00,
                  image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
                  inStock: true
                },
                {
                  name: 'Vintage Leather Handbag',
                  price: 345.00,
                  image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80',
                  inStock: true
                },
                {
                  name: 'Classic Red Big Bag',
                  price: 399.00,
                  image: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&q=80',
                  inStock: false
                }
              ].map((item, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all">
                  <div className="relative aspect-square">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors">
                      <Heart className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium mb-2 truncate">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">${item.price.toFixed(2)}</span>
                      <button 
                        className={`px-4 py-2 rounded-xl transition-colors ${
                          item.inStock 
                            ? 'bg-primary text-white hover:bg-primary-600' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!item.inStock}
                      >
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-lg font-medium mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-600">Receive emails about your account activity</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('emailNotifications')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Order Updates</div>
                      <div className="text-sm text-gray-600">Receive updates about your orders</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('orderUpdates')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Marketing Emails</div>
                      <div className="text-sm text-gray-600">Receive marketing and promotional emails</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('marketingEmails')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">Security Settings</h3>
              <div className="space-y-6 bg-white rounded-2xl p-6 shadow-soft">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('passwordCurrent')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.passwordCurrent && (
                    <p className="text-red-500 text-sm mt-1">{errors.passwordCurrent.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      {...register('passwordNew')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.passwordNew && (
                    <p className="text-red-500 text-sm mt-1">{errors.passwordNew.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    {...register('passwordConfirm')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  {errors.passwordConfirm && (
                    <p className="text-red-500 text-sm mt-1">{errors.passwordConfirm.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">Regional Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    {...register('language')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                  <select
                    {...register('currency')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                  <select
                    {...register('timezone')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="UTC">UTC</option>
                    <option value="EST">EST</option>
                    <option value="PST">PST</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                onClick={handleSubmit(onSettingsSubmit)}
                className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Save Settings
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64">
          <div className="bg-white rounded-2xl p-4 shadow-soft sticky top-24">
            <div className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-md'
                        : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors mt-4">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-2xl p-6 shadow-soft min-h-[calc(100vh-12rem)]">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;