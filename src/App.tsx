import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/@themes/default'
import { GlobalStyles } from './styles/global'
import { HeaderComponent } from './components/Header/index'
import { BodyComponent } from './components/Body/index'

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
