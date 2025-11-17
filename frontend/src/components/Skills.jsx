import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'React.js', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Core Knowledge',
      skills: [
        { name: 'Data Structures & Algorithms', level: 85 },
        { name: 'OOP', level: 90 },
        { name: 'DBMS', level: 80 },
        { name: 'SDLC', level: 85 },
        { name: 'Agile', level: 75 }
      ]
    },
    {
      title: 'Technologies & Tools',
      skills: [
        { name: 'API Development', level: 85 },
        { name: 'IoT Systems', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Express.js', level: 82 },
        { name: 'Figma', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-dark-950 to-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-center mb-8 text-white font-display">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-primary-400 font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full relative overflow-hidden"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;