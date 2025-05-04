
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/data/projects';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
          <Button asChild variant="outline">
            <Link to="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="portfolio-container py-12">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center text-sm text-slate-600 hover:text-navy mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
          <div className="aspect-video w-full bg-slate-100">
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <Badge className="mb-6 bg-teal text-white hover:bg-teal/90">
              {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
            </Badge>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-8">
                {project.detailedDescription}
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Project Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {project.images.map((image, index) => (
                  <div key={index} className="bg-slate-100 rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-teal/20 text-teal flex items-center justify-center mr-2 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Design Tool</h2>
              <Separator className="mb-4" />
              <div className="flex items-center space-x-2 mb-6">
                {project.type === 'figma' && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-navy">
                      <path d="M5 5.5C5 3.567 6.567 2 8.5 2H12V9H8.5C6.567 9 5 7.433 5 5.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9H12V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 9H8.5C6.567 9 5 10.567 5 12.5C5 14.433 6.567 16 8.5 16H12V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16H8.5C6.567 16 5 17.567 5 19.5C5 21.433 6.567 23 8.5 23C10.433 23 12 21.433 12 19.5V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 9H15.5C17.433 9 19 10.567 19 12.5C19 14.433 17.433 16 15.5 16H12V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">Figma</span>
                  </>
                )}
                
                {project.type === 'framer' && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-navy">
                      <path d="M12 15.5V22.5L5 15.5M5 15.5V8.5H12M5 15.5H12M12 15.5H19V8.5H12M12 8.5V1.5H19L12 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">Framer</span>
                  </>
                )}
                
                {project.type === 'webflow' && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-navy">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">Webflow</span>
                  </>
                )}
              </div>
              
              <Button className="w-full bg-navy hover:bg-navy/90">
                 <a href="https://www.behance.net/et191053fayed">View Project</a>
              </Button>
            
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetail;
