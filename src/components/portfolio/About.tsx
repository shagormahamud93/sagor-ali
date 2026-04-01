import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Scalable and maintainable code with best practices" },
  { icon: Palette, title: "UI/UX Focus", desc: "Designs that are simple, modern, and user-friendly" },
  { icon: Rocket, title: "High Performance", desc: "Optimized apps with smooth and fast experience" },
  { icon: Zap, title: "Modern Stack", desc: "Using latest tools and technologies to build better" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">About</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
            Building modern web experiences,<br />
            <span className="gradient-text">one line of code at a time</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I’m a passionate developer focused on crafting fast, scalable, and user-friendly web applications.
            I love turning ideas into real products with clean design and smooth user experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
