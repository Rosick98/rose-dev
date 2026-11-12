
import {
  Mail,
  BriefcaseBusiness,
  Code2,
  Heart,
  ArrowRight
} from "lucide-react";

const contactLinks = [
  {
    title: "Email",
    description: "Drop me a message",
    icon: Mail,
    href: "mailto:elenamilagrosa@me.com"
  },
  {
  title: "LinkedIn",
  description: "Let's connect professionally",
  icon: BriefcaseBusiness,
  href: "https://www.linkedin.com/in/rosario-perez-ux"
},
  {
    title: "GitHub",
    description: "Check out my code",
    icon: Code2,
    href: "https://github.com/Rosick98"
  },
  {
    title: "Portfolio",
    description: "Explore more projects",
    icon: Heart,
    href: "/projects"
  }
];

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-container">

        <header className="contact-header">
          <span className="contact-eyebrow">
            GET IN TOUCH
          </span>

          <h1>
            Contact <span>Me</span>
          </h1>

          <p>
            Have a question, opportunity, or just want to connect?
            <br />
            I'd love to hear from you.
          </p>

          <div className="contact-header-line" />
        </header>

        <section className="contact-content">
          <div className="contact-links-column">
            <h2>LET'S CONNECT</h2>

            <div className="contact-links-list">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="contact-link-card"
                    target={
                      item.href.startsWith("https")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("https")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <div className="contact-link-icon">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    <div className="contact-link-text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <ArrowRight
                      className="contact-link-arrow"
                      size={21}
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="contact-form-card">
  <h2>Send a Message</h2>

  <form
  onSubmit={async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/mbgolalv",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Your message was sent successfully!");
        form.reset();
      } else {
        alert("Message could not be sent. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  }}
  >
    <div className="contact-form-row">
      <input
        type="text"
        name="name"
        placeholder="Name *"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email *"
        required
      />
    </div>

    <input
      type="text"
      name="subject"
      placeholder="Subject *"
      required
    />

    <textarea
      name="message"
      placeholder="Message *"
      rows="6"
      required
    />

    <button type="submit" className="contact-submit">
      Send Message
      <ArrowRight size={20} />
    </button>
  </form>
</div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
