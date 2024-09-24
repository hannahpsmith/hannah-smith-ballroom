import { extendTheme } from '@chakra-ui/react';
import background from '../assets/background-ink-drop.png';

const theme = extendTheme({
    colors: {
        brand: {
            50: "#f1f1f1", // light grey
            200: "#c4b47f", // light gold
            300: "#a78f3f", // gold
            400: "#747471", // dark grey
            900: "#000000", // black
        }
    },
    styles: {
        global: (props) => ({
            'html, body': {
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(9, 8, 12, 1)',
                height: '100vh',
                width: '100vw',
                overflowX: 'hidden',
            },
            // '.calendly-badge-widget': {
            //     zIndex: '1 !important',
            // },
            
            // '.custom-button': {
            //     position: 'relative',
            //     zIndex: '10',
            // },
            // '.custom-button:hover': {
            // backgroundColor: '#9F7AEA !important',
            // color: 'white !important',
            // },
        }),
    },
})

export default theme