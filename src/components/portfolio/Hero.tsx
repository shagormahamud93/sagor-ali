import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const titles = ["MERN Stack Developer", "Front End Developer", "Flutter Developer","Creative Technologist"];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full gradient-bg opacity-[0.07] blur-3xl animate-float" />
        <div className="absolute bottom-32 left-[10%] w-96 h-96 rounded-full bg-accent opacity-[0.05] blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-[30%] w-48 h-48 rounded-full bg-primary opacity-[0.04] blur-2xl animate-float" />
      </div>

      <div className="mx-auto max-w-6xl px-6 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-8"
            >
              <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Sagor Ali</span>
            </h1>

            <div className="h-10 mb-8">
              <span className="font-display text-xl sm:text-2xl text-muted-foreground">
                {displayed}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              I build modern, scalable, and interactive
              digital experiences from full-stack web
              applications to cross-platform Flutter apps.
              Passionate about clean design, smooth UX,
              and powerful functionality.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="gradient-bg text-primary-foreground px-7 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 rounded-xl text-sm font-semibold border border-border text-foreground hover:bg-secondary transition-colors"
              >
                Get in Touch
              </motion.a>
            </div>

            <div className="flex items-center gap-4 mt-12">
              {[
                { icon: Github, href: "https://github.com/shagormahamud93" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-ali/" },
                { icon: Mail, href: "mailto:mahamudshagor93@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-3xl gradient-bg opacity-10 rotate-6 animate-float" />
              <div className="absolute inset-4 rounded-2xl bg-card shadow-2xl border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-mono text-xs text-muted-foreground mb-4 text-left">
                    <span className="text-primary">const</span> developer = {"{"}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground text-left pl-4 space-y-1">
                    <div><span className="text-accent">passion</span>: <span className="text-primary">"building"</span>,</div>
                    <div><span className="text-accent">focus</span>: <span className="text-primary">"quality"</span>,</div>
                    <div><span className="text-accent">coffee</span>: <span className="text-muted-foreground">Infinity</span>,</div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground text-left mt-1">{"}"}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
