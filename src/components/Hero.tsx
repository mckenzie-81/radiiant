import React from "react";
import AnimatedGradient from "./AnimatedGradient";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Animated background canvas */}
      
      <AnimatedGradient />

      {/* Diagonal overlay to separate layout visually */}
      <div className="absolute inset-0 bg-white clip-diagonal z-0 bg-blend-multiply" />
      {/* Content container */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 gap-12">
        {/* Text area */}
        <div className="font-grotesk text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight text-left">
            Digital <br className="hidden md:block" />
            infrastructure to grow your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              business
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-left">
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

        {/* Hero illustration */}
        <div className="w-full max-w-md hidden lg:block">
          <img
            src="/herovect.png"
            alt="Hero Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
