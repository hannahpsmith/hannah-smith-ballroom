import { extendTheme } from '@chakra-ui/react'

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
})

export default theme