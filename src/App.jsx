import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import { About, Services, Projects, Compare, Why, Process, Materials, Testimonials, Trust, CTA, Contact, Footer } from './components/Sections';
const Scene = lazy(() => import('./components/Scene'));
export default function App() {
  return (<>
    <Navbar />
    <main>
      <Hero /><About /><Services /><Projects /><Packages /><Compare />
      <Suspense fallback={<div className="scene-fb" />}><Scene /></Suspense>
      <Why /><Process /><Materials /><Testimonials /><Trust /><CTA /><Contact />
    </main>
    <Footer />
  </>);
}
