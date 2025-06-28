import React from 'react';
import { Category } from '../data/resources';
import * as Icons from 'lucide-react';

interface CategoryNavProps {
  categories: (Category & { count: number })[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

/**
 * Navigation component for switching between resource categories
 * Features responsive design and visual feedback for active states
 */
export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
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

      {/* Mobile Navigation - Dropdown style */}
      <div className="md:hidden">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  w-full flex items-center justify-between p-4 text-left transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-blue-50 border-b border-gray-100 last:border-b-0'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <IconComponent size={20} />
                  <div>
                    <div className="font-medium">{category.name}</div>
                    <div className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                      {category.description}
                    </div>
                  </div>
                </div>
                <span className={`
                  text-xs px-2 py-1 rounded-full font-medium
                  ${isActive ? 'bg-blue-500 text-blue-100' : 'bg-gray-200 text-gray-600'}
                `}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};