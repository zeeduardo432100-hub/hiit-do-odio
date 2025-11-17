
import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-green-50 border-2 border-green-500 border-dashed rounded-xl p-8 sm:p-12 text-center">
          <ShieldCheckIcon className="w-16 h-16 mx-auto text-green-500 mb-5" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sua Satisfação ou Seu Dinheiro de Volta</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            É isso mesmo. Se em 7 dias você não suar como nunca e não sentir os primeiros resultados aparecendo, eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo meu.
          </p>
        </div>
      </div>
    </section>
  );
};
