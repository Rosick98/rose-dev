import {
  BriefcaseBusiness,
  Laptop,
  Rocket,
  Check
} from "lucide-react";

const experiences = [
  {
    period: "2018 – PRESENT",
    title: "Operations Management",
    description:
      "Led teams, optimized processes, and solved complex challenges in fast-paced environments.",
    icon: BriefcaseBusiness,
    skills: [
      "Leadership & Team Management",
      "Problem Solving",
      "Process Improvement"
    ]
  },
  {
    period: "2021 – PRESENT",
    title: "Programming Journey",
    description:
      "Built projects and strengthened my technical skills in web development and automation.",
    icon: Laptop,
    skills: [
      "HTML, CSS, JavaScript",
      "Python",
      "Software Development"
    ]
  },
  {
    period: "ONGOING",
    title: "Looking Ahead",
    description:
      "Continuing to grow as a developer and contribute to innovative solutions.",
    icon: Rocket,
    skills: [
      "Expand Technical Expertise",
      "Explore New Technologies",
      "Make an Impact"
    ]
  }
];

function Experience() {
  return (
    <main className="experience-page">
      <div className="experience-container">
        <header className="experience-header">
          <span className="section-label">MY EXPERIENCE</span>

          <h1>
            My <span>Journey</span>
          </h1>

          <p>
            A path of continuous learning, problem-solving,
            and growth — from operations to code.
          </p>
        </header>

        <section className="experience-timeline">
          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <div className="experience-row" key={experience.title}>
                <div className="experience-date">
                  <span className="timeline-dot"></span>
                  <span>{experience.period}</span>
                </div>

                <article className="experience-card">
                  <div className="experience-icon">
                    <Icon size={36} strokeWidth={1.8} />
                  </div>

                  <div className="experience-details">
                    <h2>{experience.title}</h2>
                    <p>{experience.description}</p>
                  </div>

                  <ul className="experience-skills">
                    {experience.skills.map((skill) => (
                      <li key={skill}>
                        <Check size={17} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            );
          })}
        </section>

        <section className="experience-skillset">
          <div className="skillset-intro">
            <span className="section-label">SKILLS & TOOLS</span>

            <h2>
              My <span>Skill</span> Set
            </h2>

            <p>
              A combination of technical skills and
              professional strengths.
            </p>

            <a href="/projects" className="skillset-button">
              View My Projects →
            </a>
          </div>

          <div className="skillset-grid">
            <div className="skillset-card">
              <h3>⌨ Programming Languages</h3>
              <div className="skillset-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Python</span>
              </div>
            </div>

            <div className="skillset-card">
              <h3>⚙ Tools & Technologies</h3>
              <div className="skillset-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Figma</span>
              </div>
            </div>

            <div className="skillset-card professional-skills">
              <h3>★ Professional Skills</h3>
              <div className="skillset-tags">
                <span>Problem Solving</span>
                <span>Analytical Thinking</span>
                <span>Communication</span>
                <span>Adaptability</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Experience;