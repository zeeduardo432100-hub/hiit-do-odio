
import React from 'react';
import { CTAButton } from './CTAButton';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 sm:py-24 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Chega de adiar. Comece a sua transformação hoje.</h2>
        <p className="mt-4 text-xl text-gray-300">
          Não precisa de academia. Não precisa de tempo.
          <br />
          <strong className="text-white">Só precisa de 10 minutos por dia.</strong>
        </p>
        <div className="mt-10">
          <CTAButton>QUERO O EBOOK POR R$19,90 AGORA</CTAButton>
        </div>
      </div>
    </section>
  );
};
