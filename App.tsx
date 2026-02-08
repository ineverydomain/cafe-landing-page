import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { MenuHighlights } from './components/MenuHighlights';
import { Discovery } from './components/Discovery';
import { Achievements } from './components/Achievements';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-cafe-base min-h-screen text-cafe-cream selection:bg-cafe-gold selection:text-cafe-base no-scrollbar">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cafe-gold origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <Intro />
      <MenuHighlights />
      <Discovery />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;