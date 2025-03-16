import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome to{" "}
            <span className="text-blue-500">Sanity Blog with Next.js</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
