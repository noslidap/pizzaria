import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';
import { Pizza } from '../types/Pizza';
import { useCart } from '../context/CartContext';

interface PizzaCardProps {
  pizza: Pizza;
  index: number;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, index }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      quantity: 1
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card pizza-card h-full"
    >
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-bold text-xl">{pizza.name}</h3>
          <span className="text-primary-600 font-bold">{pizza.price}</span>
        </div>
        
        <p className="text-stone-600 text-sm mb-4 flex-grow">
          {pizza.ingredients.join(", ")}
        </p>
        
        <div className="flex justify-end mt-2">
          <button 
            className="btn btn-primary py-1.5 px-3 flex items-center text-sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} className="mr-1.5" />
            <span>Adicionar</span>
          </button>
        </div>
        
        {pizza.tag && (
          <div className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs py-1 px-2 rounded-md font-medium">
            {pizza.tag}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PizzaCard;