import { Github, Linkedin, Heart, ArrowUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import xLogo from "@/assets/logos/logo.svg";
import { AnimatedSection } from "@/components/WebflowAnimations";

export const Footer = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={elementRef} className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-4">
        <AnimatedSection animationType="fade" direction="up" className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm flex items-center gap-2">
            <span>© {currentYear} Pallab Mondal. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 text-sm">
            {['About','Experience','Education', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};