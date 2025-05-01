
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProjectTabs from '@/components/portfolio/ProjectTabs';
import { projects } from '@/data/projects';

const Portfolio = () => {
  return (
    <MainLayout>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="portfolio-container text-center">
          <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Explore my work across different design platforms, from wireframes to fully functional websites.
          </p>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="portfolio-container">
          <ProjectTabs projects={projects} />
        </div>
      </section>
    </MainLayout>
  );
};

export default Portfolio;
