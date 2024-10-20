import React, { useState, useEffect } from 'react';
import BackgroundSVG from './background.svg';
import { motion } from 'framer-motion';
import PlaystoreLogo from './google-play-store-logo-1.png';
import ApplestoreLogo from './App-Store-Logo.png';

const App: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      {/* Navbar - Aplicando classes condicionalmente com base no estado showNavbar */}
      <nav className={`fixed top-0 w-full bg-base3 bg-opacity-20 text-white p-4 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'} z-10`}>
        <ul className="flex justify-around font-title">
          <li>
            <a href="#home" className="px-3 py-4 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#funcionalidades" className="px-3 py-4 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
              Funcionalidades
            </a>
          </li>
          <li>
            <a href="#sobre" className="px-3 py-4 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contato" className="px-3 py-4 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
              Contato
            </a>
          </li>
          <li>
            <a href="#download" className="px-3 py-4 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
              Download
            </a>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="h-screen bg-base4 flex flex-col justify-center items-start relative p-8">
        <img
          src={BackgroundSVG}
          alt="Background decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-title font-bold text-decorativa1 text-shadow ml-40 text-left">
          OnCampus
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-2xl font-text text-base3 text-shadow ml-40 text-left">
          Seu aplicativo de transporte universitário!
        </motion.p>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="h-screen bg-base2 text-base3 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-title font-bold">Funcionalidades</h2>
        <ul className="mt-6 space-y-4 text-xl font-text">
          <li>- Seleção de dias de transporte</li>
          <li>- Rotas e horários personalizados</li>
          <li>- Acompanhamento financeiro</li>
        </ul>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="h-screen bg-base4 text-base1 flex flex-col justify-center items-center relative">
        {/* SVG como fundo */}
        <img
          src={BackgroundSVG}
          alt="Background decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <h2 className="text-4xl font-title font-bold">Sobre Nós</h2>
        <p className="mt-4 text-2xl font-text max-w-2xl text-center">
          Nosso aplicativo foi criado para facilitar o transporte universitário, trazendo praticidade para estudantes e motoristas.
        </p>
      </section>

      {/* Contato Section */}
      <section id="contato" className="h-screen bg-decorativa2 text-base1 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-title font-bold">Contato</h2>
        <form className="mt-6 flex flex-col space-y-4">
          <input type="text" placeholder="Seu nome" className="p-2 rounded bg-base1 text-base2" />
          <input type="email" placeholder="Seu e-mail" className="p-2 rounded bg-base1 text-base2" />
          <textarea placeholder="Sua mensagem" className="p-2 rounded bg-base1 text-base2"></textarea>
          <button className="bg-decorativa1 text-base1 py-2 px-4 rounded hover:bg-decorativa2">Enviar</button>
        </form>
      </section>

      <section id="download" className="h-screen bg-base4 flex flex-col justify-center items-center text-center relative">
        <img
          src={BackgroundSVG}
          alt="Background decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <h2 className="text-4xl font-title font-bold text-decorativa1 mb-6">Baixe Nosso App</h2>
        <p className="text-xl font-text text-base3 mb-4">Disponível na App Store e Google Play</p>
        <div className="flex space-x-4">
          <a
            href="https://apps.apple.com/app/idYOUR_APP_ID" // Substitua pelo link real da App Store
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-40 p-4 bg-decorativa1 text-white rounded shadow-md hover:bg-decorativa2 transition duration-300"
          >
            <img src={ApplestoreLogo} alt="App Store" className="h-6 mr-2" />
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" // Substitua pelo link real da Play Store
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-40 p-4 bg-decorativa1 text-white rounded shadow-md hover:bg-decorativa2 transition duration-300"
          >
            <img src={PlaystoreLogo} alt="Google Play" className="h-6 mr-2" />
            Play Store
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
