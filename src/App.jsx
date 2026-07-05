import { HelmetProvider } from 'react-helmet-async';
import SeoHead from './components/SeoHead';
import Nav from './components/Nav';
import Hero from './components/Hero';
import News from './components/News';
import Publications from './components/Publications';
import Education from './components/Education';
import Awards from './components/Awards';
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
          <Education />
          <Awards />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
