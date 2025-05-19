import React from 'react';
import Container from '../components/Container';
import { Zap } from 'lucide-react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Entreprise',
      links: [
        { label: 'À Propos', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Témoignages', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Stratégie IA', href: '#' },
        { label: 'Automatisation des Flux', href: '#' },
        { label: 'Analyse de Données', href: '#' },
        { label: 'Développement IA', href: '#' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Études de Cas', href: '#' },
        { label: 'Base de Connaissances IA', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Légal',
      links: [
        { label: 'Politique de Confidentialité', href: '#' },
        { label: 'Conditions d\'Utilisation', href: '#' },
        { label: 'Politique des Cookies', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 text-white mb-6">
              <Zap size={32} className="text-indigo-400" />
              <span className="text-2xl font-bold">AI Nexus</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformer les entreprises grâce à des solutions d'automatisation intelligentes. 
              Nous aidons les organisations à exploiter la puissance de l'IA pour stimuler l'efficacité et l'innovation.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((platform, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">
            &copy; {currentYear} AI Nexus. Tous droits réservés.
          </p>
          <p className="text-gray-500 mt-2 md:mt-0">
            Conçu avec ❤️ pour l'innovation des entreprises
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;