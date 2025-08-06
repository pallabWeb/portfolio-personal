import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, MapPin, Coffee, Clock, Heart } from "lucide-react";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedSection, StaggeredContainer } from "@/components/WebflowAnimations";

export const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const stats = [{
    label: "Years Experience",
    value: "2+"
  }, {
    label: "Projects Completed",
    value: "20+"
  }, {
    label: "Happy Clients",
    value: "15+"
  }, {
    label: "Code Commits",
    value: "1000+"
  }];
  
  const facts = [{
    icon: MapPin,
    text: "Based in India"
  }, {
    icon: Coffee,
    text: "Powered by coffee & curiosity"
  }, {
    icon: Clock,
    text: "Available for freelance work"
  }, {
    icon: Heart,
    text: "Passionate about clean code"
  }];

  return (
    <div className="">

      <section ref={elementRef} id="about" className="py-20 mb-[-100px] relative">
        <div className="container mx-auto px-6">
          <AnimatedSection animationType="fade" direction="up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 p-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with passion, precision, and purpose
            </p>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto relative">
            {/* Main Content - Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Column - Text Content */}
              <AnimatedSection animationType="slide" direction="left" delay={100} className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    Hi, I'm <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Pallab Mondal</span> 👋
                  </h3>
                  <div className="space-y-4">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      A passionate Fullstack Developer who loves turning complex problems into 
                      simple, beautiful, and intuitive solutions.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I enjoy building exceptional digital experiences that live at the intersection 
                      of design and technology. With over 2 years of experience, I've had the privilege 
                      of working with startups and established companies.
                    </p>
                  </div>
                </div>

                {/* Status and CTA */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  {/* <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div> */}
                  
                  <a
                    href="/PallabMondalResume.pdf"
                    download="Pallab_Mondal_Resume.pdf"
                    className="inline-flex items-center"
                  >
                    <Button variant="outline" size="lg" className="group">
                      <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </AnimatedSection>

              {/* Right Column - Stats Cards */}
              <AnimatedSection animationType="slide" direction="right" delay={150}>
                <StaggeredContainer className="grid grid-cols-2 gap-6" staggerDelay={50}>
                  {stats.map((stat, index) => (
                    <Card key={index} className="p-8 text-center bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-lg transition-all duration-300 group">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                    </Card>
                  ))}
                </StaggeredContainer>
              </AnimatedSection>
            </div>

            {/* Floating Quick Facts Cards */}
            <div className="hidden xl:block">
              {/* Top Right - Experience area */}
              <div 
                className="absolute top-0 right-[520px] z-10 origin-top-left rotate-[-5deg]"
                style={{
                  animationDelay: '0s',
                  animation: 'floatIn 0.8s ease-out forwards'
                }}
              >
                <div className="flex items-center gap-2 px-4 py-2  bg-card/80 backdrop-blur-sm border text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-500 group hover:scale-105 floating-card floating-card-1">
                  {React.createElement(facts[0].icon, {
                    className: "h-4 w-4 text-primary floating-icon transition-transform duration-300"
                  })}
                  <span className="text-sm font-medium whitespace-nowrap">
                    {facts[0].text}
                  </span>
                </div>
              </div>

              {/* Top Far Right - Projects Completed area */}
              <div 
                className="absolute top-0 right-[-35px] z-10 origin-bottom-right rotate-[8deg]"
                style={{
                  animationDelay: '0.2s',
                  animation: 'floatIn 0.8s ease-out forwards 0.2s'
                }}
              >
                <div className="flex items-center gap-2 px-4 py-2  bg-card/80 backdrop-blur-sm border text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-500 group hover:scale-105 floating-card floating-card-2">
                  {React.createElement(facts[1].icon, {
                    className: "h-4 w-4 text-primary floating-icon transition-transform duration-300"
                  })}
                  <span className="text-sm font-medium whitespace-nowrap">
                    {facts[1].text}
                  </span>
                </div>
              </div>

              {/* Bottom Right - Happy Clients area */}
              <div 
                className="absolute bottom-0 right-[300px] z-10"
                style={{
                  animationDelay: '0.4s',
                  animation: 'floatIn 0.8s ease-out forwards 0.4s'
                }}
              >
                <div className="flex items-center gap-2 px-4 py-2  bg-card/80 backdrop-blur-sm border text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-500 group hover:scale-105 floating-card floating-card-3">
                  {React.createElement(facts[2].icon, {
                    className: "h-4 w-4 text-primary floating-icon transition-transform duration-300"
                  })}
                  <span className="text-sm font-medium whitespace-nowrap">
                    {facts[2].text}
                  </span>
                </div>
              </div>

              {/* Bottom Far Right - Code Commits area */}
              <div 
                className="absolute bottom-[26px] right-[-29px] z-10 origin-top-right rotate-[-10deg]"
              >
                <div className="flex items-center gap-2 px-4 py-2  bg-card/80 backdrop-blur-sm border text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-500 group hover:scale-105 floating-card floating-card-2">
                  {React.createElement(facts[3].icon, {
                    className: "h-4 w-4 text-primary floating-icon transition-transform duration-300"
                  })}
                  <span className="text-sm font-medium whitespace-nowrap">
                    {facts[3].text}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Quick Facts - Bottom Section */}
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50 xl:hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group">
                    <div className="flex-shrink-0">
                      {React.createElement(fact.icon, {
                        className: "h-6 w-6 text-primary group-hover:scale-110 transition-transform"
                      })}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium leading-snug">{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};