import React from 'react';
import { motion } from 'framer-motion';
import BackgroundSVG from '../assets/background.svg';
import SobreImage1 from '../assets/ImagemSobreOnCampus (6).png';

const Sobre: React.FC = () => {
    return (
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
                <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    src={SobreImage1}
                    alt="Sobre nós"
                    className="w-full sm:w-[380px] h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default Sobre;
