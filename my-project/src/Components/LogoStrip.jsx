import React from 'react';
import './LogoStrip.css';
// Auto-load any logos placed in src/assets/logos/
const logoModules = import.meta.glob('../assets/logos/*.{png,svg,webp,jpg,jpeg}', { eager: true, as: 'url' });
const logoUrls = Object.values(logoModules);

// Try to order specifically by the five provided logos if present
function preferredOrder(urls) {
  const lower = urls.map(u => ({ url: u, key: u.toLowerCase() }));
  const patterns = [
    'tractor',
    'eco', // eco-product
    'food',
    'farm-fresh',
    'farm',
  ];
  const used = new Set();
  const ordered = [];
  for (const p of patterns) {
    const found = lower.find(x => !used.has(x.url) && x.key.includes(p));
    if (found) {
      ordered.push(found.url);
      used.add(found.url);
    }
  }
  // append the rest to ensure we still show something even if names differ
  for (const x of lower) {
    if (!used.has(x.url)) ordered.push(x.url);
  }
  return ordered;
}

const LogoStrip = () => {
  // duplicate sequence for seamless scroll
  const ordered = preferredOrder(logoUrls);
  const sequence = [...ordered, ...ordered];
  return (
    <section className="logo-strip-section">
      <div className="container py-5">
        <div className="logo-strip-outer">
          <div className="logo-strip-inner">
            {sequence.map((src, idx) => (
              <div key={idx} className="logo-item">
                <img src={src} alt="Partner logo" className="img-fluid h-10 w-auto object-contain opacity-80 grayscale hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
