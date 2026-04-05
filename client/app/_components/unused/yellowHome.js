import React from "react";
import Image from "next/image";

const BakeJoyLanding = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E1] text-[#3F3F46]">
      {/* Hero Section */}
      <section className="relative px-12 pt-10 pb-10 flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          Delight in <br />
          <span className="text-[#FACC15]">every bites!</span>
        </h1>

        <p className="max-w-md text-gray-600 mb-8">
          Experience the joy of perfectly baked cakes, made with love and
          crafted to bring a smile to every celebration.
        </p>

        <button className="bg-[#FACC15] text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#EAB308] transition">
          SHOP NOW
        </button>
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
            fill="#FEF08A"
          />
        </svg>
      </div>

      {/* Signature Section */}
      <section className="bg-[#FEF08A] pb-20 px-12">
        <h2 className="text-4xl font-bold text-yellow-900 text-center mb-12">
          Our Signature
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center backdrop-blur rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              {/* Stamp Styled Image Container */}
              <div
                className="bg-white p-8 shadow-lg mb-4 relative rounded-xl"
                style={{
                  clipPath:
                    "polygon(0% 5%, 5% 5%, 5% 0%, 10% 0%, 10% 5%, 90% 5%, 90% 0%, 95% 0%, 95% 5%, 100% 5%, 100% 10%, 95% 10%, 95% 90%, 100% 90%, 100% 95%, 95% 95%, 95% 100%, 90% 100%, 90% 95%, 10% 95%, 10% 100%, 5% 100%, 5% 95%, 0% 95%, 0% 90%, 5% 90%, 5% 10%, 0% 10%)",
                }}
              >
                <div className="w-64 h-64 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between items-end mt-4">
                <div className="text-left">
                  <h3 className="font-bold text-xl leading-tight max-w-[150px]">
                    {item.name}
                  </h3>
                  <p className="text-[#FACC15] font-bold text-2xl mt-1">
                    ${item.price}
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <button className="bg-[#92400E] p-2 rounded-lg text-white mb-2 hover:bg-[#78350f] transition">
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

const products = [
  {
    name: "Descendant Choco Chips",
    price: 15,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
  },
  {
    name: "Classic Vanilla Chiffon Cake",
    price: 25,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    name: "Choco Mousse Extravaganza",
    price: 35,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500",
  },
];

export default BakeJoyLanding;
