import { Flame, Snowflake, Swords, BookOpen, Target, Compass } from "lucide-react";

const skills = [
  {
    icon: Flame,
    title: "Frontend Development",
    house: "UI Engineering",
    words: "Clean, Responsive Interfaces",
    abilities: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Tailwind CSS"
    ],
  },
  {
    icon: Swords,
    title: "Backend Development",
    house: "Server & APIs",
    words: "Reliable Backend Logic",
    abilities: [
      "Java",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "MySQL",
    ],
  },
   {
  icon: BookOpen,
  title: "Problem Solving",
  house: "Core Computer Science",
  words: "Strong Fundamentals, Clear Thinking",
  abilities: [
    "Data Structures",
    "Algorithms",
    "DBMS",
    "OOPS",
    "Computer Networks",
  ],
},
    {
    icon: Compass,
    title: "Developer Tools",
    house: "Daily Workflow",
    words: "Built With the Right Tools",
    abilities: [
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Git",
      "PL/SQL",
    ],
  },

  {
  icon: Target,
  title: "Machine Learning",
  house: "Data & Models",
  words: "Learning From Data",
  abilities: [
    "Python",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "PyTorch",
  ],
},

  // {
  //   icon: Snowflake,
  //   title: "Cloud Command",
  //   house: "House AWS",
  //   words: "Winter Deploys Coming",
  //   abilities: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  // },
 
  // {
  //   icon: Target,
  //   title: "Mobile Conquest",
  //   house: "House Native",
  //   words: "Ours Is The App",
  //   abilities: ["React Native", "Flutter", "iOS", "Android"],
  // },
  // {
  //   icon: Compass,
  //   title: "Design Arts",
  //   house: "House Figma",
  //   words: "Unbowed, Unbroken, Unresponsive... Wait",
  //   abilities: ["UI/UX", "Figma", "Responsive Design", "Accessibility"],
  // },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Swords className="text-primary w-10 h-10" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            Arsenal of Skills
          </h2>
          <div className="divider-ornate w-48 mx-auto mb-6" />
          <p className="font-display text-muted-foreground tracking-widest text-sm uppercase">
            The Great Houses of My Expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative bg-card border border-border hover:border-primary/50 transition-all duration-500 p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50" />

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <skill.icon className="w-12 h-12 text-primary group-hover:glow-gold transition-all duration-300" />
              </div>

              {/* House Name */}
              <p className="font-display text-xs text-muted-foreground tracking-widest text-center uppercase mb-1">
                {skill.house}
              </p>

              {/* Title */}
              <h3 className="font-display text-xl text-center text-foreground mb-2">
                {skill.title}
              </h3>

              {/* House Words */}
              <p className="font-body text-sm text-primary/80 italic text-center mb-4">
                "{skill.words}"
              </p>

              {/* Abilities */}
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.abilities.map((ability) => (
                  <span
                    key={ability}
                    className="px-3 py-1 text-xs font-display tracking-wider uppercase bg-muted text-muted-foreground border border-border"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
