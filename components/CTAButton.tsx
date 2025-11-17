
import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, className = '' }) => {
  return (
    <a
      href="https://pay.cakto.com.br/4djfgw2_654940"
      className={`inline-block text-center bg-orange-500 text-white font-bold text-lg sm:text-xl px-10 py-4 rounded-lg shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${className}`}
    >
      {children}
    </a>
  );
};
