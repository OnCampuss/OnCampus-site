import React from 'react';
import { motion } from 'framer-motion';
import BackgroundSVG from '../assets/background.svg';
import LogoOnCampus from '../assets/LogoOnCampus.svg';

const Home: React.FC = () => {
    return (
        <section id="home" className="min-h-screen bg-base4 flex flex-col justify-center items-center relative p-4 sm:p-8">
            <img
                src={BackgroundSVG}
                alt="Background decoration"
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />
            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
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
    );
};

export default Home