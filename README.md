🍦 Outs & Eats – Full Stack Ice Cream Shop

A modern full-stack web app for an ice cream brand. Built with React (Vite + Tailwind) and Express.js.
Features menu browsing, locations, promotions, order placement with preview, and a contact form with preview.

🚀 Live Preview

You can preview the app locally after setup:

# Start backend
cd server
npm install
npm start   # Runs on http://localhost:4000/api

# Start frontend
cd client
npm install
npm run dev # Runs on http://localhost:5173

🖼️ Screenshots
Homepage (Menu Categories)

Locations

Promotions

Order Form (Preview Modal)

Contact Form (Preview Modal)

📂 Project Structure
outsandeats/
├── server/          # Express backend (API + sanitization + preview mode)
├── client/          # React frontend (Vite + Tailwind)
│   ├── components/  # Navbar, Footer, Menu, Locations, Promotions, PreviewModal
│   ├── pages/       # OrderForm, ContactForm
│   └── App.jsx
└── README.md

✨ Features

📋 Browse menu by category with descriptions, prices & ratings.

🏪 View store locations with GPS, contact info & features.

🎉 Promotions with banners and discounts.

🛒 Orders with Preview Modal before submission.

✉️ Contact form with Preview Modal before submission.

🔎 Search across menu & promotions.

🛡️ Input trimming & sanitization on backend.

⚡️ Pro tip: if you want a live online preview (instead of just local), you can deploy:

Backend → Render / Railway / Heroku

Frontend → Netlify / Vercel / GitHub Pages
