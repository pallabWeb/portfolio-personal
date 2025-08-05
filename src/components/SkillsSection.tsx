// import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedSection, StaggeredContainer } from "@/components/WebflowAnimations";

// Import all skill logos
import reactLogo from "@/assets/logos/react.svg";
import mysqlLogo from "@/assets/logos/mysql.svg";
import typescriptLogo from "@/assets/logos/typescript.svg";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import vuejsLogo from "@/assets/logos/vuejs.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import sassLogo from "@/assets/logos/sass.svg";
import vsCodeLogo from "@/assets/logos/vs-code.svg";
import figmaLogo from "@/assets/logos/figma.svg";
import nodejsLogo from "@/assets/logos/nodejs.svg";
import expressLogo from "@/assets/logos/express.svg";
import pythonLogo from "@/assets/logos/python.svg";
import materialLogo from "@/assets/logos/material-ui.svg";
import babelLogo from "@/assets/logos/babel.svg";
import mongodbLogo from "@/assets/logos/mongodb.svg";
import gitLogo from "@/assets/logos/git.svg";
import awsLogo from "@/assets/logos/aws.svg";
import wordpressLogo from "@/assets/logos/wordpress.svg";
import webpackLogo from "@/assets/logos/webpack.svg";
import viteLogo from "@/assets/logos/vite.svg";
import npmLogo from "@/assets/logos/npm.svg";
import bootstrapLogo from "@/assets/logos/bootstrap.svg";
import htmlLogo from "@/assets/logos/html.svg";
import cssLogo from "@/assets/logos/css.svg";
import jsLogo from "@/assets/logos/javascript.svg";
const skillCategories = [{
  title: "Frontend",
  skills: [{
    name: "React",
    logo: reactLogo
  }, {
    name: "TypeScript",
    logo: typescriptLogo
  }, {
    name: "Next.js",
    logo: nextjsLogo
  }, {
    name: "Vue.js",
    logo: vuejsLogo
  }, {
    name: "SCSS",
    logo: sassLogo
  }, {
    name: "Tailwind CSS",
    logo: tailwindLogo
  }, {
    name: "Bootstrap",
    logo: bootstrapLogo
  }, {
    name: "HTML",
    logo: htmlLogo
  }, {
    name: "CSS",
    logo: cssLogo
  }, {
    name: "JavaScript",
    logo: jsLogo
  }, {
    name: "Material UI",
    logo: materialLogo
  }, {
    name: "Babel",
    logo: babelLogo
  }]
}, {
  title: "Backend & Databases",
  skills: [{
    name: "Node.js",
    logo: nodejsLogo
  }, {
    name: "Express",
    logo: expressLogo
  }, {
    name: "Python",
    logo: pythonLogo
  }, {
    name: "MongoDB",
    logo: mongodbLogo
  }, {
    name: "MySQL",
    logo: mysqlLogo
  }]
}, {
  title: "Tools & Platforms",
  skills: [{
    name: "Git",
    logo: gitLogo
  }, {
    name: "AWS",
    logo: awsLogo
  }, {
    name: "Webpack",
    logo: webpackLogo
  }, {
    name: "Vite",
    logo: viteLogo
  }, {
    name: "Wordpress",
    logo: wordpressLogo
  }, {
    name: "Npm",
    logo: npmLogo
  }, {
    name: "figma",
    logo: figmaLogo
  }, {
    name: "VS Code",
    logo: vsCodeLogo
  }]
}];
export const SkillsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return <section ref={elementRef} id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection animationType="fade" direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 p-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection 
              key={category.title} 
              animationType="fade" 
              direction="up" 
              delay={100 + categoryIndex * 100}
              className="mb-12 last:mb-0"
            >
              <div className="flex items-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
                <h3 className="text-lg font-semibold text-primary px-6 bg-background">
                  {category.title}
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
              </div>
              
              <StaggeredContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6" staggerDelay={20}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group relative flex flex-col items-center p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-primary/30 transition-all duration-300 cursor-default">
                    <div className="relative">
                      <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 transition-transform duration-300 -z-10"></div>
                    </div>
                    
                    
                    {/* Tooltip on hover */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded-md shadow-lg border whitespace-nowrap">
                        {skill.name}
                      </div>
                      <div className="w-2 h-2 bg-popover border-r border-b border-border rotate-45 absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                ))}
              </StaggeredContainer>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animationType="fade" direction="up" delay={400} className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></div>
            <span className="text-sm italic">Always learning and exploring new technologies</span>
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" style={{
            animationDelay: "0.5s"
          }}></div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};