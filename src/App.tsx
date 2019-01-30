import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import FormExample from './components/FormExample'

import theme from './theme/index'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <FormExample />
  </ThemeProvider>
)

export default App
