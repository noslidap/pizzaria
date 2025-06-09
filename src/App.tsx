import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container-custom py-12">
          <div id="menu" className="-mt-24 pt-24">
            <Menu />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;