import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core'
import Home from './Home'
const useStyles = makeStyles({
  root: {}
})

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ef5350'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#1565c0'
    }
  }
})

export default function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
