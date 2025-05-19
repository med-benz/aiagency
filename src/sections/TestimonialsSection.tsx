import React, { useState } from 'react';
import Container from '../components/Container';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Travailler avec AI Nexus a transformé nos opérations de service client. Leur solution de chatbot IA a réduit les temps de réponse de 80% et amélioré considérablement les scores de satisfaction client.",
      author: "Sarah Johnson",
      position: "Directrice de l'Expérience Client",
      company: "TechGlobal Inc.",
      rating: 5,
    },
    {
      content: "La solution d'automatisation des flux fournie par l'équipe nous a permis de réduire le temps de traitement manuel de 65%. Leur expertise en implémentation IA est inégalée dans l'industrie.",
      author: "David Chen",
      position: "Directeur des Opérations",
      company: "Logistics Master",
      rating: 5,
    },
    {
      content: "Leurs outils d'analyse IA nous ont donné des insights que nous n'aurions jamais cru possibles. Nous avons pu prédire les tendances du marché avec une précision remarquable.",
      author: "Michael Rodriguez",
      position: "VP Stratégie",
      company: "MarketPulse",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce Que Disent Nos Clients</h2>
          <p className="text-xl text-gray-600">
            Découvrez les témoignages d'entreprises qui ont transformé leurs opérations avec nos solutions IA.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full"></div>
            
            <div key={activeIndex} className="relative z-10 space-y-6 animate-fadeIn">
              <div className="flex">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl font-medium italic text-gray-800">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="pt-4">
                <p className="font-bold text-gray-900">{testimonials[activeIndex].author}</p>
                <p className="text-gray-600">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 transform -translate-y-1/2 -left-4 md:-left-6">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-indigo-50 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={24} className="text-indigo-600" />
            </button>
          </div>
          
          <div className="absolute top-1/2 transform -translate-y-1/2 -right-4 md:-right-6">
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-indigo-50 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={24} className="text-indigo-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-indigo-600 w-6' : 'bg-indigo-200'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;