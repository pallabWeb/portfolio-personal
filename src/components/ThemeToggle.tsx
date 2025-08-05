import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[2.6vw] lg:h-[2.6vw] text-foreground bg-muted border-none rounded-full cursor-pointer font-medium hover:bg-muted/80 transition-all flex items-center justify-center"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon */}
      <Sun
        className={`w-4 h-4 transition-all duration-500 ${
          theme === 'dark'
            ? 'opacity-0 rotate-90 scale-0 absolute'
            : 'opacity-100 rotate-0 scale-100'
        }`}
      />
      
      {/* Moon Icon */}
      <Moon
        className={`w-4 h-4 transition-all duration-500 ${
          theme === 'dark'
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-90 scale-0 absolute'
        }`}
      />
    </button>
  );
}