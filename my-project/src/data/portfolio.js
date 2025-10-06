import img1 from '../assets/hero.jpg';
import img2 from '../assets/image.jpg';
import img3 from '../assets/map.jpg';
import img4 from '../assets/farm.jpg';
import img5 from '../assets/cv.jpg';
import img6 from '../assets/track.png';

export const portfolioItems = [
  {
    slug: 'agro-tech-harvest',
    title: 'Agro-Tech Harvest',
    category: 'Harvest',
    cover: img1,
    images: [img1, img2, img3],
    excerpt: 'Improving harvest workflows with modern techniques.'
  },
  {
    slug: 'greenhouse-orchard',
    title: 'Greenhouse Orchard',
    category: 'Orchard',
    cover: img2,
    images: [img2, img4, img5],
    excerpt: 'Precision care and monitoring for orchard health.'
  },
  {
    slug: 'fresh-chain-logistics',
    title: 'Fresh Chain Logistics',
    category: 'Logistics',
    cover: img3,
    images: [img3, img6, img1],
    excerpt: 'Cold-chain and transport optimization for freshness.'
  },
  {
    slug: 'soil-health-lab',
    title: 'Soil Health Lab',
    category: 'Soil',
    cover: img4,
    images: [img4, img2, img6],
    excerpt: 'Data-driven soil testing and nutrient balancing.'
  },
  {
    slug: 'community-farm',
    title: 'Community Farm',
    category: 'Community',
    cover: img5,
    images: [img5, img1, img3],
    excerpt: 'People-first farming and education programs.'
  },
  {
    slug: 'track-and-trace',
    title: 'Track and Trace',
    category: 'Supply',
    cover: img6,
    images: [img6, img5, img4],
    excerpt: 'Inventory and provenance tracking from field to fork.'
  }
];
