import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollProgressBar, FloatingElement } from "@/components/WebflowAnimations";

// Import skill logos
import reactLogo from "@/assets/logos/react.svg";
import typescriptLogo from "@/assets/logos/typescript.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import pythonLogo from "@/assets/logos/python.svg";
// import dockerLogo from "@/assets/logos/docker.svg";
import gitLogo from "@/assets/logos/git.svg";
import awsLogo from "@/assets/logos/aws.svg";
import mongodbLogo from "@/assets/logos/mongodb.svg";
import viteLogo from "@/assets/logos/vite.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Enhanced Background Elements - Floating Skill Logos */}
      <div className="fixed inset-0 pointer-events-none hidden lg:block">
        {/* Top Section Logos */}
        <FloatingElement animationType="gentle" delay={0} className="absolute top-20 left-16 opacity-20">
          <img src={reactLogo} alt="" className="w-16 h-16" />
        </FloatingElement>
        <FloatingElement animationType="offset" delay={2000} className="absolute top-32 right-20 opacity-15">
          <img src={typescriptLogo} alt="" className="w-14 h-14" />
        </FloatingElement>
        <FloatingElement animationType="gentle" delay={4000} className="absolute top-64 left-1/4 opacity-15">
          <img src={tailwindLogo} alt="" className="w-12 h-12" />
        </FloatingElement>
        
        {/* Middle Section Logos */}
        <FloatingElement animationType="particle" delay={3000} className="absolute top-1/2 left-[250px] opacity-20">
          <img src={pythonLogo} alt="" className="w-16 h-16" />
        </FloatingElement>
        <FloatingElement animationType="offset" delay={5000} className="absolute top-1/3 right-1/4 opacity-15">
          <img src={viteLogo} alt="" className="w-14 h-14" />
        </FloatingElement>
        
        {/* Bottom Section Logos */}
        <FloatingElement animationType="gentle" delay={3500} className="absolute bottom-20 right-1/3 opacity-20">
          <img src={awsLogo} alt="" className="w-16 h-16" />
        </FloatingElement>
        <FloatingElement animationType="particle" delay={2500} className="absolute bottom-48 left-[400px] opacity-15">
          <img src={mongodbLogo} alt="" className="w-12 h-12" />
        </FloatingElement>
        <FloatingElement animationType="offset" delay={4500} className="absolute bottom-64 right-[250px] opacity-20">
          <img src={gitLogo} alt="" className="w-14 h-14" />
        </FloatingElement>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection/>
        <EducationSection/>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
