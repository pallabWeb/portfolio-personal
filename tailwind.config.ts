import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Winky Rough', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'glow': 'var(--glow-primary)',
				'glow-subtle': 'var(--glow-subtle)',
				'elegant': 'var(--shadow-elegant)',
				'glow-shadow': 'var(--shadow-glow)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Base animations
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				
				// Webflow-style reveal animations
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translate3d(0, 30px, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
				},
				'fade-in-down': {
					'0%': { opacity: '0', transform: 'translate3d(0, -30px, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translate3d(-40px, 0, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translate3d(40px, 0, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale3d(0.9, 0.9, 1)' },
					'100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' }
				},
				'scale-in-center': {
					'0%': { opacity: '0', transform: 'scale3d(0.8, 0.8, 1)' },
					'100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' }
				},
				'rotate-in': {
					'0%': { opacity: '0', transform: 'rotate3d(0, 0, 1, -5deg) scale3d(0.95, 0.95, 1)' },
					'100%': { opacity: '1', transform: 'rotate3d(0, 0, 1, 0deg) scale3d(1, 1, 1)' }
				},
				
				// Hero text animations
				'text-reveal': {
					'0%': { opacity: '0', transform: 'translateY(100%)' },
					'100%': { opacity: '1', transform: 'translateY(0%)' }
				},
				'word-reveal': {
					'0%': { opacity: '0', transform: 'rotateX(-90deg) translateY(50px)' },
					'100%': { opacity: '1', transform: 'rotateX(0deg) translateY(0px)' }
				},
				'letter-reveal': {
					'0%': { opacity: '0', transform: 'scale(0.3) rotate(10deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
				},
				
				// Interactive animations
				'hover-lift': {
					'0%': { transform: 'translate3d(0, 0, 0)' },
					'100%': { transform: 'translate3d(0, -8px, 0)' }
				},
				'magnetic-hover': {
					'0%': { transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)' },
					'100%': { transform: 'translate3d(var(--mouse-x, 0), var(--mouse-y, 0), 0) scale3d(1.05, 1.05, 1)' }
				},
				'button-morph': {
					'0%': { borderRadius: 'var(--radius)' },
					'100%': { borderRadius: '50px' }
				},
				'glow-expand': {
					'0%': { boxShadow: 'var(--glow-subtle)' },
					'100%': { boxShadow: '0 0 30px var(--primary-glow), 0 0 60px var(--primary-glow)' }
				},
				
				// Background animations
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translate3d(0, 0px, 0)' },
					'50%': { transform: 'translate3d(0, -15px, 0)' }
				},
				'float-offset': {
					'0%, 100%': { transform: 'translate3d(0, 0px, 0)' },
					'33%': { transform: 'translate3d(0, -10px, 0)' },
					'66%': { transform: 'translate3d(0, -5px, 0)' }
				},
				'particle-float': {
					'0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
					'33%': { transform: 'translate3d(30px, -30px, 0) rotate(120deg)' },
					'66%': { transform: 'translate3d(-20px, 20px, 0) rotate(240deg)' }
				},
				
				// Loading animations  
				'slide-up-fade': {
					'0%': { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0%, 0)' }
				},
				'slide-down-fade': {
					'0%': { opacity: '1', transform: 'translate3d(0, 0%, 0)' },
					'100%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' }
				},
				
				// Progress animations
				'progress-fill': {
					'0%': { width: '0%' },
					'100%': { width: 'var(--progress-width, 100%)' }
				},
				'counter-up': {
					'0%': { '--counter-value': '0' },
					'100%': { '--counter-value': 'var(--target-value, 100)' }
				},
				
				// Card animations
				'card-flip': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(180deg)' }
				},
				'card-tilt': {
					'0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
					'100%': { transform: 'perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))' }
				},
				
				// Navigation animations
				'nav-slide-down': {
					'0%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0%, 0)' }
				},
				'nav-fade-in': {
					'0%': { opacity: '0', transform: 'scale3d(0.95, 0.95, 1) translate3d(0, -10px, 0)' },
					'100%': { opacity: '1', transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)' }
				}
			},
			animation: {
				// Base animations
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				// Reveal animations with optimized timing
				'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'fade-in-down': 'fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'fade-in-left': 'fade-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1)', 
				'fade-in-right': 'fade-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'scale-in-center': 'scale-in-center 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'rotate-in': 'rotate-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				
				// Text animations with stagger support
				'text-reveal': 'text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'word-reveal': 'word-reveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'letter-reveal': 'letter-reveal 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
				
				// Interactive animations
				'hover-lift': 'hover-lift 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'magnetic-hover': 'magnetic-hover 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				'button-morph': 'button-morph 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				'glow-expand': 'glow-expand 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				
				// Background animations
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'float-offset': 'float-offset 8s ease-in-out infinite',
				'particle-float': 'particle-float 20s linear infinite',
				
				// Page transitions
				'slide-up-fade': 'slide-up-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-down-fade': 'slide-down-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				
				// Progress and counters
				'progress-fill': 'progress-fill 2s cubic-bezier(0.16, 1, 0.3, 1)',
				'counter-up': 'counter-up 2s cubic-bezier(0.16, 1, 0.3, 1)',
				
				// 3D effects
				'card-flip': 'card-flip 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'card-tilt': 'card-tilt 0.2s ease-out',
				
				// Navigation
				'nav-slide-down': 'nav-slide-down 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'nav-fade-in': 'nav-fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				
				// Legacy support
				'fade-in': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'glow-pulse': 'glow-expand 3s ease-in-out infinite',
				'float': 'float-gentle 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
