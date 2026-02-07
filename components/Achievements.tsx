import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from './ui/Button';

const Counter: React.FC<{ value: number; suffix: string; label: string }> = ({ value, suffix, label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="mb-8">
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-5xl md:text-6xl font-serif text-cafe-gold font-bold">
          {displayValue}
        </span>
        <span className="text-3xl text-cafe-gold font-serif">{suffix}</span>
      </div>
      <p className="text-cafe-cream/80 text-sm tracking-wide uppercase">{label}</p>
    </div>
  );
};

export const Achievements: React.FC = () => {
  return (
    <section className="py-24 bg-cafe-base relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Stats Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cafe-gold text-xs font-bold tracking-widest uppercase mb-4 block">
              Why Us?
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-cafe-cream mb-8 leading-tight">
              Discover Our Cafe's <br /> Impressive Achievements
            </h2>
            <p className="text-cafe-muted mb-12 text-lg font-light leading-relaxed">
              With over 10 years in business, we have served thousands of satisfied customers. Every day, we proudly brew and serve over 500 cups of our signature coffee.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <Counter value={95} suffix="%" label="Customer Satisfaction" />
              <Counter value={100} suffix="%" label="Freshly Brewed" />
            </div>

            <Button variant="outline" className="mt-8">Read Reviews</Button>
          </motion.div>

          {/* Video Thumbnail */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=80" 
                alt="Barista pouring coffee" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-20 h-20 bg-cafe-cream/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-cafe-cream/30"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(232, 220, 196, 0.2)" }}
                  animate={{ 
                    boxShadow: ["0 0 0 0px rgba(197, 168, 128, 0)", "0 0 0 20px rgba(197, 168, 128, 0)"]
                  }}
                  transition={{ 
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    },
                    scale: { duration: 0.2 }
                  }}
                >
                  <Play className="w-8 h-8 text-cafe-cream ml-1 fill-cafe-cream" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};