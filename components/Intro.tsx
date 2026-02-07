import React from 'react';
import { motion } from 'framer-motion';

export const Intro: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-cafe-base text-center overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-cafe-cream mb-8 leading-snug">
            Experience the perfect blend of specialty coffee and delectable pastries.
          </h2>
          <div className="w-24 h-[1px] bg-cafe-gold mx-auto mb-8" />
          <p className="text-cafe-muted text-lg font-light leading-relaxed max-w-2xl mx-auto">
            At our cafe, we pride ourselves on serving the finest quality coffee sourced from around the globe. Pair it with our freshly baked pastries for an unforgettable treat.
          </p>
        </motion.div>
      </div>
    </section>
  );
};