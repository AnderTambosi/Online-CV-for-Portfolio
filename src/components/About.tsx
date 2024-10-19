import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="p-6 border-b">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <User size={24} className="mr-2 text-blue-600" />
        Sobre Mim
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Sou um desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e eficientes. 
        Com 5 anos de experiência, tenho desenvolvido habilidades em JavaScript, React, Node.js, e 
        diversas outras tecnologias modernas. Estou sempre em busca de novos desafios e oportunidades 
        para aprender e crescer profissionalmente.
      </p>
    </section>
  );
};

export default About;