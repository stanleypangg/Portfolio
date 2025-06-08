import React from 'react'
import { 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker, 
  FaGitAlt,
  FaLinux 
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiCplusplus, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiKubernetes, 
  SiTensorflow, 
  SiPytorch, 
  SiJupyter,
  SiLatex,
  SiGnubash
} from 'react-icons/si'

const TechStack = () => {
  const techCategories = [
    {
      title: "languages",
      icon: "💻",
      technologies: [
        { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
        { name: "C/C++", icon: <SiCplusplus />, color: "text-blue-600" },
        { name: "Bash", icon: <SiGnubash />, color: "text-gray-600" },
        { name: "LaTeX", icon: <SiLatex />, color: "text-gray-700" },
      ]
    },
    {
      title: "frontend",
      icon: "🎨",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500" },
      ]
    },
    {
      title: "backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
      ]
    },
    {
      title: "devops",
      icon: "☁️",
      technologies: [
        { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
        { name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-600" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
        { name: "Linux", icon: <FaLinux />, color: "text-gray-800" },
      ]
    },
    {
      title: "ai/ml",
      icon: "🤖",
      technologies: [
        { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
        { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
        { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-400" },
      ]
    }
  ]

  return (
    <div>
			
    </div>
  )
}

export default TechStack