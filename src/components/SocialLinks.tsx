import React from 'react';
import { Instagram, Github, Linkedin } from 'lucide-react';

interface SocialLinksProps {
  instagramUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

/**
 * Social media links component for the footer
 */
export const SocialLinks: React.FC<SocialLinksProps> = ({
  instagramUrl = 'https://www.instagram.com/officialksolo/',
  githubUrl = 'https://github.com/Sulaimon-ade',
  linkedinUrl = 'https://www.linkedin.com/in/adeniyi-okunoye-5717882ba/'
}) => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: instagramUrl,
      icon: Instagram,
      hoverColor: 'hover:text-pink-500 dark:hover:text-pink-400'
    },
    {
      name: 'GitHub',
      url: githubUrl,
      icon: Github,
      hoverColor: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: linkedinUrl,
      icon: Linkedin,
      hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400'
    }
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center w-10 h-10 rounded-lg
              bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400
              ${social.hoverColor} hover:bg-gray-200 dark:hover:bg-gray-700
              transition-all duration-200 border border-gray-200 dark:border-gray-700
              hover:scale-105 active:scale-95
            `}
            aria-label={`Visit ${social.name} profile`}
          >
            <IconComponent size={18} />
          </a>
        );
      })}
    </div>
  );
};