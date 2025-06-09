import React from 'react';
import { menuData } from '../data/menuData';
import MenuSection from './MenuSection';
import clsx from 'clsx';

const categories = [
  { 
    id: 'tradicional', 
    name: 'Tradicionais',
    description: 'Nossas pizzas tradicionais são preparadas com ingredientes selecionados e massa fresca feita diariamente.'
  },
  { 
    id: 'especial', 
    name: 'Especiais',
    description: 'Experimente nossas criações especiais, com combinações únicas de sabores premium.'
  },
  { 
    id: 'doce', 
    name: 'Doces',
    description: 'Para finalizar com doçura, conheça nossas deliciosas opções de pizzas doces.'
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('tradicional');

  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-center gap-2 px-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={clsx(
                'px-4 py-2.5 rounded-full font-medium transition-all flex-1 max-w-[160px]',
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'text-stone-600 hover:text-stone-900'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {categories.map(category => (
        activeCategory === category.id && (
          <MenuSection
            key={category.id}
            title={`Pizzas ${category.name}`}
            pizzas={menuData[category.id]}
            description={category.description}
          />
        )
      ))}
    </div>
  );
};

export default Menu;