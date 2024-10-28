import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Funcionalidades from './components/Funcionalidades';
import Download from './components/Download';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Sobre />
      <Funcionalidades />
      <Contato />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
