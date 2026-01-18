import { Scroll, MapPin, Calendar } from "lucide-react";

const experiences = [
  // {
  //   title: "Lord Commander of Engineering",
  //   company: "The Night's Watch Tech",
  //   location: "Castle Black, The Wall",
  //   period: "2022 - Present",
  //   description: "Leading a sworn brotherhood of developers in defending the realm against legacy code and technical debt. Architecting scalable solutions that guard the realms of men.",
  //   achievements: [
  //     "Commanded a team of 12 developers across 3 kingdoms",
  //     "Reduced deployment time by 70% through CI/CD pipelines",
  //     "Migrated legacy systems to modern cloud infrastructure",
  //   ],
  // },
  // {
  //   title: "Master of Coin (Tech Lead)",
  //   company: "Iron Bank of Braavos",
  //   location: "Braavos, The Free Cities",
  //   period: "2020 - 2022",
  //   description: "Managed the digital vaults and payment systems for the richest institution in the known world. The Iron Bank always delivers... its API responses.",
  //   achievements: [
  //     "Processed over 1M transactions per day",
  //     "Implemented fraud detection saving 2M gold dragons annually",
  //     "Built real-time reporting dashboards for the bank's masters",
  //   ],
  // },
  // {
  //   title: "Maester of Code",
  //   company: "The Citadel",
  //   location: "Oldtown, The Reach",
  //   period: "2018 - 2020",
  //   description: "Forged my chains in the ancient halls of learning, mastering the arts of programming, system design, and debugging scrolls written by long-dead developers.",
  //   achievements: [
  //     "Earned chains in JavaScript, Python, and SQL",
  //     "Built the Citadel's first mobile application",
  //     "Trained 20+ acolytes in modern development practices",
  //   ],
  // },
  // {
  //   title: "Squire Developer",
  //   company: "House Startup",
  //   location: "King's Landing, Westeros",
  //   period: "2016 - 2018",
  //   description: "Served under seasoned knights of code, learning the ways of agile warfare and test-driven combat. Every bug squashed was a step toward knighthood.",
  //   achievements: [
  //     "Shipped 15+ features to production",
  //     "Wrote comprehensive test suites for legacy modules",
  //     "Participated in 100+ code reviews",
  //   ],
  // },

    {
    title: "Full Stack Developer",
    company: "Wenext Technologies",
    location: "Chennai, India",
    period: "June 2025 - Present",
    description:
      "Working as a Full Stack Developer contributing to enterprise insurance platforms. Involved in both frontend and backend development for core business modules and customer-facing portals.",
    achievements: [
      "Developed and enhanced features in the Underwriting module",
      "Worked on Re-Insurance (RI) module handling complex business flows",
      "Built frontend components and backend APIs using Spring Boot",
      "Integrated APIs for B2C Customer Portal ensuring smooth data flow",
      "Collaborated with team members to debug and improve existing modules",
    ],
  },
  {
    title: "Network & Data Center Intern",
    company: "Airport Authority of India",
    location: "Chennai, India",
    period: "July 2024",
    description:
      "Gained hands-on exposure to real-world data center and networking operations in a critical airport environment.",
    achievements: [
      "Learned server configurations and data center infrastructure",
      "Understood networking components like routers, firewalls, and switches",
      "Studied secure terminal-to-network communication",
      "Submitted a detailed report on data center networking architecture",
    ],
  },
  {
    title: "Bachelor of Technology – Computer Science",
    company: "Bharath Institute of Higher Education and Research",
    location: "Chennai, India",
    period: "2021 - 2025",
    description:
      "Built a strong foundation in computer science concepts while developing practical skills through projects and internships.",
  achievements: [
  "Graduated with a CGPA of 8.2 with strong foundations in core computer science subjects",
  "Built academic and personal projects using Java, Spring Boot, React, and MySQL",
  "Developed a Hybrid Malware Detection System using Machine Learning and Deep Learning techniques",
  "Actively practiced Data Structures and Algorithms on LeetCode and GeeksforGeeks",
],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Scroll className="text-primary w-10 h-10" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            The Chronicles
          </h2>
          <div className="divider-ornate w-48 mx-auto mb-6" />
          <p className="font-display text-muted-foreground tracking-widest text-sm uppercase">
            A Timeline of Battles Fought & Won
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />
              
              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="group relative bg-card border border-border hover:border-primary/50 transition-all duration-500 p-6">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50" />

                  {/* Period badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-display text-xs text-primary tracking-widest uppercase">
                      {exp.period}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="font-display text-xl text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="font-display text-sm text-gradient-gold mb-2">
                    {exp.company}
                  </p>
                  
                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="font-body text-xs text-muted-foreground">
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">⚔</span>
                        <span className="font-body text-xs text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
