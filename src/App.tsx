import { Hero } from './components/Hero'
import { FeaturedRelease } from './components/FeaturedRelease'
import { UpcomingShows } from './components/UpcomingShows'
import { FeaturedSet } from './components/FeaturedSet'
import { MentoringTeaser } from './components/MentoringTeaser'
import { LinkSection } from './components/LinkSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-violet-500/30 selection:text-white pb-8">
      <main className="max-w-md mx-auto relative">
        <Hero />
        <FeaturedRelease />
        <UpcomingShows />
        <FeaturedSet />
        <MentoringTeaser />
        <LinkSection />
        <Footer />
      </main>
    </div>
  )
}

export default App