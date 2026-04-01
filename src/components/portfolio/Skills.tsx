import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  },
{
  title: "Mobile",
  skills: ["Flutter", "Dart", "REST API Integration", "Firebase", "Responsive UI"],
},
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Postman"],
  },
  {
    title: "Design",
    skills: ["Figma", "Responsive Design", "UI/UX Basics"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Skills</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
            My <span className="gradient-text">toolkit</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * ci }}
              className="glass-card p-8 hover-lift"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground cursor-default transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
