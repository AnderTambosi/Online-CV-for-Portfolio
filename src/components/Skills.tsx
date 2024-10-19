import React from 'react';
import { Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript',
    'HTML5', 'CSS3', 'Git', 'SQL', 'Python',
    'AWS', 'Docker', 'GraphQL', 'MongoDB'
  ];

  return (
    <section id="skills" className="p-6 border-b">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Wrench size={24} className="mr-2 text-blue-600" />
        Habilidades
      </h2>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;