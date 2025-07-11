import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Resource } from '../data/resources';

interface ResourceCardProps {
  resource: Resource;
}

/**
 * Individual resource card component
 * Displays resource information with hover effects and external link handling
 */
export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const handleClick = () => {
    // Open link in new tab for external resources
    window.open(resource.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleClick}
      className="
        group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700
        cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20
        hover:border-blue-200 dark:hover:border-blue-600 hover:-translate-y-1 active:translate-y-0
      "
    >
      {/* Card Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {resource.name}
        </h3>
        <ExternalLink 
          size={16} 
          className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" 
        />
      </div>

      {/* Card Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {resource.description}
      </p>

      {/* Card Footer - URL Preview */}
      <div className="flex items-center text-xs text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
        <span className="truncate">
          {new URL(resource.url).hostname}
        </span>
      </div>

      {/* Subtle accent line that appears on hover */}
      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 mt-4"></div>
    </div>
  );
};