
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <MainLayout>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="portfolio-container">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <p className="text-lg text-slate-700 mb-4">
                I'm a UI/UX designer with expertise in Figma, Framer, and Webflow. My approach combines creativity with user-centered design principles to create elegant, functional digital experiences.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                With years of experience working with startups and established companies, I specialize in creating intuitive interfaces that solve real user problems while meeting business objectives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-navy hover:bg-navy/90">
                  <Link to="/portfolio">View My Work</Link>
                </Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=800" 
                  alt="Designer at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-slate-50">
        <div className="portfolio-container">
          <h2 className="text-3xl font-bold mb-12 text-center">My Design Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                description: "Understanding the problem, users, and business goals through thorough research."
              },
              {
                step: "02",
                title: "Ideate",
                description: "Generating multiple solutions and concepts through sketching and wireframing."
              },
              {
                step: "03",
                title: "Design",
                description: "Creating high-fidelity designs and prototypes for testing and validation."
              },
              {
                step: "04",
                title: "Implement",
                description: "Turning designs into reality through development or no-code solutions."
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 bg-navy/10 text-navy rounded-lg flex items-center justify-center mb-4 font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-slate-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="portfolio-container">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "UI Design",
              "UX Research",
              "Prototyping",
              "Wireframing",
              "Design Systems",
              "User Testing",
              "Responsive Design",
              "Interaction Design"
            ].map((skill, index) => (
              <div key={index} className="bg-slate-50 py-4 px-6 rounded-lg text-center hover:bg-slate-100 transition-colors">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
