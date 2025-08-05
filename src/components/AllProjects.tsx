import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/components/WebflowAnimations";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

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
  },
  {
    title: "Modern Dashboard App",
    description: "A comprehensive analytics dashboard built with React and TypeScript, featuring real-time data visualization, responsive design, and intuitive user experience.",
    image: project1,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

function AllProjects() {
  return (
      <div className="container mx-auto px-6 py-[150px]">
        <AnimatedSection animationType="fade" direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 p-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            All Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and the technologies I'm passionate about
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 group"
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
        </StaggeredContainer>

        {/* Home Button */}
        <div className="text-center mt-12">
          <a href="/">
          <Button variant="outline" size="lg" className="group">
            Go to Home
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          </a>
        </div>
      </div>
  )
}

export default AllProjects;