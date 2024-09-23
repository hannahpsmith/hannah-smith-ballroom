import { extendTheme } from '@chakra-ui/react';
import background from '../assets/background-ink-drop.png';

const theme = extendTheme({
    colors: {
        brand: {
            50: "#ffffff", // white
            200: "#c4b47f", // light gold
            300: "#a78f3f", // gold
            400: "#747471", // dark grey
            900: "#000000", // black
        }
    },
    styles: {
        global: {
            'html, body': {
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
            },
        },
    },
})

export default theme