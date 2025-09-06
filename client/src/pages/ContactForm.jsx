
import React, { useState } from 'react'
import PreviewModal from '../components/PreviewModal.jsx'

const API_BASE = 'http://localhost:4000/api'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [open, setOpen] = useState(false)
  const [previewData, setPreviewData] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handlePreview = async (e) => {
    e.preventDefault()
    const res = await fetch(`${API_BASE}/contact?preview=true`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (data.success) {
      setPreviewData(data.data)
      setOpen(true)
    } else {
      alert(data.error || 'Preview failed')
    }
  }

  const handleSubmit = async () => {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (data.success) {
      alert(data.message)
      setOpen(false)
      setForm({ name: '', email: '', subject: '', message: '' })
    } else {
      alert(data.error || 'Submission failed')
    }
  }

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <form onSubmit={handlePreview} className="space-y-4">
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" required />
        <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg h-32" required />
        <div className="flex gap-3">
          <button type="submit" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg">Preview</button>
        </div>
      </form>

      <PreviewModal open={open} onClose={() => setOpen(false)} onConfirm={handleSubmit} title="Confirm Your Message" data={previewData || {}} />
    </section>
  )
}
