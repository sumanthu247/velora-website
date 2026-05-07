export default function ClothingStoreWebsite() {
  const products = [
    {
      name: 'Urban Oversized Hoodie',
      price: '$59',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Classic Denim Jacket',
      price: '$79',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Minimal White Tee',
      price: '$29',
      image:
        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Streetwear Cargo Pants',
      price: '$69',
      image:
        'https://images.unsplash.com/photo-1506629905607-d9c297d4d2f9?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 border-b sticky top-0 bg-white/90 backdrop-blur z-50">
        <h1 className="text-2xl font-bold tracking-widest">VELORA</h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-gray-500 transition">Home</a>
          <a href="#collection" className="hover:text-gray-500 transition">Collection</a>
          <a href="#about" className="hover:text-gray-500 transition">About</a>
          <a href="#contact" className="hover:text-gray-500 transition">Contact</a>
        </nav>
        <button className="bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition">
          Shop Now
        </button>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop"
          alt="Fashion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-white px-6 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Redefine Your Style
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover premium fashion designed for confidence, comfort, and modern living.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="collection" className="px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold mb-4">Featured Collection</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated essentials for every wardrobe — crafted with quality fabrics and timeless style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700 font-medium">{product.price}</p>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="mx-8 rounded-[2rem] bg-black text-white py-20 px-8 text-center">
        <h3 className="text-4xl font-bold mb-4">Summer Sale Up To 50% Off</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Upgrade your wardrobe with exclusive discounts on our latest arrivals.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
          Shop Deals
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
          alt="About"
          className="rounded-3xl shadow-lg h-[500px] object-cover w-full"
        />

        <div>
          <h3 className="text-4xl font-bold mb-6">Fashion With Purpose</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At VELORA, we combine modern aesthetics with premium craftsmanship to create timeless fashion pieces. Every collection is designed to inspire confidence and individuality.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Sustainability and comfort remain at the heart of our designs, ensuring you look good while feeling your best.
          </p>
          <button className="bg-black text-white px-7 py-3 rounded-full hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 py-20 px-8 text-center">
        <h3 className="text-4xl font-bold mb-4">Join Our Newsletter</h3>
        <p className="text-gray-600 mb-8">
          Get updates on new arrivals, fashion tips, and exclusive offers.
        </p>

        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-full border outline-none"
          />
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-black text-gray-300 px-8 py-14 mt-10"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white text-2xl font-bold mb-4">VELORA</h4>
            <p>
              Premium clothing brand delivering modern streetwear and timeless essentials.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Shop</h5>
            <ul className="space-y-2">
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li>support@velora.com</li>
              <li>+1 234 567 890</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
          © 2026 VELORA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
