
import React, { useEffect, useState } from 'react'

const API_BASE = 'http://localhost:4000/api'

export default function MenuList() {
  const [data, setData] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filterPromo, setFilterPromo] = useState(false)

  useEffect(() => {
    fetch(`${API_BASE}/menu`).then(r => r.json()).then(setData).catch(() => setData(null))
  }, [])

  if (!data) return <div className="text-center py-20">Loading menu…</div>

  const categories = selectedCategory === 'all' ? data.categories : data.categories.filter(c => c.id === selectedCategory)

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Our Delicious Menu</h2>

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <button onClick={() => setSelectedCategory('all')}
          className={`px-6 py-2 rounded-full ${selectedCategory==='all'?'bg-gradient-to-r from-orange-500 to-pink-500 text-white':'bg-gray-100 hover:bg-gray-200'}`}>All Items</button>
        {data.categories.map(cat => (
          <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2 rounded-full ${selectedCategory===cat.id?'bg-gradient-to-r from-orange-500 to-pink-500 text-white':'bg-gray-100 hover:bg-gray-200'}`}>{cat.name}</button>
        ))}
      </div>

      <label className="flex items-center justify-center gap-2 mb-8 cursor-pointer">
        <input type="checkbox" checked={filterPromo} onChange={() => setFilterPromo(!filterPromo)} className="w-5 h-5" />
        <span className="text-gray-700">Show only promotional items</span>
      </label>

      {categories.map(cat => (
        <div key={cat.id} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">{cat.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cat.items.filter(i => !filterPromo || i.promo).map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow p-4">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-3" onError={(e)=>{e.target.style.display='none'}} />
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-orange-600">KES {item.priceKES}</span>
                  <button disabled={!item.available} className={`px-4 py-2 rounded-full font-semibold ${item.available?'bg-gradient-to-r from-orange-500 to-pink-500 text-white':'bg-gray-300 text-gray-500'}`}>
                    {item.available ? 'Order' : 'Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
