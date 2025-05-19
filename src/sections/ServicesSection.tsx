import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import { Brain, Workflow, BarChart, Code, MessageSquare, Database } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="h-full p-6 hover:translate-y-[-8px]">
      <div className="p-4 rounded-lg bg-indigo-50 text-indigo-600 inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Brain size={24} />,
      title: 'Conseil en Stratégie IA',
      description: 'Développez des stratégies IA complètes alignées sur vos objectifs commerciaux et les exigences du marché.',
    },
    {
      icon: <Workflow size={24} />,
      title: 'Automatisation des Flux',
      description: 'Optimisez les opérations en automatisant les tâches répétitives avec des systèmes IA avancés.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Analyse de Données',
      description: 'Transformez les données brutes en insights commerciaux exploitables avec nos solutions analytiques IA.',
    },
    {
      icon: <Code size={24} />,
      title: 'Développement IA sur Mesure',
      description: 'Créez des solutions IA personnalisées spécifiquement conçues pour répondre à vos défis uniques.',
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'IA Conversationnelle',
      description: 'Implémentez des chatbots intelligents et des assistants virtuels pour améliorer les interactions clients.',
    },
    {
      icon: <Database size={24} />,
      title: 'Traitement Intelligent des Données',
      description: 'Traitez et extrayez de la valeur des données structurées et non structurées avec les technologies IA.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Services d'Automatisation IA</h2>
          <p className="text-xl text-gray-600">
            Nous proposons des solutions IA complètes pour transformer vos opérations et stimuler l'innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon} 
              title={service.title} 
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;