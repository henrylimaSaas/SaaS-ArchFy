
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1F3B73', // Azul Profundo
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F4F4F4', // Cinza Claro
					foreground: '#3D3D3D'
				},
				accent: {
					DEFAULT: '#89F1B3', // Verde Neon Suave
					foreground: '#1F3B73'
				},
				destructive: {
					DEFAULT: '#E74C3C', // Vermelho para alertas
					foreground: '#FFFFFF'
				},
				warning: {
					DEFAULT: '#F39C12', // Amarelo para avisos
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F4F4F4',
					foreground: '#3D3D3D'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#3D3D3D'
				},
				sidebar: {
					DEFAULT: '#1F3B73', // Sidebar com Azul Profundo
					foreground: '#FFFFFF',
					accent: '#89F1B3', // Verde Neon para itens ativos
				}
			},
			borderRadius: {
				lg: '0.75rem', // 12px
				md: '0.5rem', // 8px
				sm: '0.25rem' // 4px
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				metrics: ['DM Sans', 'sans-serif'],
			},
			boxShadow: {
				'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
			},
			spacing: {
				'8': '8px',
				'16': '16px',
				'24': '24px',
				'32': '32px',
				'40': '40px',
				'48': '48px',
				'56': '56px',
				'64': '64px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
