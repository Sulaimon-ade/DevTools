import React from 'react';
import { Category } from '../data/resources';
import * as Icons from 'lucide-react';
import { ChevronDown } from 'lucide-react';

interface CategoryNavProps {
  categories: (Category & { count: number })[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

/**
 * Navigation component for switching between resource categories
 * Features responsive design with dropdown for mobile and tabs for desktop
 */
export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  const activeCategory_obj = categories.find(cat => cat.id === activeCategory);
  const ActiveIcon = Icons[activeCategory_obj?.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div className="w-full mb-8">
      {/* Desktop Navigation - Horizontal tabs */}
      <div className="hidden md:flex bg-white rounded-xl p-2 shadow-sm border border-gray-100">
        {categories.map((category) => {
          const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }
              `}
            >
              <IconComponent size={18} />
              <span>{category.name}</span>
              <span className={`
                text-xs px-2 py-1 rounded-full
                ${isActive ? 'bg-blue-500 text-blue-100' : 'bg-gray-200 text-gray-600'}
              `}>
                {category.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Navigation - Dropdown */}
      <div className="md:hidden">
        <div className="relative">
          <select
            value={activeCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="
              w-full appearance-none bg-white border border-gray-200 rounded-xl 
              pl-12 pr-12 py-4 text-gray-900 font-medium shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition-all duration-200
            "
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
          
          {/* Active category icon indicator */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            {ActiveIcon && <ActiveIcon size={20} className="text-blue-600" />}
          </div>
          
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <ChevronDown size={20} className="text-gray-400" />
          </div>
        </div>
        
        {/* Selected category info below dropdown */}
        <div className="mt-3 px-4 py-2 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm text-blue-700 font-medium">
            {activeCategory_obj?.name}
          </p>
          <p className="text-xs text-blue-600">
            {activeCategory_obj?.description}
          </p>
        </div>
      </div>
    </div>
  );
};