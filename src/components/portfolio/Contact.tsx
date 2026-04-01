// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Send } from "lucide-react";

// const Contact = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });
//   const [focused, setFocused] = useState<string | null>(null);

//   return (
//     <section id="contact" className="py-32 relative">
//       <div className="mx-auto max-w-6xl px-6" ref={ref}>
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="text-sm font-medium text-primary tracking-wider uppercase">Contact</span>
//             <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
//               Let's work together,<br />
//               <span className="gradient-text">and build something amazing</span>
//             </h2>

//             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//               Have an idea or project in mind? I'm always open to new opportunities.
//               Let’s connect and turn your ideas into real, high-quality digital products.
//             </p>

//             <div className="space-y-3 text-muted-foreground text-sm">
//               <p>📍 Dhaka, Bangladesh</p>
//               <p>✉️ mahamudshagor93@gmail.com</p>
//             </div>
//           </motion.div>

//           <motion.form
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="glass-card p-8 space-y-6"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             {[
//               { id: "name", label: "Name", type: "text" },
//               { id: "email", label: "Email", type: "email" },
//             ].map((field) => (
//               <div key={field.id} className="relative">
//                 <label
//                   htmlFor={field.id}
//                   className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === field.id
//                       ? "top-1 text-xs text-primary font-medium"
//                       : "top-3.5 text-sm text-muted-foreground"
//                     }`}
//                 >
//                   {field.label}
//                 </label>
//                 <input
//                   id={field.id}
//                   type={field.type}
//                   onFocus={() => setFocused(field.id)}
//                   onBlur={(e) => !e.target.value && setFocused(null)}
//                   className="w-full pt-5 pb-2 px-4 bg-secondary/50 rounded-xl border border-transparent focus:border-primary/30 focus:bg-card outline-none text-sm text-foreground transition-all duration-200"
//                 />
//               </div>
//             ))}
//             <div className="relative">
//               <label
//                 htmlFor="message"
//                 className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused === "message"
//                     ? "top-1 text-xs text-primary font-medium"
//                     : "top-3.5 text-sm text-muted-foreground"
//                   }`}
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 onFocus={() => setFocused("message")}
//                 onBlur={(e) => !e.target.value && setFocused(null)}
//                 className="w-full pt-5 pb-2 px-4 bg-secondary/50 rounded-xl border border-transparent focus:border-primary/30 focus:bg-card outline-none text-sm text-foreground transition-all duration-200 resize-none"
//               />
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.99 }}
//               type="submit"
//               className="w-full gradient-bg text-primary-foreground py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
//             >
//               Send Message <Send size={16} />
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;

    try {
      await fetch("https://formspree.io/f/mnjozrag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        }),
      });

      form.reset();
      setFocused(null);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      alert("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase">
              Contact
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6">
              Let's work together,<br />
              <span className="gradient-text">and build something amazing</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Have an idea or project in mind? I'm always open to new opportunities.
              Let’s connect and turn your ideas into real, high-quality digital products.
            </p>

            <div className="space-y-3 text-muted-foreground text-sm">
              <p>📍 Dhaka, Bangladesh</p>
              <p>✉️ mahamudshagor93@gmail.com</p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 space-y-6"
          >
            {[ 
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" }
            ].map((field) => (
              <div key={field.id} className="relative">
                <label
                  htmlFor={field.id}
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === field.id
                      ? "top-1 text-xs text-primary font-medium"
                      : "top-3.5 text-sm text-muted-foreground"
                  }`}
                >
                  {field.label}
                </label>

                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  onFocus={() => setFocused(field.id)}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full pt-5 pb-2 px-4 bg-secondary/50 rounded-xl border border-transparent focus:border-primary/30 focus:bg-card outline-none text-sm text-foreground transition-all duration-200"
                  required
                />
              </div>
            ))}

            <div className="relative">
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  focused === "message"
                    ? "top-1 text-xs text-primary font-medium"
                    : "top-3.5 text-sm text-muted-foreground"
                }`}
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                onFocus={() => setFocused("message")}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full pt-5 pb-2 px-4 bg-secondary/50 rounded-xl border border-transparent focus:border-primary/30 focus:bg-card outline-none text-sm text-foreground transition-all duration-200 resize-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full gradient-bg text-primary-foreground py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              {loading ? "Sending..." : "Send Message"} <Send size={16} />
            </motion.button>

            {success && (
              <p className="text-green-500 text-sm text-center">
                Message sent successfully ✅
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
