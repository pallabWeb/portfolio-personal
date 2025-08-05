import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import Navbar from "@/components/Navbar";
import AllProjects from "@/components/AllProjects";

const projects = [
  {
    title: "Modern Dashboard App",
    description: "A comprehensive analytics dashboard built with React and TypeScript, featuring real-time data visualization, responsive design, and intuitive user experience.",
    image: project1,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard.",
    image: project2,
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "React Data Visualization",
    description: "Interactive data visualization tool that transforms complex datasets into beautiful, understandable charts and graphs with custom filtering and export features.",
    image: project3,
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

function Projects() {
  return (
    <>
      <Navbar />
      <AllProjects />
    </>
  )
}

export default Projects;