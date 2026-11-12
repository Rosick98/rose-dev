function ProjectCard({ title, description, technologies, image, github, demo }) {
  return (
    <article className="project-card">

      <div className="project-image">
        {image ? (
          <img src={image} alt={`${title} preview`} />
        ) : (
          <span>Project Preview Coming Soon</span>
        )}
      </div>

      <div className="project-info">
        <h2>{title}</h2>

        <p>{description}</p>

        <div className="project-tags">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}

          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>

    </article>
  );
}

export default ProjectCard;