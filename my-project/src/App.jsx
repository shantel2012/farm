import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import ServiceDetail from "./Pages/ServiceDetail";
import Blog from "./Pages/Blog";
import Product from "./Pages/Product";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetail from "./Pages/PortfolioDetail";
import Team from "./Pages/Team";
import TeamDetail from "./Pages/TeamDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
