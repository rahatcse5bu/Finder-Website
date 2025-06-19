import React from 'react';
import { Layout } from '../components/Layout';
import {
  HeroSection,
  ServicesSection,
  TestimonialsSection,
  AppDownloadSection
} from '../components/Home';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <AppDownloadSection />
    </Layout>
  );
};

export default HomePage;
