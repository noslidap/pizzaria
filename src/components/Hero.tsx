import React from 'react';
import { motion } from 'framer-motion';
import { Pizza } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full container-custom flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <Pizza size={56} className="inline-block text-primary-500" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Pizzaria do Gordão
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mb-8"
        >
          Sabores autênticos, ingredientes frescos e massa artesanal. 
          Nossa paixão é servir a melhor pizza da cidade.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <a 
            href="#menu"
            className="btn btn-primary"
          >
            Ver Cardápio
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;