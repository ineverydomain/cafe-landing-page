import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Armchair, Dog } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: '1',
    title: 'Cozy Atmosphere',
    description: 'Experience a sanctuary of comfort and relaxation.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    icon: <Armchair className="w-6 h-6" />
  },
  {
    id: '2',
    title: 'Free Wi-Fi',
    description: 'Stay connected with our high-speed internet while you sip.',
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=600&q=80',
    icon: <Wifi className="w-6 h-6" />
  },
  {
    id: '3',
    title: 'Pet Friendly',
    description: 'Bring your furry friends along; no one gets left behind.',
    image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=600&q=80',
    icon: <Dog className="w-6 h-6" />
  }
];

export const Discovery: React.FC = () => {
  return (
    <section className="py-24 bg-cafe-cream/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cafe-gold text-xs font-bold tracking-widest uppercase"
          >
            Welcome
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-cafe-cream mt-4"
          >
            Discover Your Perfect Retreat
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-cafe-surface p-6 rounded-lg overflow-hidden hover:bg-cafe-charcoal transition-colors duration-500"
            >
              <div className="h-48 w-full overflow-hidden rounded-md mb-6 relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5 }}
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-cafe-base/80 p-2 rounded-full text-cafe-gold backdrop-blur-sm z-20">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-serif text-cafe-cream mb-3">{feature.title}</h3>
              <p className="text-cafe-muted text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};