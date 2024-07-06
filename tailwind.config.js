/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1E003F',
                primary_50: 'rgba(30, 0, 63, 0.3)',
                secondary: '#A64D79',
                secondary_50: 'rgba(166, 77, 121, 0.3)',
                tertiary: '#FF5E8E',
                nav: '#939EA4',
                content: '#727272',
            },
            screens: {
                ssm: '576px',
                mlg: '992px',
            },
            boxShadow: {
                header: '0px 15px 10px -20px rgba(0,0,0,0.45)',
                nav: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.border-image-gradient': {
                    borderImage: 'linear-gradient(to right, transparent, #b2b2b2, transparent) 1',
                },
            };

            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
