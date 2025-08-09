import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();

  // Auto-hide banner after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 10000);

    // Cleanup timer if component unmounts or showBanner changes
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      {/* Development Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm border-b border-amber-400/30">
          <div className="flex items-center justify-center px-4 py-2 text-center relative">
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">This portfolio is currently under development</span>
              <span className="sm:hidden">Under Development</span>
            </div>
            <button
              onClick={closeBanner}
              className="absolute right-4 p-1 text-white hover:text-amber-100 transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <nav className={`fixed left-0 right-0 z-50 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-16 lg:py-6 bg-transparent transition-all duration-300 ${showBanner ? 'top-10' : 'top-0'}`}>
        {/* Left section - centered on mobile, left-aligned on larger screens */}
        <div className="flex items-center justify-evenly gap-2 sm:gap-3 lg:gap-4 bg-card/90 rounded-full sm:rounded-2xl lg:rounded-[2.6vw] px-2 py-2 sm:px-3 sm:py-3 lg:px-[0.4vw] lg:py-[0.4vw] border border-border/50 backdrop-blur-sm mx-auto sm:mx-0">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pallabm2024@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2 sm:ml-3 lg:ml-[1vw] cursor-pointer text-muted-foreground text-xs sm:text-sm lg:text-[0.8vw] font-normal no-underline hover:text-primary transition-colors">
            pallabm2024@gmail.com
          </a>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* CV Button with hover icon - hidden on mobile */}
          <a
            href="/PallabMondalResume.pdf"
            download="Pallab_Mondal_Resume.pdf"
            className="hidden sm:flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 lg:px-[2.1vw] lg:py-[0.7vw] text-xs sm:text-sm lg:text-[0.8vw] text-foreground bg-muted border-none rounded-full sm:rounded-xl lg:rounded-[2.6vw] cursor-pointer font-medium no-underline hover:bg-muted/80 transition-all group relative overflow-hidden"
          >
            <span className="group-hover:opacity-0 group-hover:scale-75 transition-all duration-300">CV</span>
            <Download className="h-4 w-4 absolute opacity-0 scale-125 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
          </a>

          {/* Hamburger Menu Button - shown only on mobile */}
          <button
            onClick={toggleMenu}
            className="sm:hidden px-3 py-2 text-xs text-foreground bg-muted border-none rounded-full cursor-pointer font-medium hover:bg-muted/80 transition-all flex items-center justify-center"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`sm:hidden absolute left-4 right-4 mt-2 bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-lg transition-all duration-300 ${showBanner ? 'top-full' : 'top-full'}`}>
            <div className="flex flex-col space-y-3">
              <a
                href="/PallabMondalResume.pdf"
                download="Pallab_Mondal_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-foreground bg-muted rounded-xl font-medium no-underline hover:bg-muted/80 transition-all group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Download CV</span>
                <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
              <div className="border-t border-border/30 pt-3">
                <div className="flex flex-col text-center space-y-2">
                  <a
                    href="#about"
                    className="px-4 py-2 text-sm text-muted-foreground font-medium no-underline hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    className="px-4 py-2 text-sm text-muted-foreground font-medium no-underline hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                  >
                    Experience
                  </a>
                  <a
                    href="#education"
                    className="px-4 py-2 text-sm text-muted-foreground font-medium no-underline hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                  >
                    Education
                  </a>
                  <a
                    href="#skills"
                    className="px-4 py-2 text-sm text-muted-foreground font-medium no-underline hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="px-4 py-2 text-sm text-muted-foreground font-medium no-underline hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="px-4 py-2 text-sm text-muted-foreground font-medium no-underline hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation Links - hidden on mobile (below sm breakpoint) */}
        <div className="hidden sm:flex items-center justify-evenly p-2">
          <a
            href="#about"
            className="text-muted-foreground text-xs sm:text-sm lg:text-[0.8vw] font-medium no-underline z-[100] hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About <span className="px-1 sm:px-2 lg:px-[0.3vw] text-muted-foreground/60">/</span>
          </a>

          <a
            href="#experience"
            className="text-muted-foreground text-xs sm:text-sm lg:text-[0.8vw] font-medium no-underline z-[100] hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Experience <span className="px-1 sm:px-2 lg:px-[0.3vw] text-muted-foreground/60">/</span>
          </a>

          <a
            href="#education"
            className="text-muted-foreground text-xs sm:text-sm lg:text-[0.8vw] font-medium no-underline z-[100] hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Education <span className="px-1 sm:px-2 lg:px-[0.3vw] text-muted-foreground/60">/</span>
          </a>

          <a
            href="#skills"
            className="text-muted-foreground text-xs sm:text-sm lg:text-[0.8vw] font-medium no-underline z-[100] hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Skills <span className="px-1 sm:px-2 lg:px-[0.3vw] text-muted-foreground/60">/</span>
          </a>

          <a
            href="#projects"
            className="text-muted-foreground text-xs sm:text-sm lg:text-[0.8vw] font-medium no-underline z-[100] hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects <span className="px-1 sm:px-2 lg:px-[0.3vw] text-muted-foreground/60">/</span>
          </a>

          <a
            href="#contact"
            className="text-muted-foreground text-xs sm:text-sm lg:text-[0.8vw] font-medium no-underline z-[100] hover:text-primary transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </a>

        </div>
      </nav>
    </>
  );
}

export default Navbar;