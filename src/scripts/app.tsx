import * as React from 'react'
import Routes from './routes'
import {Provider} from 'react-redux'
import {Store} from '@app/store'

class App extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <Provider store={Store}>
          <Routes />
        </Provider>
      </React.Fragment>
    )
  }
}

export default App
