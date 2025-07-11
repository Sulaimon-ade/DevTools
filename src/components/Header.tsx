import React from 'react';
import { Code, Users } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

/**
 * Application header component
 * Provides branding and context for the resource hub
 */
export const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      {/* Theme Toggle - positioned in top right */}
      <div className="flex justify-start mb-1">
        <ThemeToggle />
      </div>

      {/* Logo and Title */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
          <Code className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Dev Resource Hub
        </h1>
      </div>

      {/* Subtitle */}
      <div className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-300 mb-2">
        <Users size={16} />
        <span className="text-lg">Suleiman A. Okunoye Development Resources</span>
      </div>

      {/* Description */}
      <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Suleiman A. Okunoye Development Resource Hub.
        Curated collection of essential tools, libraries, and resources for our development team.
        Click on any category below to explore relevant resources.
      </p>
    </header>
  );
};