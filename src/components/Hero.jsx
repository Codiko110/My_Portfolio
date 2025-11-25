import { about } from "../data/data";
import avatar from "../pictures/avatar.png";
import Cv1 from "../assets/cv1.pdf";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Hero({ onClickScroll }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Dans votre composant
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = ["Web & Mobile Developer", "Designer"];

  // Animation toutes les 0.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // 0.5 secondes

    return () => clearInterval(interval);
  }, []);

  // Variants d'animation
  const roleVariants = {
    enter: {
      y: 20,
      opacity: 0,
      scale: 0.95,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 1.05,
    },
  };

  return (
    <motion.div
      className="hero bg-base-100 min-h-screen py-8 md:py-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse w-full px-4 md:px-8">
        {/* Image Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="shrink-0 mb-8 lg:mb-0"
        >
          <img
            src={avatar}
            alt={about.name}
            className="w-56 sm:w-64 md:w-80 lg:w-96 rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Contenu texte */}
        <motion.div
          className="w-full lg:pr-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Salutation */}
          <motion.div className="" variants={itemVariants}>
            <div className="flex flex-row sm:flex-row items-start sm:items-center gap-2 mb-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hello, I'm
              </h1>
              <p className="text-primary text-4xl sm:text-5xl lg:text-6xl font-bold">
                {about.name}.
              </p>
            </div>
          </motion.div>

          {/* Rôles animés */}
          <motion.div className="" variants={itemVariants}>
            <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  variants={roleVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="py-4 sm:py-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            {about.description}
          </motion.p>

          {/* Boutons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={onClickScroll}
              className="btn btn-primary outline w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire me
            </motion.button>
            <motion.button
              className="btn btn-outline btn-primary w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={Cv1} className="no-underline">
                Download CV
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
