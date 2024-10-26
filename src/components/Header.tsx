import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between max-w-4xl">
        <div className="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/25924665?v=4"
            alt="Seu Nome"
            className="w-16 h-16 rounded-full border-4 border-white mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold">Anderson Tambosi</h1>
            <p className="text-blue-200">Desenvolvedor Full Stack</p>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">Sobre</a></li>
            <li><a href="#experience" className="hover:underline">Experiência</a></li>
            <li><a href="#education" className="hover:underline">Educação</a></li>
            <li><a href="#skills" className="hover:underline">Habilidades</a></li>
            <li><a href="#contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;