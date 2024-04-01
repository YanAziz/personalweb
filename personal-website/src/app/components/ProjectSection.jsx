"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Finance Web App",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Finance", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Education Web App",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Education", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Web App",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "E-commerce", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Social Media Web App",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Social Media", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Online Store Web App",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Online Store", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Blog Web App",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["All", "Blog", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Finance" isSelected={tag === "Finance"} />
        <ProjectTag onClick={handleTagChange} name="Education" isSelected={tag === "Education"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} tags={project} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
