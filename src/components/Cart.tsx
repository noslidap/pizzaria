import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  
  const handleWhatsAppCheckout = () => {
    const message = `*Novo Pedido*\n\n${cart.items
      .map(item => `${item.quantity}x ${item.name}`)
      .join('\n')}\n\n*Total: ${cart.total}*`;
      
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511960300951?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center">
                <ShoppingBag className="w-5 h-5 text-primary-600 mr-2" />
                <h2 className="text-xl font-semibold">Carrinho</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {cart.items.length === 0 ? (
                <div className="text-center py-8 text-stone-500">
                  Seu carrinho está vazio
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                    >
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-stone-600">{item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-1 hover:bg-stone-100 rounded-full transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-stone-100 rounded-full transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span>{cart.total}</span>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppCheckout}
                  disabled={cart.items.length === 0}
                  className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Finalizar Pedido
                </button>
                
                <button
                  onClick={clearCart}
                  disabled={cart.items.length === 0}
                  className="w-full btn bg-stone-100 text-stone-800 hover:bg-stone-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Limpar Carrinho
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;