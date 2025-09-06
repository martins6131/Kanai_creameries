
import React, { useEffect, useState } from 'react'
const API_BASE = 'http://localhost:4000/api'

export default function Locations() {
  const [locations, setLocations] = useState(null)
  useEffect(() => {
    fetch(`${API_BASE}/locations`).then(r=>r.json()).then(setLocations)
  }, [])

  if (!locations) return <div className="text-center py-20">Loading locations…</div>

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Find Us Near You</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map(loc => (
          <div key={loc.id} className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{loc.name}</h3>
            </div>
            <p className="text-sm text-gray-600">{loc.address}</p>
            <p className="text-sm text-gray-600">Hours: {loc.hours}</p>
            <p className="text-sm text-gray-600">Phone: {loc.phone}</p>
            <p className="text-sm text-gray-600">Email: {loc.email}</p>
            <div className="mt-3 pt-3 border-t">
              {loc.deliveryEligible ? (
                <span className="text-green-700 text-sm font-semibold">Free delivery above KES {loc.deliveryMinKES}</span>
              ) : (
                <span className="text-gray-500 text-sm">Pickup only</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
