import React from 'react';
import { LinkButton } from './LinkButton';

const links = [
  { label: 'Listen to "Mind Is Free"', icon: '🎧', href: '#' },
  { label: 'All Releases', icon: '📀', href: '#' },
  { label: 'DJ Sets & Clips', icon: '🎛', href: '#' },
  { label: 'Booking & Management', icon: '🗓', href: '#' },
  { label: 'Production Mentoring', icon: '🎓', href: '#' },
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'YouTube', icon: '▶️', href: '#' },
  { label: 'Spotify', icon: '♫', href: '#' },
];

export const LinkSection: React.FC = () => {
  return (
    <section className="px-4 py-8 max-w-md mx-auto w-full">
      <h3 className="text-center text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-6">Links</h3>
      <div className="flex flex-col">
        {links.map((link, index) => (
          <LinkButton key={index} {...link} />
        ))}
      </div>
    </section>
  );
};
