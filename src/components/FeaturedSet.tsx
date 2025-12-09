import React from 'react';

export const FeaturedSet: React.FC = () => {
  return (
    <section className="px-4 py-6 max-w-md mx-auto w-full">
      <h3 className="text-center text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">Featured DJ Set</h3>
      <div className="w-full rounded-2xl overflow-hidden border border-neutral-800 shadow-xl bg-neutral-900">
        <div className="aspect-video w-full bg-neutral-800 relative group">
           <iframe 
             className="w-full h-full"
             src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" 
             title="YouTube video player" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             allowFullScreen
           ></iframe>
        </div>
        <div className="p-4 bg-neutral-900">
           <p className="text-sm text-neutral-400 text-center font-medium">Live at Goa Club — Winter Season 2024</p>
        </div>
      </div>
    </section>
  );
};
