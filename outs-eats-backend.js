// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Enhanced Sample Data
const menu = {
  categories: [
    {
      id: 'signature',
      name: 'Signature Ice Creams',
      items: [
        { 
          id: 'oreo-overload', 
          name: 'Oreo Overload', 
          description: 'Creamy vanilla ice cream loaded with crushed Oreo cookies and chocolate fudge swirls', 
          priceKES: 350, 
          image: '/images/oreo-overload.jpg', 
          available: true, 
          promo: false,
          rating: 4.8,
          calories: 320,
          allergens: ['milk', 'wheat', 'soy']
        },
        { 
          id: 'strawberry-dream', 
          name: 'Strawberry Dream', 
          description: 'Fresh strawberry ice cream made with real fruit chunks and a hint of vanilla', 
          priceKES: 300, 
          image: '/images/strawberry-dream.jpg', 
          available: true, 
          promo: true,
          rating: 4.9,
          calories: 280,
          allergens: ['milk']
        },
        { 
          id: 'chocolate-fudge', 
          name: 'Chocolate Fudge Brownie', 
          description: 'Rich chocolate ice cream with fudge swirls and brownie pieces', 
          priceKES: 320, 
          image: '/images/chocolate-fudge.jpg', 
          available: true, 
          promo: false,
          rating: 4.7,
          calories: 360,
          allergens: ['milk', 'eggs', 'wheat']
        },
        { 
          id: 'mint-chip', 
          name: 'Mint Chocolate Chip', 
          description: 'Refreshing mint ice cream with dark chocolate chips', 
          priceKES: 330, 
          image: '/images/mint-chip.jpg', 
          available: true, 
          promo: true,
          rating: 4.6,
          calories: 300,
          allergens: ['milk']
        },
        { 
          id: 'caramel-swirl', 
          name: 'Salted Caramel Swirl', 
          description: 'Smooth caramel ice cream with sea salt and caramel ribbons', 
          priceKES: 340, 
          image: '/images/caramel-swirl.jpg', 
          available: true, 
          promo: false,
          rating: 4.8,
          calories: 310,
          allergens: ['milk']
        },
        { 
          id: 'cookies-cream', 
          name: 'Cookies & Cream', 
          description: 'Classic vanilla with chocolate cookie pieces throughout', 
          priceKES: 320, 
          image: '/images/cookies-cream.jpg', 
          available: true, 
          promo: false,
          rating: 4.7,
          calories: 330,
          allergens: ['milk', 'wheat']
        }
      ]
    },
    {
      id: 'cakes',
      name: 'Ice Cream Cakes',
      items: [
        { 
          id: 'birthday-cake', 
          name: 'Birthday Celebration Cake', 
          description: 'Three-layer ice cream cake with vanilla, chocolate, and strawberry layers', 
          priceKES: 3900, 
          image: '/images/birthday-cake.jpg', 
          available: true, 
          promo: true,
          rating: 5.0,
          servings: '8-10',
          allergens: ['milk', 'eggs', 'wheat']
        },
        { 
          id: 'chocolate-cake', 
          name: 'Chocolate Lovers Cake', 
          description: 'Decadent all-chocolate ice cream cake with fudge layers', 
          priceKES: 4200, 
          image: '/images/chocolate-cake.jpg', 
          available: true, 
          promo: false,
          rating: 4.9,
          servings: '8-10',
          allergens: ['milk', 'eggs', 'wheat']
        },
        { 
          id: 'custom-cake', 
          name: 'Custom Design Cake', 
          description: 'Create your own ice cream cake with custom flavors and decorations', 
          priceKES: 4500, 
          image: '/images/custom-cake.jpg', 
          available: true, 
          promo: false,
          rating: 4.8,
          servings: '10-12',
          allergens: ['varies']
        }
      ]
    },
    {
      id: 'shakes',
      name: 'Milkshakes & Smoothies',
      items: [
        { 
          id: 'vanilla-shake', 
          name: 'Classic Vanilla Shake', 
          description: 'Thick and creamy vanilla milkshake topped with whipped cream', 
          priceKES: 250, 
          image: '/images/vanilla-shake.jpg', 
          available: true, 
          promo: false,
          rating: 4.5,
          calories: 400,
          allergens: ['milk']
        },
        { 
          id: 'berry-smoothie', 
          name: 'Mixed Berry Smoothie', 
          description: 'Healthy blend of strawberries, blueberries, and yogurt', 
          priceKES: 280, 
          image: '/images/berry-smoothie.jpg', 
          available: true, 
          promo: false,
          rating: 4.7,
          calories: 250,
          allergens: ['milk']
        },
        { 
          id: 'chocolate-shake', 
          name: 'Double Chocolate Shake', 
          description: 'Rich chocolate milkshake with chocolate syrup and chocolate chips', 
          priceKES: 270, 
          image: '/images/chocolate-shake.jpg', 
          available: true, 
          promo: false,
          rating: 4.6,
          calories: 450,
          allergens: ['milk']
        },
        { 
          id: 'mango-smoothie', 
          name: 'Tropical Mango Smoothie', 
          description: 'Fresh mango blended with coconut milk and a hint of lime', 
          priceKES: 290, 
          image: '/images/mango-smoothie.jpg', 
          available: true, 
          promo: true,
          rating: 4.8,
          calories: 280,
          allergens: ['none']
        }
      ]
    },
    {
      id: 'sundaes',
      name: 'Sundaes & Specials',
      items: [
        { 
          id: 'banana-split', 
          name: 'Classic Banana Split', 
          description: 'Three scoops with banana, chocolate sauce, nuts, and cherry on top', 
          priceKES: 450, 
          image: '/images/banana-split.jpg', 
          available: true, 
          promo: false,
          rating: 4.9,
          calories: 580,
          allergens: ['milk', 'nuts']
        },
        { 
          id: 'brownie-sundae', 
          name: 'Brownie Sundae', 
          description: 'Warm brownie topped with vanilla ice cream and hot fudge', 
          priceKES: 420, 
          image: '/images/brownie-sundae.jpg', 
          available: true, 
          promo: true,
          rating: 4.8,
          calories: 620,
          allergens: ['milk', 'eggs', 'wheat']
        }
      ]
    }
  ]
};

const locations = [
  {
    id: 'village-market',
    name: 'Village Market Gigiri',
    address: 'Village Market, Limuru Road, Gigiri, Nairobi',
    gps: { lat: -1.2278, lng: 36.8052 },
    hours: '10:00 AM - 9:00 PM Daily',
    phone: '+254 700 000000',
    email: 'villagemarket@outsandeats.co.ke',
    deliveryEligible: true,
    deliveryMinKES: 1000,
    features: ['Free WiFi', 'Outdoor Seating', 'Parking', 'Wheelchair Accessible'],
    manager: 'John Kamau'
  },
  {
    id: 'trm',
    name: 'The TRM Mall',
    address: 'Thika Road Mall, Thika Road, Nairobi',
    gps: { lat: -1.2197, lng: 36.8885 },
    hours: '10:00 AM - 9:00 PM Daily',
    phone: '+254 711 111111',
    email: 'trm@outsandeats.co.ke',
    deliveryEligible: false,
    deliveryMinKES: null,
    features: ['Free WiFi', 'Indoor Seating', 'Parking', 'Kids Play Area'],
    manager: 'Mary Wanjiru'
  },
  {
    id: 'galleria',
    name: 'Galleria Shopping Mall',
    address: 'Galleria Mall, Langata Road, Nairobi',
    gps: { lat: -1.3439, lng: 36.7629 },
    hours: '10:00 AM - 9:00 PM Daily',
    phone: '+254 722 222222',
    email: 'galleria@outsandeats.co.ke',
    deliveryEligible: true,
    deliveryMinKES: 1000,
    features: ['Free WiFi', 'Outdoor Terrace', 'Parking', 'Event Space'],
    manager: 'Peter Ochieng'
  }
];

const promotions = [
  {
    id: 'new-cake',
    title: 'New Cake Flavors Launch!',
    description: 'Introducing our premium ice cream cakes - perfect for any celebration. Starting at KES 3,900 only!',
    bannerImage: '/images/cake-promo.jpg',
    active: true,
    startDate: '2025-01-01',
    endDate: '2025-02-28',
    discount: '20% OFF',
    terms: 'Valid for dine-in and takeaway only. Cannot be combined with other offers.'
  },
  {
    id: 'strawberry-promo',
    title: 'Strawberry Season Special',
    description: 'Enjoy our fresh strawberry ice cream with real fruit chunks at a special price!',
    bannerImage: '/images/strawberry-promo.jpg',
    active: true,
    startDate: '2025-01-15',
    endDate: '2025-02-15',
    discount: '15% OFF',
    terms: 'Available at all locations while stocks last.'
  },
  {
    id: 'happy-hour',
    title: 'Happy Hour Deal',
    description: 'Buy 2 scoops, get the 3rd one FREE! Every day from 3-5 PM.',
    bannerImage: '/images/happy-hour-promo.jpg',
    active: true,
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    discount: 'BOGO',
    terms: 'Valid daily between 3 PM and 5 PM. Lowest priced scoop is free.'
  },
  {
    id: 'student-discount',
    title: 'Student Discount',
    description: 'Show your student ID and get 10% off on all items!',
    bannerImage: '/images/student-promo.jpg',
    active: true,
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    discount: '10% OFF',
    terms: 'Valid student ID required. Cannot be combined with other promotions.'
  }
];

// Orders storage (in production, use a database)
let orders = [];
let orderIdCounter = 1000;

// API Routes

// Menu endpoints
app.get('/api/menu', (req, res) => {
  res.json(menu);
});

app.get('/api/menu/:category', (req, res) => {
  const category = menu.categories.find(cat => cat.id === req.params.category);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

app.get('/api/menu/:category/:item', (req, res) => {
  const category = menu.categories.find(cat => cat.id === req.params.category);
  if (category) {
    const item = category.items.find(it => it.id === req.params.item);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

// Locations endpoints
app.get('/api/locations', (req, res) => {
  res.json(locations);
});

app.get('/api/locations/:id', (req, res) => {
  const location = locations.find(loc => loc.id === req.params.id);
  if (location) {
    res.json(location);
  } else {
    res.status(404).json({ error: 'Location not found' });
  }
});

// Promotions endpoints
app.get('/api/promotions', (req, res) => {
  const activeOnly = req.query.active === 'true';
  if (activeOnly) {
    res.json(promotions.filter(p => p.active));
  } else {
    res.json(promotions);
  }
});

app.get('/api/promotions/:id', (req, res) => {
  const promotion = promotions.find(p => p.id === req.params.id);
  if (promotion) {
    res.json(promotion);
  } else {
    res.status(404).json({ error: 'Promotion not found' });
  }
});

// Order endpoints
app.post('/api/orders', (req, res) => {
  const order = {
    id: orderIdCounter++,
    ...req.body,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  orders.push(order);
  res.status(201).json(order);
});

app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // In production, send email or save to database
  console.log('Contact form submission:', { name, email, subject, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon!' 
  });
});

// Newsletter subscription endpoint
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  
  // In production, save to mailing list
  console.log('Newsletter subscription:', email);
  
  res.json({ 
    success: true, 
    message: 'Successfully subscribed to newsletter!' 
  });
});

// Search endpoint
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase();
  if (!query) {
    return res.json([]);
  }
  
  const results = [];
  
  // Search through menu items
  menu.categories.forEach(category => {
    category.items.forEach(item => {
      if (item.name.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query)) {
        results.push({
          type: 'menu',
          category: category.name,
          ...item
        });
      }
    });
  });
  
  // Search through promotions
  promotions.forEach(promo => {
    if (promo.title.toLowerCase().includes(query) || 
        promo.description.toLowerCase().includes(query)) {
      results.push({
        type: 'promotion',
        ...promo
      });
    }
  });
  
  res.json(results);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🍦 Outs and Eats API running on port ${PORT}`);
  console.log(`📍 API available at http://localhost:${PORT}/api`);
  console.log(`\nAvailable endpoints:`);
  console.log(`  GET  /api/menu - Get full menu`);
  console.log(`  GET  /api/locations - Get all locations`);
  console.log(`  GET  /api/promotions - Get active promotions`);
  console.log(`  POST /api/orders - Create new order`);
  console.log(`  POST /api/contact - Submit contact form`);
  console.log(`  GET  /api/search?q=query - Search menu and promotions`);
});

module.exports = app;