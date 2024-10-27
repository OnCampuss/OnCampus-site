import React, { useState, useEffect } from 'react';
import { Home, Info, List, Mail, Download, Menu, X } from 'lucide-react';
import BackgroundSVG from './background.svg';
import { motion } from 'framer-motion';
import AppStoreBadge from "./AppStoreBadge.png";
import PlayStoreBadge from './PlayStoreBadge.png';
import LogoOnCampus from './LogoOnCampus.svg'
import FuncionalidadeImagem1 from './studantImage.jpg'
import FuncionalidadeImagem2 from './admImage.jpg'
import FuncionalidadeImagem3 from './driverImage.jpg'

const App: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <nav className={`fixed top-0 w-full bg-base4 bg-opacity-90 text-white px-4 py-2 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} z-10`}>
        <div className="flex justify-between items-center">
          <a href="#home" className="font-title text-2xl">OnCampus</a>
          <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ul className="hidden sm:flex space-x-4 font-title">
            <li>
              <a href="#home" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                <Home className="mr-2" /> Home
              </a>
            </li>
            <li>
              <a href="#sobre" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                <Info className="mr-2" /> Sobre
              </a>
            </li>
            <li>
              <a href="#funcionalidades" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                <List className="mr-2" /> Funcionalidades
              </a>
            </li>
            <li>
              <a href="#contato" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                <Mail className="mr-2" /> Contato
              </a>
            </li>
            <li>
              <a href="#download" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                <Download className="mr-2" /> Download
              </a>
            </li>
          </ul>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col sm:hidden space-y-2 mt-4 font-title">
            <li>
              <a href="#home" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                <Home className="inline mr-2" /> Home
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                <Info className="inline mr-2" /> Sobre
              </a>
            </li>
            <li>
              <a href="#funcionalidades" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                <List className="inline mr-2" /> Funcionalidades
              </a>
            </li>
            <li>
              <a href="#contato" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                <Mail className="inline mr-2" /> Contato
              </a>
            </li>
            <li>
              <a href="#download" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                <Download className="inline mr-2" /> Download
              </a>
            </li>
          </ul>
        )}
      </nav>

      <section id="home" className="min-h-screen bg-base4 flex flex-col justify-center items-center relative p-4 sm:p-8">
        <img
          src={BackgroundSVG}
          alt="Background decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="flex flex-col sm:flex-row justify-center items-center w-full">
          {/* Contêiner de texto */}
          <div className="flex flex-col items-center sm:w-1/2 sm:mr-10 text-center sm:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-7xl font-title font-bold text-decorativa1 text-shadow mb-4">
              OnCampus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl font-text text-base3 text-shadow">
              Seu aplicativo de transporte universitário!
            </motion.p>
          </div>
          <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-[800px] rounded-lg ml-20 flex items-center justify-center">
              <img
                src={LogoOnCampus}
                alt="Prévia do App OnCampus"
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="sobre" className="h-auto sm:h-screen bg-base2 text-base1 flex flex-col justify-center items-center relative pt-12">
        <img
          src={BackgroundSVG}
          alt="Background decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <h2 className="text-4xl font-title font-bold mb-6 mt-12">Sobre Nós</h2>
        <div className="w-64 h-1 bg-decorativa1 mb-6"></div>
        <p className="mt-2 mb-12 text-xl font-text max-w-2xl text-center">
          Nosso aplicativo foi criado para facilitar o transporte universitário, trazendo praticidade para estudantes, prestadores de serviços e motoristas.
        </p>
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-base3 p-4 rounded-lg shadow-lg w-full sm:w-[300px] h-[350px] flex flex-col justify-center items-center">
            <img
              // src={SobreImage1}
              alt="Sobre nós"
              className="w-full h-full object-contain mb-4"
            />
            <p className="text-lg text-center font-text">Integração com o sistema universitário.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-base3 p-4 rounded-lg shadow-lg w-full sm:w-[300px] h-[350px] flex flex-col justify-center items-center">
            <img
              // src={SobreImage2}
              alt="Sobre nós"
              className="w-full h-full object-contain mb-4"
            />
            <p className="text-lg text-center font-text">Facilidade na escolha de rotas.</p>
          </motion.div>
        </div>
      </section>

      <section id="funcionalidades" className="min-h-screen bg-base4 text-base1 flex flex-col justify-center items-center relative pt-12">
        <img
          src={BackgroundSVG}
          alt="Background decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <h2 className="text-4xl font-title font-bold mb-6 text-center">Funcionalidades</h2>
        <div className="w-64 h-1 bg-decorativa1 mb-6"></div>
        <p className="mt-2 mb-12 text-xl font-text max-w-2xl text-center">
          O OnCampus oferece uma variedade de funcionalidades para melhorar a experiência dos usuários.
        </p>
        <div className="flex flex-wrap justify-center space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col items-center w-full sm:w-[300px]">
            <h3 className="text-2xl font-title font-bold text-decorativa1 mb-4 text-center">Estudante</h3>
            <p className="text-lg text-center font-text mb-4 min-h-[100px] flex-grow">
              Informações sobre viagem, perfil de estudante, área financeira e controle de viagens em tempo real.
            </p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-base4 p-4 rounded-lg shadow-lg flex justify-center items-center h-[250px]"
            >
              <img
                src={FuncionalidadeImagem1}
                alt="Funcionalidade para Estudantes"
                className="w-auto h-auto object-contain max-h-full" // Limita a altura da imagem
              />
            </motion.div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[300px]">
            <h3 className="text-2xl font-title font-bold text-decorativa1 mb-4 text-center">Administrador</h3>
            <p className="text-lg text-center font-text mb-4 min-h-[100px] flex-grow">
              Cadastro de viagens e acesso às informações dos estudantes, como uso do transporte e dados financeiros.
            </p>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-base4 p-4 rounded-lg shadow-lg flex justify-center items-center h-[250px]"
            >
              <img
                src={FuncionalidadeImagem2}
                alt="Funcionalidade para Administradores"
                className="w-auto h-auto object-contain max-h-full"
              />
            </motion.div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[300px]">
            <h3 className="text-2xl font-title font-bold text-decorativa1 mb-4 text-center">Motorista</h3>
            <p className="text-lg text-center font-text mb-4 min-h-[100px] flex-grow">
              Iniciar rotas de viagens de forma rápida e eficiente.
            </p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-base4 p-4 rounded-lg shadow-lg flex justify-center items-center h-[250px]"
            >
              <img
                src={FuncionalidadeImagem3}
                alt="Funcionalidade para Motoristas"
                className="w-auto h-auto object-contain max-h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contato" className="min-h-screen bg-base2 text-base1 flex flex-col justify-center items-center relative pt-12">
        <img
          src={BackgroundSVG}
          alt="Background decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <h2 className="text-4xl font-title font-bold mb-6">Contato</h2>
        <div className="w-64 h-1 bg-decorativa1 mb-6"></div>
        <p className="mt-2 mb-12 text-xl font-text max-w-2xl text-center">
          Entre em contato para mais informações ou sugestões!
        </p>
        <form className="flex flex-col items-center w-full max-w-md">
          <input
            type="text"
            placeholder="Nome"
            className="border-2 border-base3 p-2 mb-4 rounded-lg w-full text-black placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-base3 p-2 mb-4 rounded-lg w-full text-black placeholder-gray-500"
          />
          <textarea
            placeholder="Mensagem"
            className="border-2 border-base3 p-2 mb-4 rounded-lg w-full text-black placeholder-gray-500"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-decorativa1 text-white px-8 py-2 rounded-lg hover:bg-decorativa2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-decorativa2 focus:ring-opacity-50">
            Enviar
          </button>
        </form>
      </section>

      <section id="download" className="h-auto sm:h-screen bg-base4 text-base1 flex flex-col justify-center items-center relative pt-12">
        <img
          src={BackgroundSVG}
          alt="Background decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <h2 className="text-4xl font-title font-bold  mb-6">Em Breve ...</h2>
        <div className="w-64 h-1 bg-decorativa1 mb-6"></div>
        <p className="mt-2 mb-12 text-2xl font-text max-w-2xl text-center">
          Baixe nosso aplicativo e revolucione o transporte universitário!
        </p>
        <div className="flex flex-col sm:flex-row items-center">
          <img src={AppStoreBadge} alt="Baixar na App Store" className="w-48 mb-4 sm:mb-0 sm:mr-4" />
          <img src={PlayStoreBadge} alt="Baixar na Google Play" className="w-48" />
        </div>
      </section>

      <footer className="bg-base2 text-base1 py-4 text-center">
        <p className="text-sm font-text">© 2024 OnCampus. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
