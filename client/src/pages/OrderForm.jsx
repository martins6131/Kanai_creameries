
import React, { useState } from 'react'
import PreviewModal from '../components/PreviewModal.jsx'

const API_BASE = 'http://localhost:4000/api'

export default function OrderForm() {
  const [form, setForm] = useState({
    customerName: '',
    items: [{ id: 'oreo-overload', qty: 1 }],
    totalAmount: 350,
    locationId: 'village-market'
  })
  const [previewData, setPreviewData] = useState(null)
  const [open, setOpen] = useState(false)

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const openPreview = async (e) => {
    e.preventDefault()
    const res = await fetch(`${API_BASE}/orders?preview=true`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const data = await res.json()
    if (data.success) {
      setPreviewData(data.order)
      setOpen(true)
    } else {
      alert(data.error || 'Preview failed')
    }
  }

  const submitOrder = async () => {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const data = await res.json()
    if (data.success || data.id) {
      alert('Order placed! ID: ' + (data.order?.id || data.id))
      setOpen(false)
    } else {
      alert(data.error || 'Submission failed')
    }
  }

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Place an Order</h2>
      <form className="space-y-4" onSubmit={openPreview}>
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg"
          value={form.customerName} onChange={e => handleChange('customerName', e.target.value)} required />
        <div className="grid grid-cols-2 gap-3">
          <input type="text" placeholder="Item ID" className="px-4 py-3 border rounded-lg"
            value={form.items[0].id} onChange={e => handleChange('items', [{ id: e.target.value, qty: form.items[0].qty }])} />
          <input type="number" placeholder="Qty" className="px-4 py-3 border rounded-lg"
            value={form.items[0].qty} onChange={e => handleChange('items', [{ id: form.items[0].id, qty: Number(e.target.value) }])} />
        </div>
        <input type="number" placeholder="Total Amount (KES)" className="w-full px-4 py-3 border rounded-lg"
          value={form.totalAmount} onChange={e => handleChange('totalAmount', Number(e.target.value))} />
        <select className="w-full px-4 py-3 border rounded-lg" value={form.locationId}
          onChange={e => handleChange('locationId', e.target.value)}>
          <option value="village-market">Village Market</option>
          <option value="trm">TRM</option>
          <option value="galleria">Galleria</option>
        </select>

        <button type="submit" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg">Preview Order</button>
      </form>

      <PreviewModal open={open} onClose={() => setOpen(false)} onConfirm={submitOrder} title="Confirm Your Order" data={previewData || {}} />
    </section>
  )
}
