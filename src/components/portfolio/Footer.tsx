import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart,Facebook } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/shagor.akash.100/", label: "Facebook" },
  { icon: Github, href: "https://github.com/shagormahamud93", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-ali/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mahamudshagor93@gmail.com", label: "Mail" },
];

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
       <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-muted-foreground flex items-center gap-2"
      >
        <span className="opacity-70">© {new Date().getFullYear()}</span>

        <span className="hidden sm:inline">•</span>

        <span className="gradient-text font-medium">
          Sagor Ali
        </span>

        <span className="hidden sm:inline">•</span>

        <span className="flex items-center gap-1">
          Crafted with
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart size={14} className="text-destructive" />
          </motion.span>
        </span>
      </motion.p>
      <div className="flex items-center gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_black"
            aria-label={label}
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-lg transition-all"
          >
            <Icon size={16} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
