import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Mail size={24} className="mr-2 text-blue-600" />
        Contato
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="mailto:seuemail@exemplo.com" className="flex items-center text-blue-600 hover:underline">
          <Mail size={20} className="mr-2" />
          seuemail@exemplo.com
        </a>
        <a href="tel:+5511999999999" className="flex items-center text-blue-600 hover:underline">
          <Phone size={20} className="mr-2" />
          +55 (11) 99999-9999
        </a>
        <a href="https://www.linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
          <Linkedin size={20} className="mr-2" />
          LinkedIn
        </a>
        <a href="https://github.com/seuperfil" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
          <Github size={20} className="mr-2" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;