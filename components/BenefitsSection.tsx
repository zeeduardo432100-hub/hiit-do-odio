
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const benefits = [
  'Protocolo HIIT de 10 minutos diários',
  'Cronograma completo de treinos para 30 dias',
  'Instruções de aquecimento e pós-treino',
  'Rotina simples para fazer em qualquer lugar',
  'Treinos que aceleram o metabolismo por horas',
  'eBook em PDF, organizado e direto ao ponto',
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">O que você vai receber</h2>
          <p className="mt-4 text-xl text-gray-600">Um plano de ação completo para transformar seu corpo.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
