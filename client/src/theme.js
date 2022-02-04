import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    colors: {
      primary: '#18D2B1',
      menu: '#5A5353',
      transparentPrimary: 'rgba(24,210,177,0.6)'
    },
    components: {
      Button: {
        variants: {
          'primary-btn': {
            p:'3',
            borderRadius:'0',
            bg:'primary',
            color:'white',
            _hover: {
              bg: 'primary'
            }
          }
        }
      }
    }
  })

  export default theme