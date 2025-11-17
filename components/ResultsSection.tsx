
import React from 'react';
import { RocketIcon } from './icons/RocketIcon';

const results = [
  'Menos barriga e mais definição',
  'Mais fôlego para o dia a dia',
  'Disposição e energia nas alturas',
  'Roupas mais folgadas no corpo',
  'Corpo visivelmente mais firme e tonificado',
  'Confiança e autoestima renovadas',
];

export const ResultsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Resultados que você vai <span className="text-orange-500">sentir e ver</span> em 30 dias</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <RocketIcon className="w-8 h-8 text-orange-400 mx-auto mb-4"/>
              <p className="text-lg font-semibold text-gray-800">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
