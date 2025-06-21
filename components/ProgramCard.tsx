import { Shield, Code, Database, BarChart3, Cloud, Smartphone, Brain, Lock, Globe, Cpu } from 'lucide-react';
import Card from './Card';

const ProgramCard = () => {
  const programs = [
    {
      title: "Business Analyst Internship Program",
      description: "Master business analysis skills through real-world projects and industry mentorship. Learn data-driven decision making and strategic planning.",
      icon: <BarChart3 />,
      image: "/lovable-uploads/0ea0b0d1-1a60-4f8e-b4c0-0b03a6cead10.png",
      rating: 5,
      tags: ["Analytics", "Business Intelligence", "Strategy", "SQL", "Power BI"],
      color: "text-purple-600",
      duration: "4 months",
      price: "Free",
      students: 1200
    },
    {
      title: "Front-End Development Internship",
      description: "Build modern, responsive web applications using cutting-edge technologies. From basics to advanced frameworks and deployment.",
      icon: <Code />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      rating: 5,
      tags: ["React", "JavaScript", "UI/UX", "HTML5", "CSS3"],
      color: "text-blue-600",
      duration: "3 months",
      price: "Free",
      students: 2100
    },
    {
      title: "Data Science Mastery Program",
      description: "Comprehensive program covering machine learning, statistical analysis, and predictive modeling with hands-on industry projects.",
      icon: <Database />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      rating: 5,
      tags: ["Machine Learning", "Python", "Statistics", "TensorFlow", "Pandas"],
      color: "text-green-600",
      duration: "6 months",
      price: "₹15,000",
      students: 850
    },
    {
      title: "Cybersecurity Specialist Track",
      description: "Advanced cybersecurity program focusing on ethical hacking, network security, and digital forensics to combat modern threats.",
      icon: <Shield />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      rating: 5,
      tags: ["Ethical Hacking", "Network Security", "Forensics", "Penetration Testing"],
      color: "text-red-600",
      duration: "5 months",
      price: "₹20,000",
      students: 650
    },
    {
      title: "Data Analyst Professional Course",
      description: "Transform raw data into actionable insights using modern analytical tools and visualization techniques for business success.",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      rating: 4,
      tags: ["SQL", "Tableau", "Excel", "Power BI", "Python"],
      color: "text-orange-600",
      duration: "3 months",
      price: "₹8,000",
      students: 1800
    },
    {
      title: "Full-Stack Development Bootcamp",
      description: "Master both frontend and backend development with modern frameworks, databases, and deployment strategies.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      rating: 5,
      tags: ["Node.js", "React", "MongoDB", "Express.js", "AWS"],
      color: "text-indigo-600",
      duration: "6 months",
      price: "₹25,000",
      students: 950
    },
    {
      title: "Cloud Computing & DevOps",
      description: "Master cloud platforms and DevOps practices including containerization, CI/CD pipelines, and infrastructure automation.",
      icon: <Cloud />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      rating: 4,
      tags: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      color: "text-cyan-600",
      duration: "4 months",
      price: "₹18,000",
      students: 720
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications using modern frameworks and best practices for iOS and Android.",
      icon: <Smartphone />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      rating: 5,
      tags: ["React Native", "Flutter", "Mobile UI", "Firebase", "App Store"],
      color: "text-pink-600",
      duration: "4 months",
      price: "₹16,000",
      students: 680
    },
    {
      title: "AI & Machine Learning",
      description: "Dive deep into artificial intelligence, neural networks, and deep learning frameworks to build intelligent systems.",
      icon: <Brain />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      rating: 5,
      tags: ["TensorFlow", "Neural Networks", "AI", "Deep Learning", "Computer Vision"],
      color: "text-purple-600",
      duration: "6 months",
      price: "₹30,000",
      students: 450
    },
    {
      title: "Digital Marketing & SEO",
      description: "Master digital marketing strategies, SEO optimization, social media marketing, and analytics for business growth.",
      icon: <Globe />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      rating: 4,
      tags: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing"],
      color: "text-green-600",
      duration: "3 months",
      price: "₹12,000",
      students: 1500
    },
    {
      title: "Blockchain Development",
      description: "Learn blockchain technology, smart contracts, and decentralized application development on various platforms.",
      icon: <Cpu />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      rating: 5,
      tags: ["Blockchain", "Smart Contracts", "Ethereum", "Solidity", "Web3"],
      color: "text-yellow-600",
      duration: "5 months",
      price: "₹35,000",
      students: 280
    },
    {
      title: "Information Security",
      description: "Comprehensive security program covering risk assessment, compliance frameworks, and incident response strategies.",
      icon: <Lock />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      rating: 4,
      tags: ["Risk Management", "Compliance", "Security", "CISSP", "ISO 27001"],
      color: "text-red-600",
      duration: "4 months",
      price: "₹22,000",
      students: 520
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
      {programs.map((program, index) => (
        <Card
          key={index}
          title={program.title}
          description={program.description}
          image={program.image}
          rating={program.rating}
          tags={program.tags}
          color={program.color}
          duration={program.duration}
          price={program.price}
          students={program.students}
        />
      ))}
    </div>
  );
};

export default ProgramCard;
