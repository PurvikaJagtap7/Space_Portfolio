import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Modern Portfolio created using Next.js with amazing features."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Visually appealing Website Cards designed for your next project."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="3D Animated Next.js Space Theme Portfolio developed by Purvika Jagtap"
        />
      </div>
    </div>
  );
};

export default Projects;