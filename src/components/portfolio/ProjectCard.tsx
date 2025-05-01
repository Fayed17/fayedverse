
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/project/${project.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="aspect-video bg-slate-200 relative overflow-hidden">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-white text-navy hover:bg-white">
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </Badge>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
          <p className="text-slate-600 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
