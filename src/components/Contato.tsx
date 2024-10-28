import React from 'react';
import BackgroundSVG from '../assets/background.svg';

const Contato: React.FC = () => {
    return (
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
    );
};

export default Contato;