import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-center text-neutral-600 text-sm">
      <div className="w-12 h-1 bg-neutral-800 mx-auto rounded-full mb-6"></div>
      <p className="mb-2 font-medium">© NOHA 2025</p>
      <p className="text-xs text-neutral-700 uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity cursor-default">Built with Teta</p>
    </footer>
  );
};
