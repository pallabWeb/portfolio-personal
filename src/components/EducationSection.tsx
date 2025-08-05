import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award, BookOpen, MapPin, ChevronDown, Star, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedSection, StaggeredContainer } from "@/components/WebflowAnimations";

export const EducationSection = ({
  title = "Education",
  subtitle = "Academic foundation that shaped my technical expertise",
  variant = "timeline",
  showHeader = true,
  className = ""
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Animate timeline indicator from card 1 to card 3 when section becomes visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setTimelineProgress(100);
      }, 800); // Start animation after 800ms delay
      
      return () => clearTimeout(timer);
    } else {
      setTimelineProgress(0);
    }
  }, [isVisible]);
  
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      field: "M.A.K.A.U.T",
      institution: "Maulana Abul Kalam Azad University of Technology, West Bengal",
      location: "Barasat, West Bengal",
      year: "2021 - 2024",
      duration: "4 Years",
      grade: "",
      icon: GraduationCap,
      level: "Bachelor's",
      subjects: ["Software Development", "Database Management", "System Analysis", "Web Technologies"],
      description: "Comprehensive program covering software development, database management, and system analysis with hands-on project experience."
    },
    {
      degree: "Higher Secondary Education",
      field: "W.B.C.H.S.E Board",
      institution: "Basirhat High School",
      location: "Basirhat, West Bengal",
      year: "2020 - 2021",
      duration: "2 Years",
      grade: "",
      icon: BookOpen,
      level: "12th Grade",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      description: "Science stream with focus on Mathematics, Physics, and Chemistry, building strong analytical foundation."
    },
    {
      degree: "Secondary Education",
      field: "W.B.B.S.E Board",
      institution: "Basirhat High School",
      location: "Basirhat, West Bengal",
      year: "2019 - 2020",
      duration: "1 Year",
      grade: "",
      icon: Star,
      level: "10th Grade",
      subjects: ["Core Subjects", "Mathematics", "Science", "English"],
      description: "Foundation education with strong emphasis on core subjects and academic excellence."
    }
  ];

  const ModernCard = ({ edu, index, isActive }) => {
    return (
      <Card
        className={`group relative transition-all duration-500 p-8 ${
          isActive
            ? 'bg-card/80 border-primary/50 shadow-glow scale-105'
            : 'bg-card/60 border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-lg'
        } backdrop-blur-sm`}
      >
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className={`
            p-4 rounded-2xl transition-all duration-500
            ${isActive
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-muted/50 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
            }
          `}>
            <edu.icon className="h-8 w-8 transition-colors duration-500" />
          </div>
          
          <div className="text-right">
            <span className={`
              inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
              ${isActive
                ? 'bg-primary/20 text-primary border border-primary/30'
                : 'bg-muted/50 text-muted-foreground border border-border/50'
              }
              transition-all duration-500
            `}>
              {edu.level}
            </span>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-6">
          <h3 className={`
            text-2xl font-bold mb-2 transition-all duration-500
            ${isActive ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}
          `}>
            {edu.degree}
          </h3>
          <p className={`
            text-lg font-medium transition-colors duration-500
            ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary/80'}
          `}>
            {edu.field}
          </p>
        </div>

        {/* Institution Card */}
        <div className={`
          rounded-xl p-4 mb-6 transition-all duration-500 border
          ${isActive
            ? 'bg-primary/10 border-primary/30'
            : 'bg-muted/30 border-border/50 group-hover:bg-muted/50'
          }
        `}>
          <h4 className="text-foreground font-semibold mb-1">{edu.institution}</h4>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{edu.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{edu.year}</span>
            </div>
          </div>
        </div>

        {/* Card Number */}
        <div className={`
          absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center
          font-bold text-sm transition-all duration-500 z-20
          ${isActive
            ? 'bg-primary text-primary-foreground shadow-lg'
            : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
          }
        `}>
          {education.length - index}
        </div>

        {/* Decorative Elements */}
        {isActive && (
          <>
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/60 rounded-full animate-ping" />
          </>
        )}
      </Card>
    );
  };

  const CompactCard = ({ edu, index }) => (
    <Card className="group relative bg-card/60 backdrop-blur-sm border-border/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary rounded-xl shadow-lg group-hover:shadow-glow transition-all duration-300">
          <edu.icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {edu.degree}
          </h4>
          <p className="text-sm text-primary font-medium mb-2">{edu.field}</p>
          <p className="text-sm text-muted-foreground">{edu.institution}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span>{edu.year}</span>
            <span>•</span>
            <span>{edu.location}</span>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section ref={elementRef} id="education" className={`py-24 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-6 relative z-10">
        {showHeader && (
          <AnimatedSection animationType="fade" direction="up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 p-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </AnimatedSection>
        )}

        <div className="max-w-6xl mx-auto">
          {variant === "compact" ? (
            <StaggeredContainer className="space-y-6" staggerDelay={100}>
              {education.map((edu, index) => (
                <CompactCard key={index} edu={edu} index={index} />
              ))}
            </StaggeredContainer>
          ) : (
            <div className="relative">
              {/* Timeline Line - Higher position */}
              <div className="hidden lg:block absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/40 transform -translate-y-8 z-20">
                {/* Animated Timeline Indicator - Slowly from Card 1 to Card 3 */}
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-[8000ms] ease-in-out"
                  style={{
                    right: `${16.67 + (timelineProgress * 66.66 / 100)}%`,
                    transform: 'translateX(-50%) translateY(-50%)'
                  }}
                >
                  <div className="w-4 h-4 bg-primary rounded-full shadow-glow animate-pulse border-2 border-primary-foreground">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
              </div>
              
              <StaggeredContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10" staggerDelay={150}>
                {education.map((edu, index) => (
                  <ModernCard
                    key={index}
                    edu={edu}
                    index={index}
                    isActive={activeCard === index}
                  />
                ))}
              </StaggeredContainer>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Compact version for sidebar usage
export const CompactEducation = ({ className = "" }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <h4 className="text-2xl font-bold text-foreground flex items-center gap-3">
        <div className="p-3 bg-primary rounded-xl shadow-lg">
          <GraduationCap className="h-6 w-6 text-primary-foreground" />
        </div>
        Education
      </h4>
      <EducationSection
        variant="compact"
        showHeader={false}
        className="py-0"
      />
    </div>
  );
};

export default EducationSection;