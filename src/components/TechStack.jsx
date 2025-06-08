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
  FaJava
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
  SiJupyter,
  SiLatex,
  SiGnubash,
  SiSpring,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiNeo4J,
  SiRedis,
  SiPrisma,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiPlotly,
  SiR
} from 'react-icons/si'
import TechRow from './TechRow'

const TechStack = () => {
  const techCategories = [
    {
      technologies: [
        { name: "Python", icon: FaPython, color: "text-yellow-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "C/C++", icon: SiCplusplus, color: "text-blue-600" },
        { name: "SQL", icon: SiMysql, color: "text-blue-500" },
        { name: "R", icon: SiR, color: "text-blue-600" },
        { name: "Bash", icon: SiGnubash, color: "text-gray-600" },
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      ]
    },
    {
      technologies: [
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Flask", icon: SiFlask, color: "text-gray-700" },
        { name: "FastAPI", icon: SiFastapi, color: "text-green-600" },
        { name: "Spring Boot", icon: SiSpring, color: "text-green-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      ]
    },
    {
      technologies: [
        { name: "scikit-learn", icon: SiScikitlearn, color: "text-orange-500" },
        { name: "pandas", icon: SiPandas, color: "text-blue-600" },
        { name: "NumPy", icon: SiNumpy, color: "text-blue-500" },
        { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
        { name: "AWS", icon: FaAws, color: "text-orange-400" },
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "Neo4j", icon: SiNeo4J, color: "text-blue-500" },
        { name: "Redis", icon: SiRedis, color: "text-red-500" },
      ]
    }
  ]

  return (
    <div>
      {techCategories.map((category, index) => (
        <TechRow key={index} rowIndex={index} items={category.technologies} />
      ))}
    </div>
  )
}

export default TechStack