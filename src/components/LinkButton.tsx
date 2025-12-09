import React from 'react';

interface LinkButtonProps {
  label: string;
  icon?: string;
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ label, icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full p-4 mb-3 text-neutral-100 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-colors shadow-md active:scale-98 duration-200 border border-neutral-700/50"
    >
      <span className="flex items-center gap-3 font-medium text-lg">
        {icon && <span className="text-2xl">{icon}</span>}
        {label}
      </span>
      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};
