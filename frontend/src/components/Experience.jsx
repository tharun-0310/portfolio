import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      title: 'UI/UX Designer',
      company: 'ASTUTE Pre-incubation Centre, VIT',
      period: 'Jun 2024 - Sep 2024',
      description: [
        'Designed and prototyped a responsive web platform using Figma, improving navigation and engagement',
        'Collaborated with cross-functional teams to implement user-centred design principles',
        'Built reusable design systems and component libraries, enabling scalable product development'
      ],
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems']
    }
  ];

  const education = {
    degree: 'Integrated MTech in Software Engineering',
    institution: 'Vellore Institute of Technology (VIT), Vellore',
    period: 'Aug 2021 - June 2026',
    details: 'School of Computer Science and Engineering and Information Systems (SCOPE)',
    cgpa: 'CGPA: 8.34/10'
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-dark-950 to-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-white font-display">Professional Experience</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
                
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12 pb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  >
                    {/* Timeline marker */}
                    <div className="absolute left-2 top-2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-900"></div>
                    
                    <div className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h4 className="text-lg font-semibold text-white font-display">{exp.title}</h4>
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary-400 font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="text-primary-400 mr-2 mt-1">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full text-sm border border-primary-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-white font-display">Education</h3>
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h4 className="text-xl font-semibold text-white font-display leading-tight">{education.degree}</h4>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                    {education.period}
                  </span>
                </div>
                <p className="text-primary-400 font-medium mb-2">{education.institution}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{education.details}</p>
                <p className="text-lg font-semibold">
                  <span className="gradient-text">{education.cgpa}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;