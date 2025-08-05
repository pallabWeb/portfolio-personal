import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar, MapPin, Building2, Award, X, Download, ExternalLink } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/components/WebflowAnimations";
// Import your certificate files from assets
import certificatePdf from "../assets/ibm-certificate.pdf";
import certificateImage from "../assets/ibm-certificate-view.jpg";

export const ExperienceSection = ({
  title = "Experience", 
  subtitle = "Professional journey and hands-on training that built my expertise",
  variant = "full", // "full" | "compact"
  showHeader = true,
  className = ""
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [showCertificate, setShowCertificate] = useState(false);
  
  const experiences = [
    {
      position: "Web Development Trainee",
      company: "IBM",
      location: "Kolkata, India",
      duration: "July 2023 - Sep 2023",
      type: "Training Program",
      icon: Building2,
      hasCertificate: true,
      certificatePdfPath: certificatePdf,
      certificateImagePath: certificateImage,
      achievements: [
        "Completed comprehensive full-stack development training covering both frontend and backend technologies",
        "Built responsive web applications using Next.js and React.js frameworks",
        "Developed RESTful APIs with Node.js and Express.js for backend functionality",
        "Implemented database operations using MongoDB for data storage and retrieval",
        "Created full-stack applications with React frontends and Node.js backends",
        "Learned authentication and authorization techniques using JWT",
        "Gained experience with MVC architecture and REST API design principles",
        "Practiced deployment of full-stack applications to cloud platforms"
      ],
      technologies: [
        "React.js", 
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "TailwindCSS",
        "JWT Authentication",
        "Cloud Deployment",
        "Git/GitHub"
      ]
    }
  ];

  const CertificateModal = ({ experience }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    if (!showCertificate || !experience.certificateImagePath) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="relative w-full max-w-6xl h-full max-h-[90vh] m-4 bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6" />
              <div>
                <h3 className="text-lg font-semibold">Certificate - {experience.position}</h3>
                <p className="text-sm opacity-90">{experience.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={experience.certificatePdfPath}
                download="IBM_Certificate.pdf"
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                title="Download PDF Certificate"
              >
                <Download className="h-5 w-5" />
              </a>
              <button
                onClick={() => setShowCertificate(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Certificate Image Viewer */}
          <div className="h-full pb-16 flex items-center justify-center bg-gray-50 overflow-auto">
            {imageError ? (
              <div className="flex flex-col items-center justify-center text-gray-600 p-8">
                <Award className="h-16 w-16 mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">Certificate Image Not Found</h3>
                <p className="text-center mb-4">
                  The certificate image could not be loaded. You can still download the PDF version.
                </p>
                <div className="flex gap-2">
                  <a
                    href={experience.certificatePdfPath}
                    download="IBM_Certificate.pdf"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                  
                </div>
              </div>
            ) : (
              <div className="relative max-w-full max-h-full">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-gray-600">Loading certificate...</p>
                    </div>
                  </div>
                )}
                <img
                  src={experience.certificateImagePath}
                  alt={`${experience.company} Certificate - ${experience.position}`}
                  className="max-w-full max-h-full object-contain shadow-lg rounded-lg"
                  onLoad={() => setImageLoading(false)}
                  onError={() => {
                    setImageError(true);
                    setImageLoading(false);
                  }}
                  style={{ display: imageLoading ? 'none' : 'block' }}
                />
              </div>
            )}
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t p-3">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span></span>
              <div className="flex items-center gap-4">
                <span className="text-xs">
                  {experience.duration} • {experience.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CompactCard = ({ exp, index }) => (
    <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-lg transition-all duration-300 group">
      <div className="space-y-3">
        <div>
          <h5 className="text-lg font-bold text-foreground mb-1">{exp.position}</h5>
          <p className="text-primary font-medium text-sm">{exp.company}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{exp.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{exp.location}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
              {exp.type}
            </span>
            {exp.hasCertificate && (
              <button
                onClick={() => setShowCertificate(true)}
                className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-medium rounded-full hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
              >
                <Award className="h-3 w-3" />
                Certificate
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );

  const FullCard = ({ exp, index }) => (
    <Card key={index} className="p-8 bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
          <exp.icon className="h-8 w-8 text-primary" />
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h4 className="text-2xl font-bold text-foreground mb-2">{exp.position}</h4>
            <p className="text-primary font-semibold text-lg mb-2">{exp.company}</p>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-3">
              {exp.type}
            </span>
            {exp.hasCertificate && (
              <button
                onClick={() => setShowCertificate(true)}
                className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-medium rounded-full hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Award className="h-4 w-4" />
                View Certificate
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="font-medium">{exp.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">{exp.location}</span>
            </div>
          </div>

          {/* {exp.achievements && (
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3">Key Achievements & Learning</h5>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li 
                    key={achIndex}
                    className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {exp.technologies && (
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-2">Technologies & Tools Used</h5>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  const currentExperience = experiences.find(exp => exp.hasCertificate && exp.certificateImagePath);

  return (
    <>
      <section ref={elementRef} id="experience" className={`py-20 ${className}`}>
        <div className="container mx-auto px-6">
          {showHeader && (
            <AnimatedSection animationType="fade" direction="up" className="text-center mb-12">
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
              <div className="space-y-4">
                <StaggeredContainer staggerDelay={50}>
                  {experiences.map((exp, index) => (
                    <CompactCard exp={exp} index={index} />
                  ))}
                </StaggeredContainer>
              </div>
            ) : (
              <div className="space-y-8">
                <StaggeredContainer staggerDelay={100}>
                  {experiences.map((exp, index) => (
                    <FullCard exp={exp} index={index} />
                  ))}
                </StaggeredContainer>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {currentExperience && (
        <CertificateModal experience={currentExperience} />
      )}
    </>
  );
};

// Compact version for sidebar/right column usage
export const CompactExperience = ({ className = "" }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <h4 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-primary" />
        Experience
      </h4>
      <ExperienceSection 
        variant="compact" 
        showHeader={false} 
        className="py-0"
      />
    </div>
  );
};

export default ExperienceSection;