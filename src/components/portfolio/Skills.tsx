import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/skillsData";

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Skills
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
            My <span className="gradient-text">toolkit</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.categoryTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * ci }}
              className="glass-card p-8 hover-lift"
            >
              {/* Category Title */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                {category.categoryTitle}
              </h3>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.skillName}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary">
                      <img
                        src={skill.skillIcon}
                        alt={skill.skillName}
                        width={24}
                        height={24}
                      />
                    </div>

                    {/* Name + Progress */}
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-foreground">
                          {skill.skillName}
                        </span>
                        <span className="text-muted-foreground">
                          {skill.skillLevel}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.skillLevel}%` } : {}
                          }
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
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