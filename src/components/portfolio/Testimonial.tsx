"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Rodopemu",
    product: "Digital Agency & Creative Portfolio NextJs Template",
    review:
      "Clean animation system and well-structured code. Very easy to customize and integrate into a modern project.",
    rating: 5,
  },
  {
    name: "Pillainarayanan",
    product: "Inventual - POS & Inventory Admin Flutter Template",
    review:
      "Great first impression. Not perfect, but excellent value for the price. Very satisfied overall.",
    rating: 5,
  },
  {
    name: "Michael Lee",
    product: "HRM & CRM Next js Dashboard Template | Manez",
    review:
      "Outstanding design quality and clean code structure. Everything is well documented and easy to work with.",
    rating: 5,
  },
  {
    name: "Vladislav Marinov",
    product: "Supportive and well-built template",
    review:
      "Top-notch quality. Clean UI and smooth performance. Exactly what I needed.",
    rating: 5,
  },
  {
    name: "Uthai Ou",
    product: "Royel - Luxury Hotel Booking React NextJs Template",
    review:
      "Beautiful design and very professional structure. Easy to customize and implement.",
    rating: 5,
  },
];
const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">
            What clients <span className="gradient-text">say</span>
          </h2>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 hover-lift h-full"
              >
                {/* Rating */}
                <div className="flex mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-muted-foreground text-sm mb-4">
                  “{item.review}”
                </p>

                {/* User Info */}
                <div>
                  <h4 className="font-semibold text-foreground">
                    {item.name}
                  </h4>
                  <span className="text-xs text-muted-foreground">
                    {item.product}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;