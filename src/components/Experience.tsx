import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Software Engineer',
      company: 'BotCalm (PVT) LTD',
      period: '2024 - Present',
      description: 'Currently developing AI-powered chatbot solutions and full-stack applications. Working on scalable microservices architecture and implementing modern development practices.',
      achievements: ['Building AI chatbot integrations', 'Developing scalable backend services', 'Implementing modern frontend solutions']
    },
    {
      title: 'Software Developer',
      company: 'Previous Company',
      period: '2023 - 2024',
      description: 'Developed full-stack applications using modern technologies, focusing on scalable architecture and clean code practices.',
      achievements: ['Built responsive web applications', 'Implemented RESTful APIs', 'Optimized database performance']
    },
    {
      title: 'Junior Software Developer',
      company: 'Tech Startup',
      period: '2022 - 2023',
      description: 'Worked on various projects involving frontend and backend development, gaining experience in multiple programming languages and frameworks.',
      achievements: ['Contributed to multiple projects', 'Learned modern frameworks', 'Improved code quality standards']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development and engineering
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.div 
              key={experience.title} 
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <motion.div 
                className="absolute left-0 top-0 w-px bg-gradient-to-b from-blue-600 to-purple-600 h-full"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.5 }}
              />
              
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg ml-6 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <motion.h3 
                      className="text-2xl font-semibold text-gray-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {experience.title}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-blue-600 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                    >
                      {experience.company}
                    </motion.p>
                  </div>
                  <motion.div 
                    className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    <Calendar size={16} />
                    <span>{experience.period}</span>
                  </motion.div>
                </div>
                <motion.p 
                  className="text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  {experience.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.9 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 1 + i * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-500 rounded-full"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-gray-700">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;