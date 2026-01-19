// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // ← make sure this file exists
import Footer from './components/Footer';  // ← we'll create it in step 3

// These 3 pages are GUARANTEED to work
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import AccountProfile from './pages/Account/Profile';
import Cart from './pages/Account/Cart';
import Wishlist from './pages/Account/Wishlist';
import CreateAccount from './pages/Account/CreateAccount';
import Login from './pages/Account/Login';
import ForgotPassword from './pages/Account/ForgotPassword';
import AboutUs from './pages/AboutUs';
import WorldClassPayment from './pages/PaymentGateway';
import Checkout from './pages/Checkout';
import TrackOrder from './pages/TrackOrder';
import AIChatbot from "./components/AIChatbot";
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import ShoppingInfo from './pages/ShoppingInfo';
import ReturnRefund from './pages/ReturnRefund';
import FAQ from './pages/FAQ';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/account" element={<AccountProfile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/payment" element={<WorldClassPayment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shopping-info" element={<ShoppingInfo />} />
          <Route path="/return-and-refund" element={<ReturnRefund />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-condition" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <AIChatbot />
      <Footer />
    </div>
  );
}

export default App;