import React from 'react';
import projectsData from '../data/projects';

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projectsData.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;