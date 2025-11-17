const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running successfully!' });
});

// Portfolio data endpoints
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Tharun S',
    title: 'Software Engineer',
    email: 'tharun03102003@gmail.com',
    phone: '+91 9952177908',
    linkedin: 'https://linkedin.com/in/tharun-s',
    github: 'https://github.com/tharun-s',
    instagram: 'https://instagram.com/tharun_s_',
    about: 'Enthusiastic Software Engineer eager to learn, grow, and contribute to impactful projects. Known for a problem-solving mindset, attention to detail, and collaborative approach. Passionate about creating solutions that make a meaningful difference.',
    location: 'Vellore, Tamil Nadu, India'
  });
});

app.get('/api/skills', (req, res) => {
  res.json({
    languages: ['Java', 'Python', 'JavaScript', 'SQL'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Next.js'],
    technologies: ['MongoDB', 'REST APIs', 'IoT', 'AI/ML', 'Figma'],
    concepts: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'SDLC', 'Agile']
  });
});

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Real-Time Video Conferencing App',
      description: 'Built a secure video conferencing platform using Node.js, Next.js, Clerk Authentication, and Stream API. Implemented real-time video streaming and authorization.',
      technologies: ['Node.js', 'Next.js', 'Clerk Auth', 'Stream API'],
      category: 'Full Stack',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Smart Car with Obstacle Avoidance & Voice Control',
      description: 'Developed an Arduino-based IoT vehicle with ultrasonic sensors, Bluetooth, and voice recognition. Achieved reliable collision prevention and autonomous navigation.',
      technologies: ['Arduino', 'IoT', 'Bluetooth', 'Voice Recognition'],
      category: 'IoT',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Plant Disease Detection using AI/Deep Learning',
      description: 'Designed CNN, ResNet50, EfficientNet & Vision Transformer models. Achieved 95% accuracy using a Variational Autoencoder, outperforming benchmarks (90%+).',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Vision Transformer'],
      category: 'AI/ML',
      status: 'Published'
    },
    {
      id: 4,
      title: 'Task Manager Web Application',
      description: 'Developed a full-stack task management application with dynamic user interface and RESTful API integration. Built using React, Node.js, Express, and MongoDB.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'Full Stack',
      status: 'Completed'
    }
  ]);
});

app.get('/api/experience', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'UI/UX Designer',
      company: 'ASTUTE Pre-incubation Centre, VIT',
      period: 'Jun 2024 - Sep 2024',
      type: 'Internship',
      description: [
        'Designed and prototyped a responsive web platform using Figma, improving navigation and engagement',
        'Collaborated with cross-functional teams to implement user-centred design principles',
        'Built reusable design systems and component libraries, enabling scalable product development'
      ],
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems']
    }
  ]);
});

app.get('/api/education', (req, res) => {
  res.json([
    {
      id: 1,
      degree: 'Integrated MTech in Software Engineering',
      institution: 'Vellore Institute of Technology (VIT), Vellore',
      period: 'Aug 2021 - June 2026',
      details: 'School of Computer Science and Engineering and Information Systems (SCOPE)',
      cgpa: '8.34/10',
      status: 'In Progress'
    }
  ]);
});

app.get('/api/certificates', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      type: 'Microsoft Certified',
      date: '2024',
      credentialId: 'AZ-900-AI',
      skills: ['Azure AI', 'Machine Learning', 'Cognitive Services', 'AI Ethics']
    },
    {
      id: 2,
      title: 'Exploratory Data Analysis',
      issuer: 'Infosys Springboard',
      type: 'Professional Certificate',
      date: '2024',
      credentialId: 'EDA-2024',
      skills: ['Data Analysis', 'Statistics', 'Python', 'Data Visualization']
    },
    {
      id: 3,
      title: 'AI Tools Workshop',
      issuer: 'bet0X',
      type: 'Workshop Certificate',
      date: '2024',
      credentialId: 'AI-TOOLS-2024',
      skills: ['AI Tools', 'Automation', 'Productivity', 'Modern AI']
    }
  ]);
});

app.get('/api/achievements', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Published Research',
      description: 'Co-Author - Published Book Chapter',
      details: 'Chapter 10 - Plant Disease Detection Using Generative AI and Deep Learning Models',
      publication: 'Published in: Humans and Generative AI Tools for Collaborative Intelligence IGC Global',
      category: 'Research',
      date: '2024'
    },
    {
      id: 2,
      title: 'Academic Excellence',
      description: 'Consistent High Performance',
      details: 'Maintained CGPA of 8.34/10 throughout the Integrated MTech program',
      publication: 'Vellore Institute of Technology',
      category: 'Academic',
      date: '2021-2026'
    },
    {
      id: 3,
      title: 'AI Model Achievement',
      description: 'Superior Model Performance',
      details: 'Achieved 95% accuracy in Plant Disease Detection using Variational Autoencoder',
      publication: 'Outperformed industry benchmarks (90%+)',
      category: 'Technical',
      date: '2024'
    }
  ]);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! I will get back to you soon.' 
  });
});

// Serve static files (for production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});