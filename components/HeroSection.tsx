
import React from 'react';
import { CTAButton } from './CTAButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-28 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tight leading-tight">
          10 Minutos Por Dia Pra <span className="text-orange-500">Secar a Barriga</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          — Sem academia, sem equipamento e sem passar fome.
        </p>
        <p className="mt-8 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          O protocolo rápido e insano que tá fazendo geral suar e perder barriga em 30 dias.
        </p>
        <div className="mt-12">
          <CTAButton>QUERO O EBOOK POR R$19,90 AGORA</CTAButton>
        </div>
      </div>
    </section>
  );
};
