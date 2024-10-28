import React from 'react';
import BackgroundSVG from '../assets/background.svg';
import AppStoreBadge from "../assets/AppStoreBadge.png";
import PlayStoreBadge from '../assets/PlayStoreBadge.png';

const Download: React.FC = () => {
    return(
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
    );
};

export default Download; 