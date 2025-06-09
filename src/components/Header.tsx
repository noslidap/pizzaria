import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import clsx from 'clsx';
import Cart from './Cart';
import { useCart, useCartDrawer } from '../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const { isOpen: isCartOpen, onOpen: openCart, onClose: closeCart } = useCartDrawer();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string, categoryId: string) => {
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center">
              <span className={clsx(
                "font-display text-2xl font-bold",
                isScrolled ? "text-primary-600" : "text-white"
              )}>Pizzeria Delícia</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className={clsx(
                "transition-colors relative",
                isScrolled
                  ? "text-stone-700 hover:text-primary-600"
                  : "text-white hover:text-white/80"
              )}
              onClick={openCart}
            >
              <ShoppingBag size={20} />
              {cart.items.length > 0 && (
                <span className="bg-primary-600 text-white text-xs w-4 h-4 rounded-full absolute -mt-2 -mr-2 flex items-center justify-center">
                  {cart.items.length}
                </span>
              )}
            </button>
          </div>
        </div>
        
      </div>
      
      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </header>
  );
};

export default Header;