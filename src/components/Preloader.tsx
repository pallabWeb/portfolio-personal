import { useState, useEffect } from 'react';
import { TextReveal } from '@/components/WebflowAnimations';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const languages = [
    { text: "Hello", lang: "English" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "নমস্কার", lang: "Bengali" },
    { text: "Hola", lang: "Spanish" },
    { text: "こんにちは", lang: "Japanese" }
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds total loading time

    // Language cycling
    const languageInterval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 600);

    // Complete preloader after duration
    const timer = setTimeout(() => {
      clearInterval(languageInterval);
      // Start slide up animation
      setIsSliding(true);
      // Complete preloader after slide animation
      setTimeout(() => {
        onComplete();
      }, 800);
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(languageInterval);
    };
  }, [onComplete, languages.length]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-transform duration-700 ease-in-out ${
      isSliding ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="text-center space-y-8">
        <div className="relative h-32 flex items-center justify-center">
          <TextReveal 
            key={currentLanguage}
            text={languages[currentLanguage]?.text}
            className="text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Preloader;