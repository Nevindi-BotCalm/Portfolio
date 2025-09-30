import React from "react";
import { Code, Database, Server, Layers } from "lucide-react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      level: 90,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend Development",
      icon: Server,
      level: 85,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Database Design",
      icon: Database,
      level: 80,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Software Architecture",
      icon: Layers,
      level: 75,
      color: "from-orange-500 to-red-500",
    },
  ];

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="text-white" size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                <motion.div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                  variants={progressVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={skill.level}
                />
              </div>
              <motion.p 
                className="text-center text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                {skill.level}% Proficiency
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;