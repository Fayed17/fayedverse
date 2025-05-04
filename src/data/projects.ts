
export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'figma' | 'framer' | 'webflow';
  thumbnail: string;
  images: string[];
  keyFeatures: string[];
  detailedDescription: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'ShopVibe ',
    description: 'A sleek and intuitive e-commerce interface for tech gadget lovers.',
    type: 'figma',
    thumbnail: '/images/thumbnail/e-commerce-tech.png',
    images: [
      '/images/thumbnail/e-commerce-tech.png',
      '/images/thumbnail/wishlist1.png',
    ],
    keyFeatures: [
      'Customizable widgets and modules',
      'Dark and light theme support',
      'Accessibility optimized components',
      'Complete design system and component library',
    ],
    detailedDescription: "This Figma project is a design for a modern and visually-driven e-commerce website, likely focused on electronics and gadgets. It features a clean layout with a prominent hero section showcasing promotions, followed by sections for flash sales, category browsing, best-selling products, and new arrivals. The design utilizes high-quality product imagery and a vibrant accent color (red) to highlight key elements and calls to action. The overall impression is a user-friendly interface designed to facilitate easy navigation and product discovery."
  },
  {
    id: '2',
    title: 'ScrumGo',
    description: 'A focused landing page optimized for scrum certification conversions.',
    type: 'figma',
    thumbnail: '/images/thumbnail/scrum-certification-landingpage.png',
    images: [
      '/images/thumbnail/scrum-certification-landingpage.png',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Customizable widgets and modules',
      'Dark and light theme support',
      'Accessibility optimized components',
      'Complete design system and component library',
    ],
    detailedDescription: "This project is a modern, clean, and conversion-optimized landing page design for a Scrum certification and training service. Built with Figma, the design focuses on clarity, user flow, and compelling calls-to-action to help boost engagement and course sign-ups."
  },
  {
    id: '3',
    title: 'NestForm',
    description: 'Elegant interior design website with a focus on space and style.',
    type: 'figma',
    thumbnail: '/images/thumbnail/cemex-interior-design-landingpage.png',
    images: [
      '/images/thumbnail/cemex-interior-design-landingpage.png',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Customizable widgets and modules',
      'Dark and light theme support',
      'Accessibility optimized components',
      'Complete design system and component library',
    ],
    detailedDescription: "Cemex is a modern and elegant landing page design concept tailored for an interior design company. The goal was to blend aesthetic minimalism with functional UX, ensuring visitors are both inspired and driven to start a project journey."
  },
  {
    id: '4',
    title: 'StayEase',
    description: 'A seamless hotel booking app designed for comfort and convenience.',
    type: 'figma',
    thumbnail: '/images/thumbnail/luxury-stays.png',
    images: [
      '/images/thumbnail/luxury-stays.png',
      '/images/thumbnail/onboarding (1).png',
    ],
    keyFeatures: [
      'Customizable widgets and modules',
      'Dark and light theme support',
      'Accessibility optimized components',
      'Complete design system and component library',
    ],
    detailedDescription: "Luxury Stays is a premium mobile app UI concept designed for booking high-end vacation rentals and apartments. The clean, minimal interface offers users a frictionless experience to explore curated properties, view rich visuals, and make bookings with just a few taps.Key features include location-based search, intuitive filter options, detailed listings, and a streamlined booking process. The app uses warm gradients, large imagery, and simple iconography to deliver a feeling of comfort and exclusivity, making it ideal for luxury travelers."
  
  },
  {
    id: '5',
    title: 'ZestyDrop',
    description: ' A fresh, fast, and flavorful UI for modern food delivery apps.',
    type: 'figma',
    thumbnail: '/images/thumbnail/foodie.png',
    images: [
      '/images/thumbnail/foodie.png',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Customizable widgets and modules',
      'Dark and light theme support',
      'Accessibility optimized components',
      'Complete design system and component library',
    ],
    detailedDescription: "Foodie is a modern and intuitive food delivery web UI concept designed to simplify the way users discover, order, and enjoy food from local restaurants. This responsive landing page is part of a complete food delivery platform idea focused on convenience, speed, and user experience."
  },
  {
    id: '6',
    title: 'Securely',
    description: ' A clean, professional SaaS dashboard for digital security solutions.',
    type: 'figma',
    thumbnail: '/images/thumbnail/avocado.png',
    images: [
      '/images/thumbnail/avocado.png',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Custom product filters and sorting',
      'Streamlined checkout process',
      'Wishlist and favorites functionality',
      'Integration with product review system',
    ],
    detailedDescription: "Avocado is a sleek and futuristic UI design concept for a data security platform focused on encryption, compliance, and performance analytics. This dark-themed design emphasizes clarity, trust, and technology through glowing highlights, bold typography, and structured grid systems."
  },
  {
    id: '7',
    title: 'Interactive Prototype',
    description: 'A high-fidelity interactive prototype for a health and fitness application.',
    type: 'framer',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=350',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Advanced animation sequences',
      'Gesture-based interactions',
      'State management for realistic prototyping',
      'Component variants for different states',
    ],
    detailedDescription: "This Framer prototype brings to life a health and fitness application concept with realistic interactions and animations. Using Framer's advanced prototyping capabilities, I created a fully interactive experience that demonstrates how users would navigate through the app, interact with various features, and experience micro-interactions and transitions. This prototype was instrumental in user testing, allowing stakeholders to experience the product before development began."
  },
  {
    id: '8',
    title: 'Social Media App',
    description: 'A feature-rich social media application with advanced interaction design.',
    type: 'framer',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=350',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=800',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Custom scroll animations',
      'Interactive feed with real-time updates',
      'Multi-stage interactive onboarding',
      'Gesture-based navigation system',
    ],
    detailedDescription: "This social media app prototype created in Framer showcases advanced interaction design principles and animation techniques. The prototype demonstrates complex user flows including content discovery, profile interactions, and multi-modal content creation. I designed a comprehensive animation system that makes transitions between screens feel natural while providing clear feedback for user actions, resulting in an engaging and intuitive experience."
  },
  {
    id: '9',
    title: 'Travel Website',
    description: 'A responsive travel website with booking functionality and immersive experiences.',
    type: 'webflow',
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=350',
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Custom booking system integration',
      'Dynamic content management',
      'Parallax scrolling effects',
      'Performance-optimized animations',
    ],
    detailedDescription: "This travel website was built in Webflow to showcase destinations and provide a seamless booking experience. The design emphasizes immersive imagery and intuitive navigation to inspire travelers while making the planning process simple. I implemented custom animations that enhance the storytelling aspect of each destination, built a complex filtering system for trip discovery, and optimized the site for performance across all devices."
  },
  {
    id: '10',
    title: 'Product Landing Page',
    description: 'A conversion-focused landing page for a new tech product launch.',
    type: 'webflow',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=350',
    images: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Smooth scroll animations',
      'Interactive product showcases',
      'A/B testing ready components',
      'Lead capture optimization',
    ],
    detailedDescription: "This Webflow landing page was designed to maximize conversions for a new tech product launch. The page guides visitors through a carefully crafted narrative that highlights product benefits and features through interactive elements and engaging animations. I implemented conversion-optimized components including sticky CTAs, social proof sections, and feature comparison tables, all while maintaining fast load times and mobile responsiveness."
  },
  
];
