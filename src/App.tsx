import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { ResourceGrid } from './components/ResourceGrid';
import { SocialLinks } from './components/SocialLinks';
import { ThemeProvider } from './components/contexts/ThemeContext';
import { categories, getResourcesByCategory, getCategoriesWithCounts } from './data/resources';

/**
 * Main App Component
 * Manages the overall state and layout of the resource hub
 */
function App() {
  // State for currently selected category (default to first category)
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || 'frontend');

  // Get categories with resource counts for navigation
  const categoriesWithCounts = getCategoriesWithCounts();
  
  // Get resources for the currently active category
  const currentResources = getResourcesByCategory(activeCategory);
  
  // Get current category info for display
  const currentCategory = categories.find(cat => cat.id === activeCategory);

  /**
   * Handle category change from navigation
   */
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
        <div className="container mx-auto px-4 pt-12 md:pt-8 pb-8 max-w-7xl">
          {/* Application Header */}
          <Header />

          {/* Category Navigation */}
          <CategoryNav 
            categories={categoriesWithCounts}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Resource Display Area */}
          <main className="transition-all duration-300">
            <ResourceGrid 
              resources={currentResources}
              categoryName={currentCategory?.name || 'Unknown'}
            />
          </main>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <div className="flex flex-col items-center md:items-start gap-3">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Connect with me</h3>
                <SocialLinks 
                  instagramUrl="#" 
                  githubUrl="#" 
                  linkedinUrl="#" 
                />
              </div>

              {/* Footer Text */}
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Built with ❤️ for the development team
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Powered by React & Tailwind CSS
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;