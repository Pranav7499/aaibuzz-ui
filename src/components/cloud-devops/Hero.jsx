import { motion } from "framer-motion";

export const Hero = () => {
  return (
    
    <section className="py-28 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold tracking-tight"
        >
          <span className="block text-4xl md:text-6xl text-slate-900">
            Cloud & DevOps
          </span>
          <span className="block text-4xl md:text-6xl text-blue-600">
            Services
          </span>
        </motion.h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
          Scalable cloud infrastructure and DevOps automation to accelerate
          your software delivery with security, performance, and reliability.
        </p>
      </div>
    </section>
  );
};
