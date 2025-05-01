
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
    title: 'Ecommerce',
    description: 'A comprehensive financial dashboard with dark mode and responsive layouts.',
    type: 'figma',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=350',
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Customizable widgets and modules',
      'Dark and light theme support',
      'Accessibility optimized components',
      'Complete design system and component library',
    ],
    detailedDescription: "This financial dashboard was designed in Figma to provide users with a comprehensive overview of their financial data. The project included creating a complete design system with reusable components, implementing both light and dark themes, and ensuring the interface scaled properly across various device sizes. I paid special attention to information hierarchy and data visualization to make complex financial data easily understandable at a glance."
  },
  {
    id: '2',
    title: 'E-commerce Mobile App',
    description: 'A modern e-commerce application with smooth animations and micro-interactions.',
    type: 'figma',
    thumbnail: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=600&h=350',
    images: [
      'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1200&h=800',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800',
    ],
    keyFeatures: [
      'Custom product filters and sorting',
      'Streamlined checkout process',
      'Wishlist and favorites functionality',
      'Integration with product review system',
    ],
    detailedDescription: "This e-commerce mobile app was designed to provide users with a seamless shopping experience. The design focuses on making product discovery intuitive while streamlining the path to purchase. I created custom UI components that maintain brand consistency while enhancing usability, implemented an efficient navigation structure, and designed micro-interactions that provide feedback and delight users throughout their journey."
  },
  {
    id: '3',
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
    id: '4',
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
    id: '5',
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
  {
    id: '6',
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
];
