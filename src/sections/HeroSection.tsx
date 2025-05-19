import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-12 -right-12 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute w-96 h-96 top-1/3 -left-12 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute w-64 h-64 bottom-20 right-1/4 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <Container className="py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              <span className="animate-pulse mr-2 h-2 w-2 bg-indigo-600 rounded-full"></span>
              Solutions IA de Nouvelle Génération
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Automatisez Plus Intelligemment avec l'IA Avancée
            </h1>
            
            <p className="text-xl text-gray-700 max-w-xl">
              Transformez vos opérations commerciales avec des solutions d'automatisation IA de pointe qui font gagner du temps, réduisent les coûts et stimulent l'innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="large" onClick={scrollToContact}>
                Commencer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="large">
                En Savoir Plus
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">500+</span> entreprises automatisées
              </p>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="w-full h-48 bg-gray-100 rounded-xl mb-6"></div>
                <div className="space-y-4">
                  <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
                  <div className="h-10 bg-indigo-200 rounded-md w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;