
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 section-padding">
        <div className="portfolio-container">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy">
                UI/UX Designer Creating Modern Experiences
              </h1>
              <p className="text-lg text-slate-700 mb-8">
                Crafting beautiful interfaces with Figma, Framer, and Webflow to bring digital products to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-navy hover:bg-navy/90" size="lg">
                  <Link to="/portfolio">Download CV</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">About Me</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-teal to-purple opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=600" 
                  alt="Designer workspace" 
                  className="w-[90%] h-[90%] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section-padding">
        <div className="portfolio-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Design Expertise</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              I specialize in creating seamless user experiences across multiple design platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-teal/10 flex items-center justify-center rounded-md mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal"><path d="M15 5L9 12L15 19"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Figma</h3>
              <p className="text-slate-600">
                Creating high-fidelity prototypes, design systems, and interactive wireframes with Figma.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-teal/10 flex items-center justify-center rounded-md mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Framer</h3>
              <p className="text-slate-600">
                Building interactive prototypes and micro-interactions to showcase realistic user flows.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-teal/10 flex items-center justify-center rounded-md mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal"><path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z"></path><polygon points="10 15 15 12 10 9"></polygon></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Webflow</h3>
              <p className="text-slate-600">
                Designing and developing responsive websites with custom animations and interactions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="bg-slate-50 section-padding">
        <div className="portfolio-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              A selection of my recent design work across different platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <Link 
                to="/portfolio" 
                key={project}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-slate-200 relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-148${project}312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=350`} 
                      alt={`Featured project ${project}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-medium">
                      {project === 1 ? 'Figma' : project === 2 ? 'Framer' : 'Webflow'}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-1">Project Title {project}</h3>
                    <p className="text-slate-600 text-sm">
                      A short description of this amazing design project.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
