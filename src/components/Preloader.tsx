import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const languages = [
    { text: "Hello", lang: "English" },
    { text: "Bonjour", lang: "French" },
    { text: "Hola", lang: "Spanish" },
    { text: "Hallo", lang: "German" },
    { text: "Ciao", lang: "Italian" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "안녕하세요", lang: "Korean" },
    { text: "مرحبا", lang: "Arabic" },
    { text: "Привет", lang: "Russian" },
    { text: "नमस्ते", lang: "Hindi" }
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds total loading time
    const interval = 50; // Update every 50ms
    const increment = (100 / duration) * interval;

    // Language cycling
    const languageInterval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 300);

    // Progress bar
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          clearInterval(languageInterval);
          // Start slide up animation
          setTimeout(() => {
            setIsSliding(true);
            // Complete preloader after slide animation
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 300);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      clearInterval(languageInterval);
    };
  }, [onComplete, languages.length]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-transform duration-700 ease-in-out ${
      isSliding ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="text-center space-y-8">
        <div className="relative h-24 flex items-center justify-center">
          <h1 
            key={currentLanguage}
            className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent opacity-100 transition-opacity duration-300"
          >
            {languages[currentLanguage]?.text}
          </h1>
        </div>
        
        <div className="w-80">
          <Progress value={progress} className="h-2" />
        </div>
        
        <p className="text-muted-foreground text-sm">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;