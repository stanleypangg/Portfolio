import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Assuming ProjectCard is in components

// --- Sample Data: Replace with your actual projects ---
const projectsData = [
  {
    title: "StudySloth",
    description: "A full-stack web application inspired by NotebookLM that transforms learning materials into interactive study sessions. Features AI-powered content analysis, text-to-speech narration, and a friendly sloth mascot for motivation.",
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'OpenAI API', 'AWS', 'PostgreSQL', 'Tailwind CSS'],
    screenshot: "studysloth.png",
  },
  {
    title: "Title",
    description: "Description",
    technologies: ['React', 'JavaScript', 'Google Maps API', 'Yelp API', 'CSS3', 'Netlify'],
    screenshot: "/screenshots/food-finder-home.png", // Use a real path to your image
    githubLink: "https://github.com/your-username/toronto-food-finder",
    deploymentLink: "https://toronto-eats.netlify.app"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full text-white py-8 sm:py-12 md:py-16 overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Things I've Built
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A selection of projects that showcase my passion for software development and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              screenshot={project.screenshot}
              githubLink={project.githubLink}
              deploymentLink={project.deploymentLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;