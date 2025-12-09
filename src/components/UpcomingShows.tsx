import React from 'react';

const shows = [
  { date: '08 Feb', city: 'Padova', venue: 'Magic Club' },
  { date: '15 Mar', city: 'Barcelona', venue: 'Razzmatazz' },
  { date: '29 Mar', city: 'Rome', venue: 'Goa Club' },
];

export const UpcomingShows: React.FC = () => {
  return (
    <section className="px-4 py-8 max-w-md mx-auto w-full">
      <h3 className="text-center text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-6">Upcoming Shows</h3>
      <div className="flex flex-col gap-2">
        {shows.map((show, index) => (
          <div key={index} className="group flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-violet-500/30 hover:bg-neutral-800/50 transition-all cursor-default">
            <div className="flex flex-col">
              <span className="text-neutral-200 font-bold group-hover:text-white transition-colors">{show.city}</span>
              <span className="text-neutral-500 text-sm group-hover:text-neutral-400 transition-colors">{show.venue}</span>
            </div>
            <span className="text-neutral-300 font-medium text-sm bg-neutral-800 px-3 py-1 rounded-md border border-neutral-700 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-500 transition-all">
              {show.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
