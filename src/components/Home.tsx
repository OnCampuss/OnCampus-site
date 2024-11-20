import React from 'react';
import { motion } from 'framer-motion';
import BackgroundSVG from '../assets/background.svg';
import LogoOnCampus from '../assets/OnCampusLogo (1).png';

const Home: React.FC = () => {
    return (
        <section id="home" className="min-h-screen bg-base4 flex flex-col justify-center items-center relative p-4 sm:p-8">
            <img
                src={BackgroundSVG}
                alt="Background decoration"
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />
            <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-[1200px]">
                {/* Divisão de texto */}
                <div className="flex flex-col items-start sm:w-1/2 text-center sm:text-left">
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

                {/* Divisão da logo */}
                <div className="flex justify-center items-center sm:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex justify-center items-center">
                        <img
                            src={LogoOnCampus}
                            alt="Prévia do App OnCampus"
                            className="max-w-full max-h-[400px] object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;
