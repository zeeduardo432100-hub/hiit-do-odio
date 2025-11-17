
import React from 'react';
import { TargetIcon } from './icons/TargetIcon';

export const PainSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <TargetIcon className="w-16 h-16 mx-auto text-orange-500 mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Cansado de tentar de tudo e continuar no mesmo lugar?
        </h2>
        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
          Você já tentou <strong className="text-gray-800">dieta, treinos longos, aplicativos</strong> e nada parece funcionar? A falta de tempo e de motivação te impedem de alcançar o corpo que você quer?
        </p>
        <p className="mt-6 text-xl text-gray-600 leading-relaxed font-semibold">
          Você precisa de um método <strong className="text-orange-500">rápido, intenso e que realmente traz resultados.</strong>
        </p>
      </div>
    </section>
  );
};
