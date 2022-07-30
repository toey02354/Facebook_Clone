import { Theme, createTheme } from '@mui/material'
import { blue } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4267B2',
      light: '#e4e6eb',
      dark: '#b0b3b8',
    },
    secondary: {
      main: '#242526',
      light: '#3a3b3c',
      dark: '#18191a',
    },
    common: {
      black: '#000',
      white: '#ffff',
    },
  },
})
