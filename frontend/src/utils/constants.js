// Portfolio constants and configuration
export const PORTFOLIO_CONFIG = {
  name: 'Tharun S',
  title: 'Software Engineer',
  email: 'tharun03102003@gmail.com',
  phone: '+91 9952177908',
  social: {
    linkedin: 'https://linkedin.com/in/tharun-s',
    github: 'https://github.com/tharun-s',
    instagram: 'https://instagram.com/tharun_s_'
  },
  location: 'Vellore, Tamil Nadu, India'
};

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  }
};