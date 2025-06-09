import React from 'react';
import PizzaCard from './PizzaCard';
import { Pizza } from '../types/Pizza';

interface MenuSectionProps {
  title: string;
  description: string;
  pizzas: Pizza[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, description, pizzas }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const filteredPizzas = pizzas.filter(pizza => 
    pizza.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pizza.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  
  return (
    <section>
      <div className="mb-12 text-center">
        <h2 className="section-title">{title}</h2>
        <p className="text-stone-600 max-w-2xl mx-auto">{description}</p>
        
        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Buscar por nome ou ingrediente..."
            className="w-full border border-stone-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza, index) => (
            <PizzaCard key={pizza.id} pizza={pizza} index={index} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-stone-500">Nenhuma pizza encontrada com esses termos. Tente outra busca.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;