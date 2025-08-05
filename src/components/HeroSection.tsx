import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedSection, MagneticButton, TextReveal, FloatingElement } from "@/components/WebflowAnimations";

export const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section ref={elementRef} className="min-h-screen relative overflow-hidden">

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center min-h-screen py-20">
          
          {/* Main Content */}
          <AnimatedSection animationType="fade" direction="up" className="max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Star className="h-4 w-4 text-primary fill-current" />
              <span className="text-sm font-medium text-foreground">Available for new projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="md:tracking-[4px] bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent">Pallab Mondal</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">Fullstack Developer</p>

            {/* Description */}
            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              I craft pixel-perfect, interactive web experiences that blend beautiful design with seamless functionality. Let's bring your ideas to life.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" onClick={() => scrollToSection('projects')} className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/pallabWeb" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/pallab-mondal-a4a1182ab/" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pallabm2024@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce sm:left-1/2 left-[50vw]">
  <button onClick={() => scrollToSection('about')} className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors group">
    <span className="text-xs font-medium">Scroll</span>
    <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
  </button>
</div>
    </section>;
};