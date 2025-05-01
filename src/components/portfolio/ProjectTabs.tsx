
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectTabsProps {
  projects: Project[];
}

const ProjectTabs = ({ projects }: ProjectTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProjects = activeTab === 'all' 
    ? projects
    : projects.filter(project => project.type === activeTab);
    
  return (
    <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-4 mb-8">
        <TabsTrigger value="all">All Projects</TabsTrigger>
        <TabsTrigger value="figma">Figma</TabsTrigger>
        <TabsTrigger value="framer">Framer</TabsTrigger>
        <TabsTrigger value="webflow">Webflow</TabsTrigger>
      </TabsList>
      
      <TabsContent value={activeTab} className="mt-0">
        <div className="project-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-slate-500">No projects found in this category</h3>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default ProjectTabs;
