import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HighlightCard: React.FC<{
  title: string;
  description: string;
  image: string;
  delay: number;
}> = ({ title, description, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    className="group relative h-[400px] md:h-[600px] overflow-hidden w-full cursor-pointer"
  >
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700 z-10" />
    <motion.img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    />
    <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-lg">
      <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">{title}</h3>
      <p className="text-white/80 font-light mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        {description}
      </p>
      <div className="flex items-center gap-2 text-cafe-gold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
        <span>Explore</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </motion.div>
);

export const MenuHighlights: React.FC = () => {
  return (
    <section id="menu" className="grid grid-cols-1 md:grid-cols-2 bg-cafe-base">
      <HighlightCard
        title="Specialty Coffee"
        description="Indulge in our artisanal blends, roasted to perfection to bring out the unique notes of every bean."
        image="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1200&q=80"
        delay={0}
      />
      <HighlightCard
        title="Artisan Pastries"
        description="Handcrafted daily using traditional techniques and the finest ingredients for a melt-in-your-mouth experience."
        image="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
        delay={0.2}
      />
    </section>
  );
};