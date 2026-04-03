import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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
    image: "/projects/trx.png",
    desc: "Built a full-stack crypto platform with profit tracking, referrals, and admin management.",
    tags: ["Node.js", "Next.js", "Express js", "Mongodb"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
  //more project
  {
    projectUrl: "https://themeforest.net/item/harri-electronics-ecommerce-react-next-js-template/43419763?s_rank=4",
    title: "Electronics eCommerce React Next js Template + Admin Panel",
    image: "/projects/harri.jpg",
    desc: "Harri is a clean, minimal Next.js eCommerce template with REST API integration, suitable for multipurpose online stores.",
    tags: ["Node.js", "Next.js", "Express js", "Mongodb"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
  {
    projectUrl: "https://themeforest.net/item/shofy-ecommerce-nextjs-template/45884638?s_rank=6",
    title: "eCcommerce Next js Template + Admin panel",
    image: "/projects/shofy.jpg",
    desc: "Shofy is a modern, full-stack Next.js eCommerce template with an integrated admin panel, built for creating professional online stores.",
    tags: ["Node.js", "Next.js", "Express js", "Mongodb"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
  {
    projectUrl: "https://themeforest.net/item/education-online-courses-nextjs-template-istudy/57588432?s_rank=2",
    title: "Education & Online Courses NextJs Template",
    image: "/projects/istudy.png",
    desc: "iStudy is a modern Next.js education template for online courses and learning platforms, with a clean and responsive design.",
    tags: ["Next.js", "Typesript", "Bootstrap", "Sass"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
  {
    projectUrl: "https://play.google.com/store/apps/details?id=com.erp.educare",
    title: "Erp EduCare",
    image: "/projects/erp.jpg",
    desc: "Erp EduCare is a school ERP software for managing academics, administration, finance, communication, and e-learning.",
    tags: ["Flutter", "Dart", "IOS", "GetX", "API"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
  {
    projectUrl: "https://codecanyon.net/item/inventual-complete-pos-inventory-website-and-mobile-flutter-app/53982624?gad_source=1&gad_campaignid=12562519391&gbraid=0AAAAADgFCsDwDTcUplwu8Dec7ffLrISOB&gclid=Cj0KCQjwyr3OBhD0ARIsALlo-Olb7FJqRPmGkK6ff4M-WSIxvktck5VqJ9jaeCuNhQw89kOdJhdMA8UaApshEALw_wcB",
    title: "Complete POS, Inventory Website and Mobile Flutter App",
    image: "/projects/inventual.jpg",
    desc: "Inventual is a complete POS system with multi-store support, inventory management, and a Flutter mobile app for shops and eCommerce.",
    tags: ["Flutter", "Dart", "IOS", "GetX", "API"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
  {
    projectUrl: "https://codecanyon.net/item/invoshop-ecommerce-flutter-template-for-android-ios/54520486?srsltid=AfmBOoqdSYzmdC4zHoCscC36BP3SDL5N27R3vZR0PfDO030saCp5w-dN",
    title: "Ecommerce Flutter Template for Android & iOS",
    image: "/projects/invoshop.png",
    desc: "Invoshop is a versatile Flutter UI template built for grocery eCommerce apps.",
    tags: ["Flutter", "Dart", "IOS", "GetX"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
  {
    projectUrl: "https://codecanyon.net/item/cashiar-accounting-dashboard-template-for-android-ios/55338702?srsltid=AfmBOoqemLUaiF8jDkcv92__CVjJVfaIuHoqAPsmwCykawwwiIds_wc6",
    title: "Accounting Dashboard Template for Android & iOS",
    image: "/projects/cashiar.png",
    desc: "Bfresh is a Flutter grocery app template for Android and iOS, with 45+ screens and complete eCommerce features.",
    tags: ["Flutter", "Dart", "IOS", "GetX"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
  {
    projectUrl: "https://codecanyon.net/item/bfresh-full-grocery-flutter-app-for-android-ios/58292381?s_rank=3",
    title: "Full Grocery Flutter App for Android & iOS",
    image: "/projects/bfresh.jpg",
    desc: "Bfresh is a Flutter grocery app template for Android and iOS, with 45+ screens and complete eCommerce features.",
    tags: ["Flutter", "Dart", "IOS", "GetX"],
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },

];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Load more state
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Projects
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
            Selected <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        {/* Featured + Other (VISIBLE ONLY) */}
        <div className="grid gap-8">

          {/* Featured */}
          <div className="grid lg:grid-cols-2 gap-8">
            {visibleProjects
              .filter((p) => p.featured)
              .map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="group glass-card overflow-hidden hover-lift"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        <a href={project.projectUrl}>{project.title}</a>
                      </h3>

                      <div className="flex gap-2">
                        <a href="https://github.com">
                          <Github size={18} />
                        </a>
                        <a href={project.projectUrl}>
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-secondary text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Load More Button */}
          {visibleCount < projects.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 rounded-md bg-primary text-white hover:opacity-90 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
