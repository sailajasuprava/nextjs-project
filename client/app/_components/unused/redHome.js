import React from "react";
import Image from "next/image";

const BakeJoyLanding = () => {
  return (
    <div className="min-h-screen bg-[#FFF5EE] text-[#1D4D4F]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-6">
        <div className="text-2xl font-bold text-[#E67E76] font-fredoka">
          BAKEJOY
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-[#E67E76]">
            ABOUT
          </a>
          <a href="#" className="hover:text-[#E67E76]">
            PRODUCTS
          </a>
          <a href="#" className="hover:text-[#E67E76]">
            BLOG
          </a>
          <a href="#" className="hover:text-[#E67E76]">
            CONTACT
          </a>
        </div>
        <button className="border-2 border-[#E67E76] text-[#E67E76] px-6 py-1 rounded-full hover:bg-[#E67E76] hover:text-white transition">
          REGISTER
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-12 pt-10 pb-32 flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          Delight in <br />
          <span className="text-[#E67E76]">every bites!</span>
        </h1>
        <p className="max-w-md text-gray-600 mb-8">
          Experience the joy of perfectly baked cakes, made with love and
          crafted to bring a smile to every celebration.
        </p>
        <button className="bg-[#E67E76] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#d46b64] transition">
          SHOP NOW
        </button>

        {/* Floating Croissant Image */}
        <div className="mt-8 relative w-64 h-64 md:w-96 md:h-64 rounded-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1621319200421-a185b1c5a9b9?q=80&w=600&auto=format&fit=crop"
            alt="Choco Croissant"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-black/50 px-2 py-1 rounded">
            — Choco Croissant ( $0.6 )
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="relative -mt-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
            fill="#FFD1C1"
          />
        </svg>
      </div>

      {/* Signature Section */}
      <section className="bg-[#FFD1C1] pb-20 px-12">
        <h2 className="text-4xl font-bold text-[#E67E76] text-center mb-12">
          Our Signature
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Image Frame Container - matching reference UI */}
              <div className="relative group w-64 h-64 mb-4">
                {/* White Frame */}
                <div className="absolute inset-0 bg-white shadow-lg p-2 rounded-sm" />

                {/* Corner Accents (Matching image_2.png style) */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-l-4 border-t-4 border-white" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-r-4 border-t-4 border-white" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-4 border-b-4 border-white" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-4 border-b-4 border-white" />

                {/* Inner Image Area */}
                <div className="relative w-full h-full bg-[#f1f3f5] rounded-sm overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between items-end mt-4 px-2">
                <div className="text-left">
                  <h3 className="font-bold text-xl leading-tight max-w-[150px]">
                    {item.name}
                  </h3>
                  <p className="text-[#E67E76] font-bold text-2xl mt-1">
                    ${item.price}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <button className="bg-[#1D4D4F] p-2 rounded-lg text-white mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                  <a href="#" className="text-xs underline font-semibold">
                    More Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Updated products data with Unsplash URLs
const products = [
  {
    name: "Descendant Choco Chips",
    price: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Classic Vanilla Chiffon Cake",
    price: 25,
    imageUrl:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Choco Mousse Extravaganza",
    price: 35,
    imageUrl:
      "https://images.unsplash.com/photo-1562447496-5b430e79fb4b?q=80&w=400&auto=format&fit=crop",
  },
];

export default BakeJoyLanding;
