import React from 'react';

export const FeaturedRelease: React.FC = () => {
  return (
    <section className="px-4 py-4 max-w-md mx-auto w-full">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
        
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-violet-600/10 blur-3xl rounded-full -z-10"></div>

        <div className="w-full aspect-square rounded-xl overflow-hidden mb-5 bg-neutral-800 shadow-lg">
             <img 
               src="https://placehold.co/600x600/1a1a1a/white?text=Mind+Is+Free" 
               alt="Mind Is Free EP" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-1">Mind Is Free – EP</h2>
        <p className="text-violet-400 font-medium mb-3 text-xs uppercase tracking-widest">MicroHertz</p>
        <p className="text-neutral-400 text-sm mb-6 leading-relaxed max-w-xs text-opacity-80">
          A journey through deep grooves and hypnotic melodies. 
          The latest exploration of sound from the Rome-based studio.
        </p>
        
        <div className="flex gap-2 w-full">
          <a href="#" className="flex-1 bg-[#1DB954]/10 text-[#1DB954] hover:bg-[#1DB954]/20 py-3 rounded-lg font-bold text-sm transition-colors border border-[#1DB954]/20 flex items-center justify-center gap-2">
            Spotify
          </a>
          <a href="#" className="flex-1 bg-[#02FF5F]/10 text-[#02FF5F] hover:bg-[#02FF5F]/20 py-3 rounded-lg font-bold text-sm transition-colors border border-[#02FF5F]/20 flex items-center justify-center gap-2">
            Beatport
          </a>
           <a href="#" className="flex-1 bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000]/20 py-3 rounded-lg font-bold text-sm transition-colors border border-[#FF0000]/20 flex items-center justify-center gap-2">
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};
