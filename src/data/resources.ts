// Resource data for the development team hub
// Easy to maintain and extend - just add new categories or resources here

export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
}

// Available categories for resources
export const categories: Category[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'React, CSS, UI libraries and frontend tools',
    icon: 'Monitor'
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'APIs, databases, server technologies',
    icon: 'Server'
  },
  {
    id: 'design',
    name: 'Design',
    description: 'UI kits, icons, colors, and design tools',
    icon: 'Palette'
  },
  {
    id: 'tools',
    name: 'Dev Tools',
    description: 'Development utilities and productivity tools',
    icon: 'Wrench'
  },
  {
    id: 'learning',
    name: 'Learning',
    description: 'Documentation, tutorials, and educational resources',
    icon: 'BookOpen'
  },
  {
    id: 'apis',
    name: 'APIs',
    description: 'Free APIs and data sources for development',
    icon: 'Zap'
  }
];

// Starter resource data - organized by category
export const resources: Resource[] = [
  // Frontend Resources
  {
    id: 'react-icons',
    name: 'React Icons',
    description: 'Popular icon library with 10k+ icons from various icon packs',
    url: 'https://react-icons.github.io/react-icons/',
    category: 'frontend'
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    url: 'https://tailwindcss.com/',
    category: 'frontend'
  },
  {
    id: 'box-shadows',
    name: 'Beautiful Box Shadows',
    description: 'Collection of beautiful CSS box-shadow examples',
    url: 'https://getcssscan.com/css-box-shadow-examples',
    category: 'frontend'
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    description: 'Production-ready motion library for React animations',
    url: 'https://www.framer.com/motion/',
    category: 'frontend'
  },
  {
    id: 'headless-ui',
    name: 'Headless UI',
    description: 'Unstyled, accessible UI components for React and Vue',
    url: 'https://headlessui.com/',
    category: 'frontend'
  },
  {
    id: 'figma-free-ui',
    name: 'Figma Free UI Kits',
    description: 'Collection of free UI kits, wireframes, and design systems from Figma Community',
    url: 'https://www.figma.com/community/explore?tab=free',
    category: 'frontend'
  },

  // Backend Resources
  {
    id: 'express-js',
    name: 'Express.js',
    description: 'Fast, minimalist web framework for Node.js',
    url: 'https://expressjs.com/',
    category: 'backend'
  },
  {
    id: 'prisma',
    name: 'Prisma',
    description: 'Next-generation ORM for Node.js and TypeScript',
    url: 'https://www.prisma.io/',
    category: 'backend'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Open source Firebase alternative with Postgres database',
    url: 'https://supabase.com/',
    category: 'backend'
  },
  {
    id: 'fastify',
    name: 'Fastify',
    description: 'Fast and low overhead web framework for Node.js',
    url: 'https://www.fastify.io/',
    category: 'backend'
  },

  // Design Resources
  {
    id: 'ui-shadcn',
    name: 'shadcn/ui',
    description: 'Beautiful, accessible React components built with Radix UI',
    url: 'https://ui.shadcn.com/',
    category: 'design'
  },
  {
    id: 'lucide-icons',
    name: 'Lucide Icons',
    description: 'Beautiful & consistent icon toolkit made by the community',
    url: 'https://lucide.dev/',
    category: 'design'
  },
  {
    id: 'coolors',
    name: 'Coolors',
    description: 'Super fast color schemes generator for designers',
    url: 'https://coolors.co/',
    category: 'design'
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Collaborative interface design tool in the browser',
    url: 'https://www.figma.com/',
    category: 'design'
  },
  {
    id: 'unsplash',
    name: 'Unsplash',
    description: 'High-quality photos for free download and use',
    url: 'https://unsplash.com/',
    category: 'design'
  },

  // Development Tools
  {
    id: 'vscode',
    name: 'VS Code',
    description: 'Lightweight but powerful source code editor',
    url: 'https://code.visualstudio.com/',
    category: 'tools'
  },
  {
    id: 'postman',
    name: 'Postman',
    description: 'API platform for building and using APIs',
    url: 'https://www.postman.com/',
    category: 'tools'
  },
  {
    id: 'vite',
    name: 'Vite',
    description: 'Next generation frontend tooling for faster development',
    url: 'https://vitejs.dev/',
    category: 'tools'
  },
  {
    id: 'github-desktop',
    name: 'GitHub Desktop',
    description: 'Simple collaboration from your desktop',
    url: 'https://desktop.github.com/',
    category: 'tools'
  },

  // Learning Resources
  {
    id: 'mdn-docs',
    name: 'MDN Web Docs',
    description: 'Comprehensive documentation for web technologies',
    url: 'https://developer.mozilla.org/',
    category: 'learning'
  },
  {
    id: 'react-docs',
    name: 'React Documentation',
    description: 'Official React documentation and learning materials',
    url: 'https://react.dev/',
    category: 'learning'
  },
  {
    id: 'typescript-handbook',
    name: 'TypeScript Handbook',
    description: 'Complete guide to TypeScript language features',
    url: 'https://www.typescriptlang.org/docs/',
    category: 'learning'
  },
  {
    id: 'web-dev-google',
    name: 'web.dev',
    description: 'Google\'s guidance for building modern web experiences',
    url: 'https://web.dev/',
    category: 'learning'
  },

  // APIs
  {
    id: 'jsonplaceholder',
    name: 'JSONPlaceholder',
    description: 'Free fake API for testing and prototyping',
    url: 'https://jsonplaceholder.typicode.com/',
    category: 'apis'
  },
  {
    id: 'public-apis',
    name: 'Public APIs',
    description: 'Curated list of free APIs for development',
    url: 'https://github.com/public-apis/public-apis',
    category: 'apis'
  },
  {
    id: 'rest-countries',
    name: 'REST Countries',
    description: 'Get country information via RESTful API',
    url: 'https://restcountries.com/',
    category: 'apis'
  },
  {
    id: 'openweather',
    name: 'OpenWeather API',
    description: 'Weather data and forecasts API service',
    url: 'https://openweathermap.org/api',
    category: 'apis'
  }
];

// Helper function to get resources by category
export const getResourcesByCategory = (categoryId: string): Resource[] => {
  return resources.filter(resource => resource.category === categoryId);
};

// Helper function to get all categories with resource counts
export const getCategoriesWithCounts = () => {
  return categories.map(category => ({
    ...category,
    count: getResourcesByCategory(category.id).length
  }));
};