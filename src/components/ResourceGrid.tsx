import React from 'react';
import { ResourceCard } from './ResourceCard';
import { Resource } from '../data/resources';

interface ResourceGridProps {
  resources: Resource[];
  categoryName: string;
}

/**
 * Grid layout component for displaying resource cards
 * Responsive grid that adapts to different screen sizes
 */
export const ResourceGrid: React.FC<ResourceGridProps> = ({ resources, categoryName }) => {
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 dark:text-gray-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">No resources found</h3>
        <p className="text-gray-500 dark:text-gray-400">
          No resources are available in the {categoryName} category yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Category Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {categoryName} Resources
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {resources.length} {resources.length === 1 ? 'resource' : 'resources'} available
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};