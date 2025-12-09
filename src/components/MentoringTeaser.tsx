import React from 'react';

export const MentoringTeaser: React.FC = () => {
  return (
    <section className="px-4 py-6 max-w-md mx-auto w-full">
      <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
        
        <h3 className="text-xl font-bold text-white mb-2 relative z-10">Production Mentoring</h3>
        <p className="text-neutral-400 text-sm mb-6 leading-relaxed relative z-10">
          Struggling to finish your tracks? I help producers find their sound and get release-ready.
        </p>
        <a 
          href="#"
          className="inline-block w-full py-3 bg-white text-neutral-900 font-bold rounded-xl hover:bg-neutral-200 transition-colors shadow-md active:scale-98 relative z-10"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};
