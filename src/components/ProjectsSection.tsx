import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "School Management System",
    description: "This full-stack application provides a centralized solution for managing students, teachers, courses, and administrative tasks efficiently.",
    image: project1,
    technologies: ["HTML","CSS","JavaScript", "Bootstrap", "PHP", "SenfGrid API","PHPspreadsheet","FPDF","Razorpay"],
    githubUrl: "https://github.com",
    liveUrl: "https://sunshine.firstjobkhabar.com/home/"
  },
  {
    title: "Legal AI Assistence Website",
    description: "A web platform designed to simplify understanding of legal documents by providing clear, concise summaries and explanations. Built with modern web technologies, it enhances accessibility to legal information for individuals and businesses, making complex terms easier to grasp.",
    image: project2,
    technologies: ["React", "Node.js", "Superbase", "Express", "Gemini API"],
    githubUrl: "https://github.com",
    liveUrl: "https://legalease-chi.vercel.app/"
  },
  {
    title: "First Job Khabar | Wordpress",
    description: "First Job Khabar is a website that provides a platform for job seekers to find and apply for various job opportunities.",
    image: project3,
    technologies: ["Wordpress", "HTML", "CSS", "PHP", "Javascript"],
    githubUrl: "https://github.com/pallabWeb",
    liveUrl: "https://firstjobkhabar.com"
  }
];

export const ProjectsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={elementRef} id="projects" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-600 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 p-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 group ${
                isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group/btn"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    variant="default" 
                    size="sm"
                    className="group/btn"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-600 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '0.4s' }}>
          {/* <a href="projects">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          </a> */}
        </div>
      </div>
    </section>
  );
};