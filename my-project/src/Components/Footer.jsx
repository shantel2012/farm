
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-white mb-4">FarmCo</h3>
          <p>Bringing you fresh, organic, and healthy farm products.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Newsletter</h4>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 rounded-md text-gray-900 mb-3"
          />
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">
        © 2025 FarmCo. All rights reserved.
      </p>
    </footer>
  );
}

