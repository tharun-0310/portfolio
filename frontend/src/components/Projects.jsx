import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      title: 'Real-Time Video Conferencing App',
      description: 'Built a secure video conferencing platform using Node.js, Next.js, Clerk Authentication, and Stream API. Implemented real-time video streaming and authorization.',
      technologies: ['Node.js', 'Next.js', 'Clerk Auth', 'Stream API'],
      category: 'Full Stack',
      liveUrl: null, // Add your deployed URL when available
      githubUrl: 'https://github.com/tharun-0310/video_conference_application'
    },
    {
      title: 'Smart Car with Obstacle Avoidance & Voice Control',
      description: 'Developed an Arduino-based IoT vehicle with ultrasonic sensors, Bluetooth, and voice recognition. Achieved reliable collision prevention and autonomous navigation.',
      technologies: ['Arduino', 'IoT', 'Bluetooth', 'Voice Recognition'],
      category: 'IoT',
      liveUrl: 'https://drive.google.com/file/d/1V0KLdWpnl1e8cWd_6PYxLZNGX6JgKs6P/view?usp=drive_link',
      githubUrl: 'https://github.com/tharun-0310/Arduino-controlled-Bluetooth-Voice-and-obstacle-avoidance-Car'
    },
    {
      title: 'Plant Disease Detection using AI/Deep Learning',
      description: 'Designed CNN, ResNet50, EfficientNet & Vision Transformer models. Achieved 95% accuracy using a Variational Autoencoder, outperforming benchmarks (90%+).',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Vision Transformer'],
      category: 'AI/ML',
      liveUrl: null, // Add your deployed URL when available
      githubUrl: null // Add your GitHub URL when available
    },
    {
      title: 'Task Manager Web Application',
      description: 'Developed a full-stack task management application with dynamic user interface and RESTful API integration. Built using React, Node.js, Express, and MongoDB.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'Full Stack',
      liveUrl: null, // Add your deployed URL when available
      githubUrl: null // Add your GitHub URL when available
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display">
            <span className="gradient-text">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass-effect rounded-2xl p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="flex justify-between items-start mb-4">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 font-display group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full text-sm border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 relative z-10">
                  {project.liveUrl && (
                    <motion.button
                      className="btn-primary text-sm cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Opening live demo:', project.liveUrl);
                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      {project.title.includes('Smart Car') ? 'View Demo' : 'Live Demo'}
                    </motion.button>
                  )}
                  {project.githubUrl && (
                    <motion.button
                      className="btn-secondary text-sm cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Opening GitHub:', project.githubUrl);
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      View Code
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;