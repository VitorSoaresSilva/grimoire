import { GlobalStyles } from "@/styles/GlobalStyle"
import theme from "@/styles/theme"
import { ThemeProvider } from "styled-components"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Grimoire</title>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
 