import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const contactInfo = [
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9952177908',
      link: 'tel:+919952177908'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'tharun03102003@gmail.com',
      link: 'mailto:tharun03102003@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/tharun-s-26912b244',
      link: 'www.linkedin.com/in/tharun-s-26912b244'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'https://github.com/tharun-0310',
      link: 'https://github.com/tharun-0310'
    },
    {
      icon: '📸',
      label: 'Instagram',
      value: 'https://www.instagram.com/tharunvikram310?igsh=enhraWVnYmJ4b2Jr',
      link: 'https://www.instagram.com/tharunvikram310?igsh=enhraWVnYmJ4b2Jr'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-semibold text-white font-display">Let's Connect!</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow developers and tech enthusiasts. Whether you have a 
                project in mind, want to discuss technology, or just want to say hello, I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: '🚀', text: 'Open to new opportunities' },
                  { icon: '🤝', text: 'Available for collaboration' },
                  { icon: '💡', text: 'Always learning and growing' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 text-gray-300">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="glass-effect rounded-xl p-6 flex items-center gap-4 group hover:scale-105 transition-all duration-300 block relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold font-display">{contact.label}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{contact.value}</p>
                  </div>
                  <div className="text-primary-400 text-xl group-hover:translate-x-2 transition-transform">→</div>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-400 mb-4">
              Built with ❤️ by Tharun S | © 2024 All rights reserved
            </p>
            <p className="text-gray-500">
              Made with React & Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;