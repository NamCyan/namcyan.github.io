import { HelmetProvider } from 'react-helmet-async';
import SeoHead from './components/SeoHead';
import Nav from './components/Nav';
import Hero from './components/Hero';
import News from './components/News';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './assets/index.css';

function App() {
  return (
    <HelmetProvider>
      <SeoHead />
      <div className="fade-in min-h-screen">
        <Nav />
        <main className="max-w-3xl mx-auto px-5">
          <Hero />
          <News />
          <Publications />
          <Experience />
          <Education />
          <Awards />
          <Skills />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
