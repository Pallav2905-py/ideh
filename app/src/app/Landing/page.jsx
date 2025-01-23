import React from "react";
import Link from "next/link";
import yash from '../assests/yash_front_img.jpg'

import "../globals.css";

function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="text-center space-y-6 px-6">
        <h1
          className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-fade-in-down"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to <span className="text-green-500">ScrapeGPT</span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Your ultimate AI-powered scraping solution to revolutionize your data
          needs. Unlock the power of automation with cutting-edge technology.
        </p>
        <Link
          href="/login"
          className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Launch App 🚀
        </Link>
      </section>

      {/* Developer Section */}
      <section className="mt-20 w-full px-5">
        <h2
          className="text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-fade-in-down"
          style={{ animationDelay: "0.8s" }}
        >
          Meet the Developers
        </h2>
        <div className="flex flex-wrap justify-center gap-16 animate-fade-in-up">
          {/* Developer 1 */}
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative group">
              <img
                alt="Pallav Vaniya"
                className="rounded-full w-40 h-40 object-cover mb-6 border-4 border-green-500 shadow-md transition-all duration-300 group-hover:shadow-xl"
                src="https://dummyimage.com/200x200"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-30 blur-lg group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-medium">Pallav Vaniya</h3>
            <p className="text-green-400">Project Lead</p>
            <p className="mt-4 text-gray-400 max-w-xs mx-auto">
              Passionate leader driving the vision of ScrapeGPT with innovative
              ideas and a futuristic approach.
            </p>
          </div>
          {/* Developer 2 */}
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative group">
              <img
                alt="Yash Yadav"
                className="rounded-full w-40 h-40 object-cover mb-6 border-4 border-green-500 shadow-md transition-all duration-300 group-hover:shadow-xl"
                src="/src/app/assests/yash_front_img.jpg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-30 blur-lg group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-medium">Yash Yadav</h3>
            <p className="text-green-400">Sr. Full Stack Developer</p>
            <p className="mt-4 text-gray-400 max-w-xs mx-auto">
              Expert developer ensuring ScrapeGPT is robust, efficient, and
              ready for the future of data automation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
