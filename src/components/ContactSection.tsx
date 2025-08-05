import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Send, Github, Linkedin, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import xLogo from "@/assets/logos/logo.svg";
import { AnimatedSection } from "@/components/WebflowAnimations";

export const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the edge function
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={elementRef} id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection animationType="fade" direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 p-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat about technology? I'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection animationType="slide" direction="left" delay={100}>
            <Card className="p-8 bg-gradient-card border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-muted border-border focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-muted border-border focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px] bg-muted border-border focus:ring-primary resize-none"
                />
              </div>

              <Button type="submit" variant="glow" size="lg" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animationType="slide" direction="right" delay={200} className="space-y-8">
            {/* Email */}
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">pallabm2024@gmail.com</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/pallabWeb" target="_blank"
                  className="p-3 bg-card border border-border rounded-lg hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pallab-mondal-a4a1182ab/" target="_blank"
                  className="p-3 bg-card border border-border rounded-lg hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com" target="_blank"
                  className="p-3 bg-card border border-border rounded-lg hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  aria-label="Twitter"
                >
                  <img src={xLogo} alt="" className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-gradient-primary rounded-lg text-primary-foreground">
              <h3 className="text-lg font-semibold mb-2">Ready to start a project?</h3>
              <p className="mb-4 opacity-90">
                I'm always excited to work on new and challenging projects. Let's discuss how we can bring your ideas to life!
              </p>
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule a Call
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};