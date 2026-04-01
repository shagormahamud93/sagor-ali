import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    projectUrl: "https://themeforest.net/item/agntix-digital-agency-creative-portfolio-nextjs-template/59844674?s_rank=4",
    title: "Agntix – Digital Agency & Portfolio",
    image: "/projects/agntix_preview-image.png",
    desc: "A Modern and Responsive Agency & Portfolio Template built with Next.js",
    tags: ["Next.js", "TypeScript", "GSAP", "Boostrap"],
    color: "from-blue-500/20 to-violet-500/20",
    featured: true,
  },
  {
    projectUrl: "https://themeforest.net/item/orgado-ecommerce-next-template/48140546?s_rank=19",
    title: "Orgado - Organic Food eCommerce Next Template + Admin Panel",
    image: "/projects/orgado.jpg",
    desc: "Orgado is a modern agriculture-focused e-commerce platform built with React, Next.js, TypeScript, Node.js, and Express.",
    tags: ["Next.js", "Mongodb", "Express js", "Mongose", "Stripe"],
    color: "from-emerald-500/20 to-teal-500/20",
    featured: true,
  },
  {
    projectUrl: "https://themeforest.net/item/hrm-crm-next-js-dashboard-template-manez/55890159?s_rank=5",
    title: "Manez – HRM & CRM Dashboard",
    image: "/projects/manez_preview_preview.png",
    desc: "A Complete HRM & CRM Admin Dashboard Template built with Next.js",
    tags: ["Next.js", "Typescript", "Redux", "Tailwind CSS"],
    color: "from-amber-500/20 to-orange-500/20",
    featured: true,
  },
  {
    projectUrl: "https://trx-gold-front-end.vercel.app/",
    title: "Money Hunt - investment site",
    image: "/projects/trx_gold.jpg",
    desc: "Built a full-stack crypto platform with profit tracking, referrals, and admin management.",
    tags: ["Node.js", "Next.js", "Express js", "Mongodb"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Projects</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
            Selected <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured - large cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter((p) => p.featured).map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group glass-card overflow-hidden hover-lift"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>

                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="font-display text-4xl font-bold text-foreground/10 group-hover:scale-110 transition-transform duration-500">
                    <a href={project.projectUrl}>
                      <img src={project.image} alt="project image" />
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      <a href={project.projectUrl}>{project.title}</a>
                    </h3>
                    <div className="flex gap-2">
                      <motion.button whileHover={{ scale: 1.1 }} className="text-muted-foreground hover:text-foreground transition-colors">
                        <a href="https://github.com/shagormahamud93"><Github size={18} /></a>
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} className="text-muted-foreground hover:text-foreground transition-colors">
                        <a href={project.projectUrl}><ExternalLink size={18} /></a>
                      </motion.button>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other projects - smaller */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.filter((p) => !p.featured).map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * i }}
                className="glass-card p-6 hover-lift group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
                  <div className="flex gap-2">
                    <motion.button whileHover={{ scale: 1.1 }} className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
