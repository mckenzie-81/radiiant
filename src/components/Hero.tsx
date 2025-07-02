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
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto pl-12 py-24 gap-12">
        {/* Text area */}
        <div className="pt-10 font-grotesk lg:text-left max-w-xl">
          <h1 className="text-5xl md:text-8xl font-bold text-navy leading-tight text-left">
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
          <div className="pt-24 ">
            <form className="hidden sm:flex px-5 flex items-center max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-full  shadow-sm">
              {/* hidden sm:flex items-center max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-full shadow-sm */}
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-5 py-3 bg-gray-50 text-navy placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full px-4 py-1 bg-navy text-white font-medium hover:bg-blue-700 transition flex items-center gap-1 "
              >
                Start now <span className="text-lg">→</span>
              </button>
            </form>
          </div>

          {/* Mobile layout (stacked) */}
          <form className="flex flex-col sm:hidden gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-5 py-3 rounded-full border border-gray-300 text-navy placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-navy text-white font-medium hover:bg-blue-700 transition flex items-center justify-center gap-1"
            >
              Start now <span className="text-lg">→</span>
            </button>
          </form>
        </div>

        {/* Hero illustration */}
        <div className="max-w-2xl hidden lg:block">
          <img
            src="/topsection1.png"
            alt="Hero Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
