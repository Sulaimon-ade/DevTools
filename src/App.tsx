import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { ResourceGrid } from './components/ResourceGrid';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
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
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p className="text-sm">
            Built with ❤️ for the development team • 
            <span className="ml-1">Powered by React & Tailwind CSS</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;