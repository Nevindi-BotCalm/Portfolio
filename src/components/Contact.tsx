import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link as fallback
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:nevindisadeera@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('Email client opened successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('Error opening email client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send me a message</h3>
            <motion.form 
              className="space-y-6" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                  placeholder="Your name"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                  placeholder="your@email.com"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <motion.textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                  placeholder="Tell me about your project..."
                  required
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitStatus && (
                <p className={`text-center ${submitStatus.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                  {submitStatus}
                </p>
              )}
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="text-white" size={20} />
                </motion.div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="text-gray-900 font-medium">nevindisadeera@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="text-white" size={20} />
                </motion.div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="text-gray-900 font-medium">+94 (76) 386-2252</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="text-white" size={20} />
                </motion.div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="text-gray-900 font-medium">Colombo, Sri Lanka</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow me</h4>
              <div className="flex gap-4">
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          </motion.div>
      </div>
    </section>
  );
};

export default Contact;