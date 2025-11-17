import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    
    { number: '6+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Software Engineer with a strong foundation in full-stack development 
                and UI/UX design. Currently pursuing my Integrated MTech in Software Engineering at 
                Vellore Institute of Technology, I'm driven by the desire to create meaningful 
                solutions that make a difference.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in technology has been marked by continuous learning and hands-on experience. 
                From developing IoT-based smart car systems to creating AI-powered applications, 
                I enjoy tackling complex challenges and turning innovative ideas into reality.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in the power of collaboration and continuous improvement.
              </p>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <h3 className="text-4xl font-bold gradient-text mb-2 font-display">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;