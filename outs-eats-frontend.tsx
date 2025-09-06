import React, { useEffect, useState } from 'react';
import { ShoppingCart, MapPin, Clock, Phone, Mail, Star, TrendingUp, Gift, Info, Home, Menu as MenuIcon, X } from 'lucide-react';

const API_BASE = 'http://localhost:4000/api';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 opacity-90"></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Outs and Eats
        </h1>
        <p className="text-2xl md:text-3xl mb-4 font-light">Super-Premium Ice Cream</p>
        <p className="text-lg md:text-xl mb-8 opacity-90">Mix-ins • Cakes • Shakes • Smoothies</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Order Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transform hover:scale-105 transition-all duration-300">
            View Menu
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

function Navigation({ onSelect, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: MenuIcon },
    { id: 'locations', label: 'Locations', icon: MapPin },
    { id: 'promotions', label: 'Promotions', icon: Gift },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Outs & Eats
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' 
                    : 'hover:bg-orange-50 text-gray-700'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onSelect(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id 
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' 
                    : 'hover:bg-orange-50 text-gray-700'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function MenuSection() {
  const [menuData, setMenuData] = useState(null);
  const [filterPromo, setFilterPromo] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Simulated menu data since API might not be running
    const simulatedMenu = {
      categories: [
        {
          id: 'signature',
          name: 'Signature Ice Creams',
          items: [
            { id: 'oreo-overload', name: 'Oreo Overload', description: 'Creamy vanilla ice cream loaded with crushed Oreo cookies', priceKES: 350, available: true, promo: false, rating: 4.8 },
            { id: 'strawberry-dream', name: 'Strawberry Dream', description: 'Fresh strawberry ice cream with real fruit chunks', priceKES: 300, available: true, promo: true, rating: 4.9 },
            { id: 'chocolate-fudge', name: 'Chocolate Fudge', description: 'Rich chocolate ice cream with fudge swirls', priceKES: 320, available: true, promo: false, rating: 4.7 },
            { id: 'mint-chip', name: 'Mint Chocolate Chip', description: 'Refreshing mint ice cream with chocolate chips', priceKES: 330, available: true, promo: true, rating: 4.6 }
          ]
        },
        {
          id: 'cakes',
          name: 'Ice Cream Cakes',
          items: [
            { id: 'birthday-cake', name: 'Birthday Celebration Cake', description: 'Three-layer ice cream cake perfect for celebrations', priceKES: 3900, available: true, promo: true, rating: 5.0 },
            { id: 'chocolate-cake', name: 'Chocolate Lovers Cake', description: 'Decadent chocolate ice cream cake', priceKES: 4200, available: true, promo: false, rating: 4.9 }
          ]
        },
        {
          id: 'shakes',
          name: 'Shakes & Smoothies',
          items: [
            { id: 'vanilla-shake', name: 'Classic Vanilla Shake', description: 'Thick and creamy vanilla milkshake', priceKES: 250, available: true, promo: false, rating: 4.5 },
            { id: 'berry-smoothie', name: 'Mixed Berry Smoothie', description: 'Healthy blend of berries and yogurt', priceKES: 280, available: true, promo: false, rating: 4.7 }
          ]
        }
      ]
    };
    
    setMenuData(simulatedMenu);
    
    // Try to fetch from API, fallback to simulated data
    fetch(`${API_BASE}/menu`)
      .then(res => res.json())
      .then(setMenuData)
      .catch(() => console.log('Using simulated menu data'));
  }, []);

  if (!menuData) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  );

  const filteredCategories = selectedCategory === 'all' 
    ? menuData.categories 
    : menuData.categories.filter(cat => cat.id === selectedCategory);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        Our Delicious Menu
      </h2>
      
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          All Items
        </button>
        {menuData.categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <label className="flex items-center justify-center gap-2 mb-8 cursor-pointer">
        <input 
          type="checkbox" 
          checked={filterPromo} 
          onChange={() => setFilterPromo(!filterPromo)}
          className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500"
        />
        <span className="text-gray-700">Show only promotional items</span>
      </label>

      {filteredCategories.map(cat => (
        <div key={cat.id} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">{cat.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cat.items.filter(item => !filterPromo || item.promo).map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-orange-300 to-pink-300 relative">
                  {item.promo && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      PROMO
                    </span>
                  )}
                  <div className="flex items-center justify-center h-full text-white text-6xl">
                    🍦
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  {item.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">
                      KES {item.priceKES}
                    </span>
                    <button 
                      disabled={!item.available}
                      className={`px-4 py-2 rounded-full font-semibold transition-all ${
                        item.available 
                          ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg transform hover:scale-105' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {item.available ? 'Order' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function Locations() {
  const [locations, setLocations] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // Simulated locations data
    const simulatedLocations = [
      {
        id: 'village-market',
        name: 'Village Market Gigiri',
        address: 'Village Market, Gigiri, Nairobi',
        hours: '10:00 AM - 9:00 PM Daily',
        phone: '+254 700 000000',
        email: 'villagemarket@outsandeats.co.ke',
        deliveryEligible: true,
        deliveryMinKES: 1000
      },
      {
        id: 'trm',
        name: 'The TRM Mall',
        address: 'Thika Road Mall, Nairobi',
        hours: '10:00 AM - 9:00 PM Daily',
        phone: '+254 711 111111',
        email: 'trm@outsandeats.co.ke',
        deliveryEligible: false
      },
      {
        id: 'galleria',
        name: 'Galleria Shopping Mall',
        address: 'Langata Road, Nairobi',
        hours: '10:00 AM - 9:00 PM Daily',
        phone: '+254 722 222222',
        email: 'galleria@outsandeats.co.ke',
        deliveryEligible: true,
        deliveryMinKES: 1000
      }
    ];
    
    setLocations(simulatedLocations);
    
    fetch(`${API_BASE}/locations`)
      .then(r => r.json())
      .then(setLocations)
      .catch(() => console.log('Using simulated locations data'));
  }, []);

  if (!locations) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  );

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        Find Us Near You
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map(loc => (
          <div 
            key={loc.id} 
            className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
              selectedLocation?.id === loc.id ? 'ring-4 ring-orange-500' : ''
            }`}
            onClick={() => setSelectedLocation(loc)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{loc.name}</h3>
              <MapPin className="text-orange-500" size={24} />
            </div>
            
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 mt-1" />
                <p className="text-sm">{loc.address}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-gray-400" />
                <p className="text-sm">{loc.hours}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-400" />
                <p className="text-sm">{loc.phone}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-400" />
                <p className="text-sm">{loc.email}</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              {loc.deliveryEligible ? (
                <div className="flex items-center gap-2 text-green-600">
                  <ShoppingCart size={18} />
                  <span className="text-sm font-semibold">
                    Free delivery above KES {loc.deliveryMinKES}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-gray-400">
                  <ShoppingCart size={18} />
                  <span className="text-sm">Pickup only</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Can't Visit Us?</h3>
        <p className="text-gray-700 mb-6">Order online for delivery or pickup!</p>
        <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
          Order Online Now
        </button>
      </div>
    </section>
  );
}

function Promotions() {
  const [promos, setPromos] = useState(null);

  useEffect(() => {
    // Simulated promotions data
    const simulatedPromos = [
      {
        id: 'new-cake',
        title: 'New Cake Flavors Launch!',
        description: 'Introducing our premium ice cream cakes - perfect for any celebration. Starting at KES 3,900 only!',
        active: true,
        discount: '20% OFF'
      },
      {
        id: 'strawberry-promo',
        title: 'Strawberry Season Special',
        description: 'Enjoy our fresh strawberry ice cream with real fruit chunks at a special price!',
        active: true,
        discount: '15% OFF'
      },
      {
        id: 'happy-hour',
        title: 'Happy Hour Deal',
        description: 'Buy 2 scoops, get the 3rd one FREE! Every day from 3-5 PM.',
        active: true,
        discount: 'BOGO'
      }
    ];
    
    setPromos(simulatedPromos);
    
    fetch(`${API_BASE}/promotions`)
      .then(res => res.json())
      .then(setPromos)
      .catch(() => console.log('Using simulated promotions data'));
  }, []);

  if (!promos) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  );

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        Special Promotions
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promos.filter(p => p.active).map(promo => (
          <div key={promo.id} className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Gift className="text-white opacity-20" size={120} />
              </div>
              {promo.discount && (
                <div className="absolute top-4 right-4 bg-white text-orange-500 px-4 py-2 rounded-full font-bold text-lg animate-bounce">
                  {promo.discount}
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{promo.title}</h3>
              <p className="text-gray-600 mb-6">{promo.description}</p>
              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                Claim Offer
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">Don't miss out on our exclusive deals!</p>
        <button className="bg-white border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all">
          Subscribe to Newsletter
        </button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            About Outs and Eats
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              Outs and Eats is Kenya's premier destination for super-premium ice cream experiences. 
              Operated by Eat'N'Go, the master franchisee for top international brands in Kenya and Nigeria.
            </p>
            <p>
              We believe in creating moments of pure joy with every scoop. Our ice creams are crafted 
              with the finest ingredients, mixed fresh daily, and served with love.
            </p>
            <p>
              From our signature mix-ins to our decadent ice cream cakes, every product is designed 
              to deliver an unforgettable taste experience that brings smiles to faces of all ages.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">15+</div>
              <div className="text-sm text-gray-600">Flavors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">3</div>
              <div className="text-sm text-gray-600">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">1000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-pink-300 rounded-3xl transform rotate-6"></div>
          <div className="relative bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To deliver joy to every scoop and create memorable moments for our customers through 
              exceptional ice cream experiences.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Star className="text-orange-500 mt-1" size={20} />
                <span className="text-gray-700">Premium quality ingredients sourced globally</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="text-orange-500 mt-1" size={20} />
                <span className="text-gray-700">Fresh mix-ins and customizable options</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="text-orange-500 mt-1" size={20} />
                <span className="text-gray-700">Exceptional customer service</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="text-orange-500 mt-1" size={20} />
                <span className="text-gray-700">Convenient locations and delivery options</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="text-orange-500" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600">contact@outsandeats.co.ke</p>
                <p className="text-gray-600">support@outsandeats.co.ke</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-full">
                <Phone className="text-pink-500" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-600">+254 700 000000</p>
                <p className="text-gray-600">+254 711 111111</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <MapPin className="text-purple-500" size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Head Office</h4>
                <p className="text-gray-600">Village Market, Gigiri</p>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                f
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                i
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                t
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring