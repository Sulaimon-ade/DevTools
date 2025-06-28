import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../components/contexts/ThemeContext';

/**
 * Theme toggle component for switching between light and dark modes
 */
export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center justify-center w-10 h-10 rounded-lg
        bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
        text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
        transition-all duration-200 border border-gray-200 dark:border-gray-700
      "
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
};