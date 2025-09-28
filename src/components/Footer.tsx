import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/nevindi", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/nevindi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nevindisadeera@gmail.com", label: "Email" }
  ];

  return (
    <motion.footer 
      className="relative bg-black py-10 text-center text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="mx-auto mb-6 h-[2px] w-2/3 bg-white"
        initial={{ width: 0 }}
        whileInView={{ width: "66.666667%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Social Icons */}
      <motion.div 
        className="mb-4 flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? "_blank" : undefined}
            rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="transition-transform duration-300 hover:text-white"
            whileHover={{ 
              scale: 1.25,
              rotate: 360,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            <link.icon size={22} />
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.p 
        className="text-sm tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        © <span className="text-white font-semibold">2025 Nevindi Sadeera</span>
        . All rights reserved.
      </motion.p>

      {/* Glow Effect */}
      <motion.div 
        className="absolute inset-0 -z-10 bg-gradient-to-t from-green-500/10 to-transparent blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.footer>
  );
};

export default Footer;