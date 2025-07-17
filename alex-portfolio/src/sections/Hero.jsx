import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-white"
      >
        Alex Alarcón
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-xl md:text-2xl text-gray-300 max-w-xl"
      >
        Desarrollador web full-stack apasionado por el diseño, la creatividad y
        la tecnología 3D.
      </motion.p>

      {/* 🔘 Botón animado */}
      <a
        href="#projects"
        className="mt-8 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        Ver proyectos
      </a>
    </section>
  );
};

export default Hero;
