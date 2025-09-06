
import React, { useEffect, useState } from 'react'
const API_BASE = 'http://localhost:4000/api'

export default function Promotions() {
  const [promos, setPromos] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/promotions?active=true`).then(r=>r.json()).then(setPromos)
  }, [])

  if (!promos) return <div className="text-center py-20">Loading promotions…</div>

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Special Promotions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promos.map(promo => (
          <div key={promo.id} className="bg-white rounded-2xl shadow overflow-hidden">
            <img src={promo.bannerImage} alt={promo.title} className="w-full h-40 object-cover" onError={(e)=>{e.target.style.display='none'}} />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{promo.title}</h3>
              <p className="text-gray-600 mb-4">{promo.description}</p>
              {promo.discount && <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">{promo.discount}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
