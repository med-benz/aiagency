import React from 'react';
import Container from '../components/Container';
import { CheckCircle, BarChart2, Users, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { value: '95%', label: 'Satisfaction Client' },
    { value: '500+', label: 'Projets Réalisés' },
    { value: '35%', label: 'Réduction des Coûts' },
    { value: '48x', label: 'Traitement Plus Rapide' },
  ];

  const keyPoints = [
    {
      icon: <CheckCircle className="text-indigo-600" size={20} />,
      text: 'Équipe spécialisée d\'ingénieurs IA et data scientists',
    },
    {
      icon: <CheckCircle className="text-indigo-600" size={20} />,
      text: 'Frameworks IA propriétaires pour un déploiement rapide',
    },
    {
      icon: <CheckCircle className="text-indigo-600" size={20} />,
      text: 'Solutions personnalisées adaptées à votre secteur',
    },
    {
      icon: <CheckCircle className="text-indigo-600" size={20} />,
      text: 'Support continu et amélioration permanente',
    },
  ];

  return (
    <section id="about" className="py-24 bg-indigo-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              À Propos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nous sommes une équipe d'experts en IA qui transforme les entreprises
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Fondée en 2022, notre agence réunit les meilleurs talents en intelligence artificielle, 
              machine learning et optimisation des processus métier. Nous sommes passionnés par l'aide 
              aux organisations pour exploiter pleinement le potentiel de l'automatisation IA.
            </p>

            <div className="space-y-4 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">{point.icon}</div>
                  <p className="text-gray-700">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl transform rotate-3 scale-105 opacity-10"></div>
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-4 rounded-lg inline-block">
                    <BarChart2 className="text-indigo-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">Approche Basée sur les Données</h3>
                  <p className="text-gray-600">
                    Nous utilisons l'analyse de données pour quantifier l'impact de nos solutions IA et 
                    améliorer continuellement nos approches basées sur les métriques de performance.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 p-4 rounded-lg inline-block">
                    <Users className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">Expertise Sectorielle</h3>
                  <p className="text-gray-600">
                    Notre équipe apporte une connaissance spécialisée dans la santé, la finance, 
                    le retail, l'industrie et plus encore pour des solutions IA spécifiques.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg inline-block">
                    <Zap className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">Implémentation Rapide</h3>
                  <p className="text-gray-600">
                    Nos frameworks propriétaires permettent un déploiement plus rapide des solutions IA 
                    sans compromettre la qualité ou la personnalisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;