import * as React from 'react';
import { ThemeProvider } from '@app/utils/styled';
import { GlobalStyles } from '@app/components/styled';
import { MainTheme } from '@app/themes';

class App extends React.Component<{}> {
  render() {
    return (
      <>
        <ThemeProvider theme={MainTheme}>
          <React.Fragment>
            <GlobalStyles />
            <div>Hello!!!</div>
          </React.Fragment>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
