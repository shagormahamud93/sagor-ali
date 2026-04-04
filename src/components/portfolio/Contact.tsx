
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // form state (important fix)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/mnjozrag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // reset
      setFormData({
        name: "",
        email: "",
        message: "",
      });

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

          {/* LEFT */}
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
              { id: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.id} className="relative">

                {/* ✅ label fix */}
                <label
                  htmlFor={field.id}
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === field.id || formData[field.id as keyof typeof formData]
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
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  onFocus={() => setFocused(field.id)}
                  onBlur={() => setFocused(null)}
                  className="w-full pt-5 pb-2 px-4 bg-secondary/50 rounded-xl border border-transparent focus:border-primary/30 focus:bg-card outline-none text-sm text-foreground transition-all duration-200"
                  required
                />
              </div>
            ))}

            {/* MESSAGE */}
            <div className="relative">
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  focused === "message" || formData.message
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
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full pt-5 pb-2 px-4 bg-secondary/50 rounded-xl border border-transparent focus:border-primary/30 focus:bg-card outline-none text-sm text-foreground transition-all duration-200 resize-none"
                required
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full gradient-bg text-primary-foreground py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              {loading ? "Sending..." : "Send Message"} <Send size={16} />
            </motion.button>

            {/* SUCCESS */}
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
