tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'nb-blue': '#4F647D',       
                        'nb-brown': '#905757',      
                        'nb-white': '#FFFFFF',       
                        'nb-peach': '#F6D6CB',      
                        'nb-text-dark': '#3F3F3F',  
                        'nb-bg': '#FFF9F2',         
                        'nb-blue-dark': '#43647F',  
                        'nb-studio': '#121212',
                    },
                    fontFamily: {
                        'display': ['"Shrikhand"', 'cursive'], 
                        'body': ['"Manrope"', 'sans-serif'],
                    },
                    borderRadius: {
                        'cozy': '1.5rem',
                        'super': '3.5rem',
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'marquee': 'marquee 40s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-15px)' },
                        },
                        marquee: {
                            '0%': { transform: 'translateX(0%)' },
                            '100%': { transform: 'translateX(-100%)' },
                        }
                    }
                }
            }
        }