import React from 'react';
import { motion } from 'framer-motion';
import BackgroundSVG from '../assets/background.svg';
import FuncionalidadeImagem1 from '../assets/studantImage.jpg';
import FuncionalidadeImagem2 from '../assets/admImage.jpg';
import FuncionalidadeImagem3 from '../assets/driverImage.jpg';

const Funcionalidades: React.FC = () => {
    return(
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
              Informações sobre viagem, perfil de estudante e controle de viagens em tempo real.
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
              Cadastro de viagens e acesso às informações dos estudantes, uso do transporte e dados financeiros.
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
    );
};

export default Funcionalidades