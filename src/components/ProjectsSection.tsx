import { MapPin, ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     title: "The Iron Framework",
//     region: "The North",
//     description: "A mighty React component library forged from a thousand libraries, designed to rule all user interfaces in the realm.",
//     tech: ["React", "TypeScript", "Storybook"],
//     github: "#",
//     live: "#",
//     status: "Conquered",
//   },
//   {
//     title: "Dragon API",
//     region: "Valyria",
//     description: "A fire-breathing REST API that serves data faster than dragon fire spreads across a battlefield.",
//     tech: ["Node.js", "GraphQL", "PostgreSQL"],
//     github: "#",
//     live: "#",
//     status: "Conquered",
//   },
//   {
//     title: "Raven Messenger",
//     region: "King's Landing",
//     description: "Real-time messaging application that delivers messages swifter than the fastest raven in the Seven Kingdoms.",
//     tech: ["React Native", "Socket.io", "Redis"],
//     github: "#",
//     live: "#",
//     status: "In Progress",
//   },
//   {
//     title: "The Wall Dashboard",
//     region: "Castle Black",
//     description: "An analytics fortress that monitors and protects your data from wildlings and bugs alike.",
//     tech: ["Next.js", "D3.js", "AWS"],
//     github: "#",
//     live: "#",
//     status: "Conquered",
//   },
// ];

const projects = [
  {
    title: "Hybrid Malware Detection System",
    region: "Cyber Realm",
    description:
      "A hybrid malware detection system combining machine learning and deep learning techniques to accurately identify malicious files using static, dynamic, and CNN-based image analysis.",
    tech: ["Python", "Scikit-learn", "PyTorch", "Pandas", "NumPy"],
    github: "https://github.com/ASHEYYY13/Hybrid-malware-detection",
    live: "#",
    status: "Conquered",
  },
  {
    title: "Smart Email Reply Generator",
    region: "AI Domain",
    description:
      "An AI-powered email response generator that creates professional, casual, and friendly replies using Gemini AI, integrated as both a web app and browser extension.",
    tech: ["React", "Spring Boot", "Gemini AI", "Bootstrap"],
    github: "https://github.com/ASHEYYY13/Smart-Email-Generator-With-Browser-Extension",
    live: "#",
    status: "Conquered",
  },
  {
    title: "Cook’s Haven – Homemade Food Ordering Platform",
    region: "Local Marketplace",
    description:
      "A full-stack web application that connects home cooks with customers, enabling users to browse, order, and manage homemade food securely and efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "Spring Boot", "MySQL"],
    github: "https://github.com/arunkumarbtech/Cook-s-Haven",
    live: "#",
    status: "Conquered",
  },
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MapPin className="text-primary w-10 h-10" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            Conquered Territories
          </h2>
          <div className="divider-ornate w-48 mx-auto mb-6" />
          <p className="font-display text-muted-foreground tracking-widest text-sm uppercase">
            A Map of My Digital Conquests
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Status banner */}
              <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-display tracking-wider uppercase ${
                project.status === "Conquered" 
                  ? "bg-primary/20 text-primary border border-primary/30" 
                  : "bg-accent/20 text-accent-foreground border border-accent/30"
              }`}>
                {project.status}
              </div>

              <div className="p-8">
                {/* Region */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary/60" />
                  <span className="font-display text-xs text-muted-foreground tracking-widest uppercase">
                    {project.region}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-gradient-gold transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-foreground/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-display tracking-wider bg-muted text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-display tracking-wider"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Scrolls</span>
                  </a>
                  {/* <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-display tracking-wider"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Kingdom</span>
                  </a> */}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
