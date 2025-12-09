import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 text-center animate-fade-in">
      <div className="w-36 h-36 mb-6 rounded-full overflow-hidden border-2 border-violet-500/50 shadow-xl shadow-violet-500/10">
        <img 
          src="https://placehold.co/400x400/171717/white?text=NOHA" 
          alt="Noha" 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-5xl font-black tracking-tighter mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">NOHA</h1>
      <p className="text-neutral-400 mb-8 max-w-xs text-lg font-light leading-relaxed">
        Producer & DJ<br/>
        <span className="text-sm text-neutral-500">Emotional club music from Rome</span>
      </p>
      
      <a 
        href="#"
        className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full transition-all shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 active:scale-95 text-sm uppercase tracking-wider"
      >
        Listen to the new EP
      </a>
    </section>
  );
};
