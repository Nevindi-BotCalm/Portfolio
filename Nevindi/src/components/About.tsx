import React, { useState } from 'react';
import { Code2, Palette, Rocket, Heart, Coffee, Zap, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const personalityTraits = [
    { 
      icon: Code2, 
      title: 'Problem Solver', 
      description: 'I love breaking down complex challenges into elegant solutions',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      delay: 0.1
    },
    { 
      icon: Palette, 
      title: 'Creative Thinker', 
      description: 'Blending aesthetics with functionality in every project',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      delay: 0.2
    },
    { 
      icon: Rocket, 
      title: 'Innovation Driven', 
      description: 'Always exploring cutting-edge technologies and methodologies',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      delay: 0.3
    },
    { 
      icon: Heart, 
      title: 'User Focused', 
      description: 'Creating experiences that users genuinely love and enjoy',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      delay: 0.4
    }
  ];

  const stats = [
    { value: '25+', label: 'Projects Delivered', icon: Globe },
    { value: '3+', label: 'Years Crafting', icon: Coffee },
    { value: '95%', label: 'Client Satisfaction', icon: Users },
    { value: '∞', label: 'Lines of Passion', icon: Zap }
  ];

  const skills = [
    { name: 'Frontend Magic', level: 95, color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { name: 'Backend Wizardry', level: 88, color: 'bg-gradient-to-r from-green-500 to-teal-500' },
    { name: 'UI/UX Design', level: 82, color: 'bg-gradient-to-r from-pink-500 to-rose-500' },
    { name: 'Problem Solving', level: 98, color: 'bg-gradient-to-r from-orange-500 to-yellow-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I'm not just a developer – I'm a digital craftsman who transforms ideas into 
            <span className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"> extraordinary experiences</span>
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Story */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Every line of code I write tells a story. From my first "Hello World" to architecting 
                  complex applications, I've been on an incredible journey of continuous learning and growth.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I believe in the power of technology to solve real-world problems and create meaningful 
                  connections between people and digital experiences.
                </p>
              </div>
            </motion.div>

            {/* Skills Progress */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6">What I Bring to the Table</h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Personality Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {personalityTraits.map((trait, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                className={`relative p-6 rounded-2xl ${trait.bgColor} border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Animated Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${trait.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={activeCard === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${trait.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <trait.icon className="text-white" size={24} />
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{trait.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{trait.description}</p>
                </div>

                {/* Hover Effect */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full blur-xl"
                  animate={activeCard === index ? { 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="text-white" size={24} />
                </motion.div>
                <motion.div 
                  className="text-3xl md:text-4xl font-black text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            Ready to bring your ideas to life? Let's create something amazing together.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;