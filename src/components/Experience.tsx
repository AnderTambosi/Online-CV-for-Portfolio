import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack Sênior',
      company: 'Tech Innovations Ltda.',
      period: 'Jan 2020 - Presente',
      description: 'Lidero o desenvolvimento de aplicações web escaláveis, utilizando React, Node.js, e AWS. Implementei práticas de CI/CD, melhorando a eficiência da equipe em 30%.'
    },
    {
      title: 'Desenvolvedor Front-end',
      company: 'WebSolutions Inc.',
      period: 'Jan 2018 - Dez 2019',
      description: 'Desenvolvi interfaces responsivas e acessíveis usando React e TypeScript. Colaborei em projetos de e-commerce que aumentaram as conversões em 25%.'
    }
  ];

  return (
    <section id="experience" className="p-6 border-b">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Briefcase size={24} className="mr-2 text-blue-600" />
        Experiência Profissional
      </h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
          <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
          <p className="text-gray-700">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;