import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/@themes/default'
import { GlobalStyles } from './styles/global'
import { HeaderComponent } from './components/Header'
import { BodyComponent } from './components/Body'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <HeaderComponent />
        <BodyComponent />
      </ThemeProvider>
    </>
  )
}

export default App
