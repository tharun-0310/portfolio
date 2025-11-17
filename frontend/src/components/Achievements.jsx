import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const achievements = [
    {
      title: 'Published Research',
      description: 'Co-Author - Published Book Chapter',
      details: 'Chapter 10 - Plant Disease Detection Using Generative AI and Deep Learning Models',
      publication: 'Published in: Humans and Generative AI Tools for Collaborative Intelligence IGC Global',
      icon: '📚',
      category: 'Research'
    },
    {
      title: 'Academic Excellence',
      description: 'Consistent High Performance',
      details: 'Maintained CGPA of 8.34/10 throughout the Integrated MTech program',
      publication: 'Vellore Institute of Technology',
      icon: '🎓',
      category: 'Academic'
    },
    {
      title: 'AI Model Achievement',
      description: 'Superior Model Performance',
      details: 'Achieved 95% accuracy in Plant Disease Detection using Variational Autoencoder',
      publication: 'Outperformed industry benchmarks (90%+)',
      icon: '🤖',
      category: 'Technical'
    },
    {
      title: 'Full-Stack Development',
      description: 'End-to-End Application Development',
      details: 'Successfully deployed multiple full-stack applications with modern tech stack',
      publication: 'React, Node.js, Express, MongoDB ecosystem',
      icon: '💻',
      category: 'Development'
    },
    {
      title: 'IoT Innovation',
      description: 'Smart Vehicle Development',
      details: 'Developed autonomous navigation system with collision prevention',
      publication: 'Arduino-based IoT implementation with voice control',
      icon: '🚗',
      category: 'Innovation'
    },
    {
      title: 'UI/UX Design Excellence',
      description: 'Professional Design Experience',
      details: 'Improved user engagement through responsive web platform design',
      publication: 'ASTUTE Pre-incubation Centre, VIT',
      icon: '🎨',
      category: 'Design'
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display">
            <span className="gradient-text">Achievements & Recognition</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-400"></div>
                
                <div className="text-4xl mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl relative">
                    {achievement.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-full blur-lg animate-pulse-slow"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="text-lg font-semibold text-white font-display group-hover:text-primary-300 transition-colors">
                      {achievement.title}
                    </h3>
                    <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium border border-primary-500/30">
                      {achievement.category}
                    </span>
                  </div>
                  
                  <p className="text-primary-400 font-medium">{achievement.description}</p>
                  <p className="text-gray-300 leading-relaxed">{achievement.details}</p>
                  <p className="text-gray-400 text-sm italic">{achievement.publication}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;