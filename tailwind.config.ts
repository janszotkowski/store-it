import type { Config } from 'tailwindcss';
import animatedPlugin from 'tailwindcss-animated';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                white: '#fff',

                gray: {
                    10: '#E6E6E6',
                    20: '#CCC',
                    30: '#B3B3B3',
                    40: '#999',
                    50: '#808080',
                    60: '#6C6C6C',
                    70: '#575757',
                    80: '#434343',
                    90: '#2E2E2E',
                    100: '#1A1A1A'
                },

                blue: {
                    10: '#CCF1FC',
                    20: '#99E4F9',
                    30: '#66D6F6',
                    40: '#33C9F3',
                    50: '#00BBF0',
                    60: '#049DCE',
                    70: '#097FAC',
                    80: '#0D608B',
                    90: '#124269',
                    100: '#162447'
                },

                red: {
                    10: '#F6CCCC',
                    20: '#EC9999',
                    30: '#E36666',
                    40: '#D93333',
                    50: '#D00000',
                    60: '#B40000',
                    70: '#900',
                    80: '#7D0000',
                    90: '#620000',
                    100: '#460000'
                },

                green: {
                    10: '#CFF2D3',
                    20: '#A0E5A7',
                    30: '#70D77B',
                    40: '#41CA4F',
                    50: '#11BD23',
                    60: '#0EA31E',
                    70: '#0A8A19',
                    80: '#077013',
                    90: '#03570E',
                    100: '#003D09'
                },

                yellow: {
                    10: '#FFF7CC',
                    20: '#FFEF99',
                    30: '#FFE766',
                    40: '#FFDF33',
                    50: '#FFD700',
                    60: '#DBB800',
                    70: '#B89800',
                    80: '#947900',
                    90: '#715900',
                    100: '#4D3A00'
                },

                purple: {
                    10: '#F0CCF6',
                    20: '#E099EC',
                    30: '#D166E3',
                    40: '#C233D9',
                    50: '#B300D0',
                    60: '#9A00B4',
                    70: '#810097',
                    80: '#69007D',
                    90: '#500062',
                    100: '#370046'
                },

                orange: {
                    10: '#FFE6CC',
                    20: '#FFCC99',
                    30: '#FFB366',
                    40: '#FF9933',
                    50: '#FF8000',
                    60: '#DB6C00',
                    70: '#B85800',
                    80: '#944300',
                    90: '#712F00',
                    100: '#4D1A00'
                }
            }
        }
    },
    plugins: [animatedPlugin]
} satisfies Config;
