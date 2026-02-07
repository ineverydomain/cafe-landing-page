import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cafe-surface py-16 border-t border-cafe-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <Coffee className="w-10 h-10 text-cafe-gold mb-6" />
          <h2 className="text-2xl font-serif text-cafe-cream mb-8">Savor Every Sip and Bite</h2>
          <div className="flex gap-4">
             <button className="w-10 h-10 rounded-full border border-cafe-muted/30 flex items-center justify-center text-cafe-muted hover:text-cafe-gold hover:border-cafe-gold transition-all duration-300">
                <Instagram className="w-4 h-4" />
             </button>
             <button className="w-10 h-10 rounded-full border border-cafe-muted/30 flex items-center justify-center text-cafe-muted hover:text-cafe-gold hover:border-cafe-gold transition-all duration-300">
                <Facebook className="w-4 h-4" />
             </button>
             <button className="w-10 h-10 rounded-full border border-cafe-muted/30 flex items-center justify-center text-cafe-muted hover:text-cafe-gold hover:border-cafe-gold transition-all duration-300">
                <Twitter className="w-4 h-4" />
             </button>
             <button className="w-10 h-10 rounded-full border border-cafe-muted/30 flex items-center justify-center text-cafe-muted hover:text-cafe-gold hover:border-cafe-gold transition-all duration-300">
                <Youtube className="w-4 h-4" />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left border-t border-cafe-gold/10 pt-12">
          <div>
            <h4 className="text-cafe-cream font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cafe-muted">
              <li><a href="#" className="hover:text-cafe-gold transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-cafe-gold transition-colors">Menu</a></li>
              <li><a href="#story" className="hover:text-cafe-gold transition-colors">Our Story</a></li>
              <li><a href="#visit" className="hover:text-cafe-gold transition-colors">Visit Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cafe-cream font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-cafe-muted">
              <li>123 Midnight Ave,</li>
              <li>Brew City, BC 90210</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@midnightespresso.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-cafe-cream font-serif text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-cafe-muted">
              <li>Mon - Fri: 7am - 9pm</li>
              <li>Sat: 8am - 10pm</li>
              <li>Sun: 8am - 8pm</li>
            </ul>
          </div>
          <div>
            <h4 className="text-cafe-cream font-serif text-lg mb-4">Newsletter</h4>
            <p className="text-xs text-cafe-muted mb-4">Join our members for exclusive events.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-transparent border-b border-cafe-muted/50 py-2 px-2 text-sm text-cafe-cream focus:outline-none focus:border-cafe-gold w-full placeholder:text-cafe-muted/50"
              />
              <button className="text-cafe-gold text-xs uppercase tracking-widest ml-2 hover:text-white transition-colors">
                Sub
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-cafe-gold/5">
          <p className="text-xs text-cafe-muted/50 uppercase tracking-widest">
            © 2024 Midnight Espresso. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};