import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/shagormahamud93", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sagar-ali/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mahamudshagor93@gmail.com", label: "Mail" },
];

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Built with <Heart size={14} className="text-destructive" /> by Sagor Ali © {new Date().getFullYear()}
      </p>
      <div className="flex items-center gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
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
