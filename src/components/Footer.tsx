import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-4">Pizzeria Delícia</h3>
            <p className="mb-6">Servindo as melhores pizzas da cidade desde 1995. Massa artesanal, ingredientes frescos e muito sabor em cada fatia.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Av. Paulista, 1234, São Paulo - SP</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Terça a Domingo</p>
                  <p>18:00 - 23:00</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Página Inicial</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary-500 transition-colors">Cardápio</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">Localização</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-4">Horários</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Segunda</span>
                <span>Fechado</span>
              </li>
              <li className="flex justify-between">
                <span>Terça - Quinta</span>
                <span>18:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sexta - Sábado</span>
                <span>18:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>18:00 - 23:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400 text-sm">
          <p>© {new Date().getFullYear()} Pizzeria Delícia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;