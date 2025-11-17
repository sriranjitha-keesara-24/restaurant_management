const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const authRoutes = require('./routers/authRouters');
const adminroutes = require('./routers/admin_routes');
const categorieRoutes = require('./routers/menu_management/category_routes');
const memuRoutes = require('./routers/menu_management/menu_routes');
const cartRoutes = require('./routers/menu_management/cartRoutes')
const couponRoutes = require('./routers/menu_management/coupon_routes');
const addressRoutes = require('./routers/menu_management/address_routes');
const OrderRoutes = require('./routers/menu_management/order_routes');
const adminOrderRoutes = require('./routers/menu_management/admin_orderRoutes');
const tableRoutes = require('./routers/table_routes/table');
const reserveRoutes = require('./routers/table_routes/reserve_routes');
const resturantRoutes = require('./routers/restaurant_routes');
const ContactRoutes = require('./routers/contact_routes');
const FavoriteRoutes = require('./routers/menu_management/favorite_routes');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Vite default port
  credentials: true
}));

// app.use('/uploads', express.static('uploads'));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminroutes);
app.use('/api/categories', categorieRoutes);
app.use('/api/menu', memuRoutes);
app.use('/api/cart', cartRoutes); // ← ADD THIS
app.use('/api/favorites',FavoriteRoutes);
app.use('/api/coupons', couponRoutes); 
app.use('/api/addresses',addressRoutes);
app.use('/api/orders',OrderRoutes);
app.use('/api/admin/orders', adminOrderRoutes);
app.use('/api/tables', tableRoutes);
app.use('/api/reservations', reserveRoutes);
app.use('/api/restaurants', resturantRoutes);
app.use('/api/contacts', ContactRoutes);
// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Restaurant API is running...' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false,
    message: 'Server Error' 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});