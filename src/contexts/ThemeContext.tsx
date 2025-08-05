import { createContext, useContext } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

const ThemeContext = createContext({});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemeProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};