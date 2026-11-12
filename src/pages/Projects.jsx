import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-header">
        <span className="about-label">› MY WORK</span>

        <h1>
          Featured <span>Projects.</span>
        </h1>

        <p>
          A collection of projects where I've explored
          development, design, and creative problem-solving.
          Each one represents something new I've learned.
        </p>
      </section>

     <section className="projects-grid">
        <ProjectCard
  title="Fuego"
  description="An application designed to help immigrants access important information, resources, and support through a user-friendly experience."
  technologies={["Figma", "UX/UI Design"]}
  image="/images/Fuego.png"
/>

<ProjectCard
  title="Rose.dev"
  description="My personal developer portfolio, built to showcase my projects, technical skills, and journey into software development."
  technologies={["React", "JavaScript", "CSS", "Vite"]}
  image="/images/Rose-dev.png"
/>

<ProjectCard
  title="HVAC Controller Analysis Toolkit"
  description="A Python-based automation toolkit that analyzes HVAC controller dump files, counts network nodes, traces point references, calculates network loop requirements, and generates structured reports to simplify controller analysis."
  technologies={[
    "Python",
    "File Parsing",
    "Regex",
    "Data Analysis",
    "OpenPyXL",
    "Automation"
  ]}
  image="/images/hvac-tool.png"
/>
</section>
    </main>
  );
}

export default Projects;