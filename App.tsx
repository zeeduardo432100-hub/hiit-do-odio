
import React from 'react';

import { HeroSection } from './components/HeroSection';
import { PainSection } from './components/PainSection';
import { BenefitsSection } from './components/BenefitsSection';
import { MethodSection } from './components/MethodSection';
import { ResultsSection } from './components/ResultsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <main>
        <HeroSection />
        <PainSection />
        <SectionDivider />
        <BenefitsSection />
        <SectionDivider />
        <MethodSection />
        <SectionDivider />
        <ResultsSection />
        <SectionDivider />
        <GuaranteeSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
