import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      type: 'Microsoft Certified',
      date: '2024',
      description: 'Fundamental concepts of artificial intelligence and machine learning on Microsoft Azure platform.',
      skills: ['Azure AI', 'Machine Learning', 'Cognitive Services', 'AI Ethics'],
      credentialId: 'AZ-900-AI',
      image: '/assets/Azure%20AI%20Fundamentals_page-0001.jpg'
    },
    {
      title: 'Exploratory Data Analysis',
      issuer: 'Infosys Springboard',
      type: 'Professional Certificate',
      date: '2024',
      description: 'Comprehensive training in data analysis techniques, statistical methods, and data visualization.',
      skills: ['Data Analysis', 'Statistics', 'Python', 'Data Visualization'],
      credentialId: 'EDA-2024',
      image: '/assets/Infosys%20SpringBoard%20certificate_page-0001.jpg'
    },
    {
      title: 'UI/UX Design Excellence',
      issuer: 'Astute',
      type: 'Professional Certificate',
      date: '2024',
      description: 'Professional Design Experience covering modern UI/UX principles and design methodologies.',
      skills: ['UI/UX Design', 'Canva', 'Prototyping', 'Figma'],
      credentialId: 'UIUX-2024',
      image: '/assets/astute.png'
    },
    {
      title: 'AI Tools Workshop',
      issuer: 'bet0X',
      type: 'Workshop Certificate',
      date: '2025',
      description: 'Hands-on workshop covering modern AI tools and their practical applications in software development.',
      skills: ['AI Tools', 'Automation', 'Productivity', 'Modern AI'],
      credentialId: 'AI-TOOLS-2024',
      image: '/assets/Certificate_pages-to-jpg-0001.jpg'
    },
    {
      title: 'Published Research',
      issuer: 'IGI Global',
      type: 'Research Publication',
      date: '2024',
      description: 'Co-Author - Published Book Chapter: "Plant Disease Detection Using Generative AI and Deep Learning Models" in "Humans and Generative AI Tools for Collaborative Intelligence"',
      skills: ['Research', 'AI/ML', 'Deep Learning', 'Generative AI', 'Plant Disease Detection'],
      credentialId: 'IGI-GLOBAL-2024',
      image: '/assets/Certificate%28IGI%20publication_page-0001.jpg',
     publication: 'Chapter 10 - Published in: Humans and Generative AI Tools for Collaborative Intelligence IGI Global',
      category: 'Research'
    }
  ];

  const licenses = [
    {
      title: 'ORCID iD',
      issuer: 'ORCID',
      type: 'Research Identifier',
      id: '0009-0008-5046-6390',
      description: 'Persistent digital identifier for researchers and scholars',
      link: 'https://orcid.org/0009-0008-5046-6390'
    }
  ];

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="section-padding bg-gradient-to-br from-dark-950 to-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display">
            <span className="gradient-text">Certificates & Licenses</span>
          </h2>

          {/* Certificates Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-white font-display">Professional Certificates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openCertificateModal(certificate)}
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        console.error('Failed to load image:', certificate.image);
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                      onLoad={() => console.log('Image loaded:', certificate.image)}
                    />
                    <div className="absolute inset-0 bg-gray-300 hidden items-center justify-center text-gray-600">
                      <div className="text-center">
                        <div className="text-2xl mb-2">📄</div>
                        <div className="text-sm">Certificate Image</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold">View Certificate</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white font-display">{certificate.title}</h4>
                      <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {certificate.date}
                      </span>
                    </div>

                    <p className="text-primary-400 font-medium mb-2">{certificate.issuer}</p>
                    <span className="bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full text-sm border border-primary-500/20 inline-block mb-4">
                      {certificate.type}
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">{skill}</span>
                      ))}
                      {certificate.skills.length > 3 && (
                        <span className="bg-secondary-500/20 text-secondary-400 px-2 py-1 rounded text-xs">+{certificate.skills.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Licenses Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white font-display">Professional Licenses & IDs</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {licenses.map((license, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-2 font-display">{license.title}</h4>
                  <p className="text-primary-400 font-medium mb-2">{license.issuer}</p>
                  <span className="bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full text-sm border border-primary-500/20 inline-block mb-4">
                    {license.type}
                  </span>
                  <p className="text-gray-300 mb-4 leading-relaxed">{license.description}</p>
                  {license.id && (
                    <p className="text-gray-400 font-mono text-sm mb-4">ID: {license.id}</p>
                  )}
                  {license.link && (
                    <a href={license.link} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
                      View Profile →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificateModal}
          >
            <motion.div
              className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary-500/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-primary-500/20 hover:bg-primary-500/40 rounded-full flex items-center justify-center text-white text-xl transition-colors z-10"
                onClick={closeCertificateModal}
              >
                ×
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="rounded-xl overflow-hidden">
                  <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full h-auto" />
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white font-display">{selectedCertificate.title}</h3>
                  <p className="text-xl text-primary-400 font-medium">{selectedCertificate.issuer}</p>
                  <span className="bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full text-sm border border-primary-500/20 inline-block">
                    {selectedCertificate.type}
                  </span>
                  <p className="text-gray-300 leading-relaxed">{selectedCertificate.description}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-4">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, i) => (
                        <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {selectedCertificate.publication && (
                    <div className="glass-effect rounded-xl p-4 space-y-2 mb-4">
                      <h4 className="text-white font-semibold mb-2">Publication Details:</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedCertificate.publication}</p>
                    </div>
                  )}

                  <div className="glass-effect rounded-xl p-4 space-y-2">
                    <p className="text-gray-300"><strong className="text-white">Credential ID:</strong> {selectedCertificate.credentialId}</p>
                    <p className="text-gray-300"><strong className="text-white">Date Issued:</strong> {selectedCertificate.date}</p>
                    {selectedCertificate.category && (
                      <p className="text-gray-300"><strong className="text-white">Category:</strong> {selectedCertificate.category}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;