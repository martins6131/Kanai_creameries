
import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { Home, MapPin, Gift, Info, Mail, Menu as MenuIcon } from 'lucide-react'
import MenuList from './components/MenuList.jsx'
import Locations from './components/Locations.jsx'
import Promotions from './components/Promotions.jsx'
import OrderForm from './pages/OrderForm.jsx'
import ContactForm from './pages/ContactForm.jsx'

const NavItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' : 'hover:bg-orange-50 text-gray-700'
      }`
    }
  >
    <Icon size={18} />
    {label}
  </NavLink>
)

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Outs & Eats
            </Link>
            <div className="hidden md:flex space-x-1">
              <NavItem to="/" icon={Home} label="Home" />
              <NavItem to="/menu" icon={MenuIcon} label="Menu" />
              <NavItem to="/locations" icon={MapPin} label="Locations" />
              <NavItem to="/promotions" icon={Gift} label="Promotions" />
              <NavItem to="/contact" icon={Mail} label="Contact" />
              <NavItem to="/order" icon={Info} label="Order" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={
            <div className="text-center py-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                Outs and Eats
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-gray-700">Super-Premium Ice Cream</p>
              <p className="text-lg md:text-xl mb-8 text-gray-600">Mix-ins • Cakes • Shakes • Smoothies</p>
              <div className="flex gap-4 justify-center">
                <Link to="/order" className="bg-white border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
                  Order Now
                </Link>
                <Link to="/menu" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                  View Menu
                </Link>
              </div>
            </div>
          } />
          <Route path="/menu" element={<MenuList />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>

      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} Outs & Eats. All rights reserved.
      </footer>
    </div>
  )
}
