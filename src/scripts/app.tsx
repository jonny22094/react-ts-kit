import * as React from 'react'
import Routes from './routes'
import {Provider} from 'react-redux'
import {Store} from '@app/store'
import {ThemeProvider} from '@app/utils/styled'
import {GlobalStyles} from '@app/components/styled'
import {MainTheme} from '@app/themes'

class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <ThemeProvider theme={MainTheme}>
          <React.Fragment>
            <GlobalStyles />
            <Routes />
          </React.Fragment>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
