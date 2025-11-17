
import React from 'react';
import { FlameIcon } from './icons/FlameIcon';

const whyItWorks = [
  { title: 'Intensidade > Duração', description: 'Treinos curtos e explosivos são mais eficazes que horas de cardio lento.' },
  { title: 'Queima Pós-Treino', description: 'Seu metabolismo continua acelerado, queimando gordura por horas após o exercício.' },
  { title: 'Ativação do Core', description: 'Movimentos que fortalecem e definem o abdômen de verdade.' },
  { title: 'Perfeito Para Quem Não Tem Tempo', description: 'Só 10 minutos por dia. Sem desculpas.' },
];

export const MethodSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Por que o método funciona?</h2>
          <p className="mt-4 text-xl text-gray-600">A ciência por trás dos resultados rápidos.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {whyItWorks.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <FlameIcon className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
