
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} HIIT do Ódio. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Este produto não substitui o parecer profissional. Sempre consulte um profissional da saúde para tratar de assuntos relativos à saúde.</p>
      </div>
    </footer>
  );
};
