import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bacharel em Ciência da Computação',
      institution: 'Universidade Federal de Tecnologia',
      year: '2015 - 2019'
    },
    {
      degree: 'Curso Técnico em Desenvolvimento de Sistemas',
      institution: 'Instituto Técnico de Informática',
      year: '2013 - 2014'
    }
  ];

  return (
    <section id="education" className="p-6 border-b">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <GraduationCap size={24} className="mr-2 text-blue-600" />
        Educação
      </h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
          <p className="text-gray-600">{edu.institution} | {edu.year}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;