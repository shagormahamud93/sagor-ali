import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "MERN Developer",
    company: "Themepure",
    period: "Mar 2025 — Present",
    desc: "Developing modern web applications using Next.js, React, and TypeScript. Building high-performance, responsive interfaces with smooth GSAP animations and interactive UI components.",
  },
  {
    role: "MERN Developer",
    company: "Bdevs",
    period: "Feb 2023 — Feb 2025",
    desc: "Built scalable web applications using React, Next.js, and Node.js. Focused on clean, maintainable code and improving overall performance and user experience.",
  },
  {
    role: "Web Design Trainee",
    company: "European IT",
    period: "2022",
    desc: "Learned fundamentals of web design, including responsive layouts, UI/UX principles, and modern design practices.",
  },
  {
    role: "Web Development Learner",
    company: "Programming Hero",
    period: "2022",
    desc: "Completed a 6-month web development course covering HTML, CSS, JavaScript, React, and basic backend concepts.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Experience</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
            My <span className="gradient-text">journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="flex gap-8 relative"
              >
                {/* Dot */}
                <div className="relative z-10 mt-1.5 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full gradient-bg" />
                  </div>
                </div>

                <div className="glass-card p-6 flex-1 hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-display font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs text-muted-foreground font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
