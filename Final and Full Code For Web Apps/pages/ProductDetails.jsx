// src/pages/ProductDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Minus, Plus, Star, Send, ZoomIn, Check, ShoppingCart } from 'lucide-react';

// FULL PRODUCT DATA with description, gallery, colors, sizes, stock
const products = [
  { id: 1, name: "Xpeed Projector", price: 499.00, oldPrice: 529.00, rating: 4.5, stock: 8, img: "projector1.png", gallery: ["projector1.png", "projector2.png", "projector3.png"], category: "Electronics", description: "Ultra HD 4K projector with 3000 lumens brightness, WiFi & Bluetooth connectivity, perfect for home theater and presentations.", colors: ["Black", "White"], sizes: [] },
  { id: 2, name: "Apple iPhone 7s", price: 660.00, oldPrice: 690.00, rating: 5, stock: 23, img: "iphone7s.png", gallery: ["iphone7s.png", "iphone7s-back.png", "iphone7s-side.png"], category: "Smartphones", description: "Refurbished iPhone 7s in excellent condition. 128GB storage, fast A10 processor, excellent camera.", colors: ["Black", "Silver", "Gold", "Rose Gold"], sizes: [] },
  { id: 3, name: "Apple iPhone 6s", price: 299.00, oldPrice: null, rating: 4, stock: 15, img: "iphone6s.png", gallery: ["iphone6s.png"], category: "Smartphones", description: "Classic iPhone 6s – reliable, fast, and still powerful in 2025.", colors: ["Space Gray", "Silver"], sizes: [] },
  { id: 4, name: "Wireless Microphone", price: 70.00, oldPrice: null, rating: 4.8, stock: 42, img: "mic.webp", gallery: ["mic.webp"], category: "Audio", description: "Professional wireless lavalier microphone with noise cancellation. Perfect for YouTube, podcasts, and interviews.", colors: ["Black"], sizes: [] },
  { id: 5, name: "CC Camera", price: 210.00, oldPrice: 240.00, rating: 4.2, stock: 5, img: "camera.png", gallery: ["camera.png"], category: "Security", description: "1080p HD security camera with night vision and motion detection.", colors: ["White"], sizes: [] },
  { id: 6, name: "Moving Camera", price: 230.00, oldPrice: null, rating: 4.6, stock: 19, img: "moving-cam.jpg", gallery: ["moving-cam.jpg"], category: "Security", description: "360° rotating camera with AI tracking and two-way audio.", colors: ["Black"], sizes: [] },
  { id: 7, name: "Core i7 Laptop", price: 125.00, oldPrice: null, rating: 5, stock: 3, img: "laptop.png", gallery: ["laptop.png", "laptop-back.png"], category: "Laptops", description: "Powerful Core i7 laptop with 16GB RAM, 512GB SSD, and GTX graphics. Ideal for gaming & editing.", colors: ["Silver", "Space Gray"], sizes: ["14\"", "15.6\""] },
  { id: 8, name: "Unlocked Mobile Phone", price: 125.00, oldPrice: null, rating: 4.3, stock: 35, img: "phone.png", gallery: ["phone.png"], category: "Smartphones", description: "Brand new unlocked Android phone with 64GB storage and dual SIM.", colors: ["Blue", "Black"], sizes: [] },
  { id: 9, name: "Stereo Headset", price: 16.00, oldPrice: null, rating: 4.7, stock: 120, img: "headset.png", gallery: ["headset.png"], category: "Audio", description: "Comfortable over-ear headset with deep bass and clear mic.", colors: ["Black", "Red"], sizes: [] },
  { id: 10, name: "Camera Drone", price: 540.00, oldPrice: 720.00, rating: 4.9, stock: 7, img: "drone1.png", gallery: ["drone1.png", "drone2.png"], category: "Drones", description: "4K camera drone with 30min flight time, GPS, and obstacle avoidance.", colors: ["White"], sizes: [] },
  { id: 11, name: "Holy Stone Drone", price: 540.00, oldPrice: 720.00, rating: 5, stock: 12, img: "drone2.jpg", gallery: ["drone2.jpg"], category: "Drones", description: "Professional drone with foldable design and intelligent flight modes.", colors: ["Gray"], sizes: [] },
  { id: 12, name: "LED Projector", price: 20.00, oldPrice: null, rating: 4.4, stock: 89, img: "led-projector.png", gallery: ["led-projector.png"], category: "Electronics", description: "Mini portable LED projector – perfect for movies on the go.", colors: ["White"], sizes: [] },
];

const dummyReviews = [
  { id: 1, name: "John Doe", rating: 5, date: "2025-04-10", text: "Excellent product! Works perfectly and delivery was fast." },
  { id: 2, name: "Sarah K.", rating: 4, date: "2025-03-28", text: "Good quality, but a bit expensive. Still worth it!" },
  { id: 3, name: "Mike Chen", rating: 5, date: "2025-03-15", text: "Best purchase this year! Highly recommend." },
];

const dummyComments = [
  { id: 1, name: "Alex", date: "2 hours ago", text: "Is this available in black color?" },
  { id: 2, name: "Lisa", date: "1 day ago", text: "Does it come with warranty?" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id)) || products[0];

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [activeTab, setActiveTab] = useState('reviews');
  const [zoom, setZoom] = useState(false);
  const [mainImage, setMainImage] = useState(product.gallery[0] || product.img);
  const [reviewRating, setReviewRating] = useState(0);
  const [toast, setToast] = useState(null);

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const recommendedProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = () => {
    if (product.stock === 0) return;
    showToast(`Added ${quantity} × ${product.name} to cart!`, 'success');
  };

  const renderStars = (rating, interactive = false, onClick = null) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 transition ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} ${interactive ? 'cursor-pointer hover:fill-yellow-400 hover:text-yellow-400' : ''}`}
          onClick={() => interactive && onClick?.(star)}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in-right">
          <div className={`flex items-center gap-3 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl`}>
            <Check className="w-6 h-6" />
            <div>
              <p className="font-bold">{toast.message}</p>
              <p className="text-sm opacity-90">View cart →</p>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><span className="mx-2">›</span></li>
              <li><Link to="/" className="hover:text-blue-600">{product.category}</Link></li>
              <li><span className="mx-2">›</span></li>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={`/images/Categories/${mainImage}`}
                  alt={product.name}
                  className={`w-full h-full object-contain p-16 transition-all duration-500 ${zoom ? 'scale-200' : 'scale-100'}`}
                />
                <button onClick={() => setZoom(!zoom)} className="absolute bottom-6 right-6 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white">
                  <ZoomIn className="w-6 h-6" />
                </button>
              </div>
              {product.gallery && product.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.gallery.map((img, i) => (
                    <button key={i} onClick={() => setMainImage(img)} className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${mainImage === img ? 'border-blue-600 shadow-md' : 'border-gray-200 hover:border-gray-400'}`}>
                      <img src={`/images/Categories/${img}`} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-sm text-gray-600">Category: <span className="text-blue-600 font-medium">{product.category}</span></p>
              </div>

              {product.stock <= 10 && (
                <div className={`text-sm font-bold ${product.stock <= 5 ? 'text-red-600' : 'text-orange-600'}`}>
                  Only {product.stock} left in stock — order soon!
                </div>
              )}

              <p className="text-gray-700 leading-relaxed text-base">{product.description}</p>

              <div className="text-4xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
                {product.oldPrice && <span className="text-lg text-gray-400 line-through ml-4">${product.oldPrice.toFixed(2)}</span>}
              </div>

              {/* Color & Size */}
              {product.colors.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Color:</p>
                  <div className="flex gap-3">
                    {product.colors.map(color => (
                      <button key={color} onClick={() => setSelectedColor(color)} className={`px-5 py-2 rounded-lg border-2 text-sm font-medium transition ${selectedColor === color ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300'}`}>
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.sizes.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Size:</p>
                  <div className="flex gap-3">
                    {product.sizes.map(size => (
                      <button key={size} onClick={() => setSelectedSize(size)} className={`w-12 h-12 rounded-lg border-2 text-sm font-bold transition ${selectedSize === size ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'}`}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg h-14">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-4 hover:bg-gray-100"><Minus className="w-5 h-5" /></button>
                  <span className="w-16 text-center font-bold text-lg">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} disabled={quantity >= product.stock} className="p-4 hover:bg-gray-100 disabled:opacity-50"><Plus className="w-5 h-5" /></button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 h-14 font-bold text-lg rounded-lg transition shadow-md flex items-center justify-center gap-2 ${
                    product.stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500 text-black'
                  }`}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 border-t">
                <button onClick={() => setIsWishlisted(!isWishlisted)} className="flex items-center gap-3 hover:text-red-600">
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-600 text-red-600' : ''}`} />
                  <span className="text-sm font-medium">{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
                </button>
                <button className="flex items-center gap-3 hover:text-blue-600">
                  <Share2 className="w-6 h-6" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Reviews + Write + Comments */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex gap-8 border-b mb-8">
              <button onClick={() => setActiveTab('reviews')} className={`pb-3 text-lg font-semibold ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>Reviews ({dummyReviews.length})</button>
              <button onClick={() => setActiveTab('write')} className={`pb-3 text-lg font-semibold ${activeTab === 'write' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>Write a Review</button>
              <button onClick={() => setActiveTab('comments')} className={`pb-3 text-lg font-semibold ${activeTab === 'comments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>Comments ({dummyComments.length})</button>
            </div>

            {/* Reviews List */}
            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {dummyReviews.map(review => (
                  <div key={review.id} className="border-b pb-8 last:border-0">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">{review.name[0]}</div>
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Write a Review */}
            {activeTab === 'write' && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold mb-6">Write Your Review</h3>
                <div className="space-y-6">
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>{renderStars(reviewRating, true, setReviewRating)}</div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Name</label><input type="text" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Name" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Review Title</label><input type="text" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Great product!" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label><textarea rows={5} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Share your experience..."></textarea></div>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium">Submit Review</button>
                </div>
              </div>
            )}

            {/* Comments */}
            {activeTab === 'comments' && (
              <div className="space-y-6">
                {dummyComments.map(c => (
                  <div key={c.id} className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{c.name}</h4>
                        <span className="text-xs text-gray-500">{c.date}</span>
                      </div>
                      <p className="text-gray-700 mt-1">{c.text}</p>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 mt-8">
                  <input type="text" placeholder="Ask a question..." className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500" />
                  <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"><Send className="w-5 h-5" /></button>
                </div>
              </div>
            )}
          </div>

          {/* Recommended for You */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Recommended for You</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recommendedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="block group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                    <img src={`/images/Categories/${p.img}`} alt={p.name} className="w-full h-48 object-contain p-6 group-hover:scale-105 transition" />
                    <div className="p-4">
                      <h3 className="font-medium text-sm line-clamp-2 mb-2">{p.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">${p.price.toFixed(2)}</span>
                        {renderStars(Math.round(p.rating))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map(p => (
                  <Link key={p.id} to={`/product/${p.id}`} className="block group">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                      <img src={`/images/Categories/${p.img}`} alt={p.name} className="w-full h-48 object-contain p-6 group-hover:scale-105 transition" />
                      <div className="p-4">
                        <h3 className="font-medium text-sm line-clamp-2 mb-2">{p.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-blue-600">${p.price.toFixed(2)}</span>
                          {renderStars(Math.round(p.rating))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}