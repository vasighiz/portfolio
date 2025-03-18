import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "CRISPR Dashboard",
      description: "A comprehensive dashboard built with Streamlit for analyzing CRISPR experiments. Features include data visualization, statistical analysis, and interactive filtering capabilities.",
      technologies: ["Python", "Streamlit", "MAGeCK", "Pandas", "Plotly"],
      githubUrl: "https://github.com/yourusername/crispr-dashboard",
      liveUrl: "https://crispr-dashboard-demo.streamlit.app",
    },
    {
      title: "ML Portfolio",
      description: "A modern, responsive portfolio website showcasing machine learning projects and technical skills. Built with React, Tailwind CSS, and Framer Motion for smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/ml-portfolio",
      liveUrl: "https://your-portfolio-demo.netlify.app",
    },
    {
      title: "Data Analysis Pipeline",
      description: "An automated data analysis pipeline for processing large-scale genomic datasets. Includes data cleaning, normalization, and statistical analysis modules.",
      technologies: ["Python", "Snakemake", "R", "Bioconductor"],
      githubUrl: "https://github.com/yourusername/data-pipeline",
      liveUrl: "",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-light mb-8 text-gray-900">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
