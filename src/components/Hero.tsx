import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#e0c3fc] overflow-hidden">
      {/* Overlay diagonal effect */}
      <div className="absolute inset-0 z-0 clip-diagonal bg-white opacity-90"></div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 gap-12">
        {/* Left side — text */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
          Digital    <br className="hidden md:block" />
          infrastructure {" "}
          to grow your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
             business
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-left ">
          Web. SEO. AI. BMS. Everything you need to scale.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="px-6 py-3 bg-navy text-white rounded-md hover:bg-blue-700 transition">
              Start now
            </button>
          </div>
        </div>

        {/* Right side — placeholder illustration */}
        <div className="w-full max-w-md hidden lg:block">
          <div className="bg-white rounded-xl shadow-xl p-6">
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              Illustration Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
