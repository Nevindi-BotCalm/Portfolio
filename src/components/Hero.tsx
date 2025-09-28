import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-300/30 to-purple-300/30 blur-3xl opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-white relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="/src/assets/Nevindi.jpg"
              alt="Nevindi Sadeera"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Nevindi Sadeera
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            A passionate{" "}
            <span className="font-semibold text-blue-600">
              Full-Stack Developer
            </span>{" "}
            building modern web & mobile apps with creativity, innovation, and
            great user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 hover:shadow-2xl transition-all duration-300"
            >
               View My Work
            </motion.button>
            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              href="/Nevindi_Sadeera.pdf"
              download
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-400 hover:text-white hover:border-transparent transition-all duration-300"
            >
               Download CV
            </motion.a>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white hover:border-transparent transition-all duration-300"
            >
               Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div 
          className="mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown size={36} className="mx-auto text-gray-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;