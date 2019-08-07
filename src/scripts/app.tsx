import * as React from 'react';
import { ThemeProvider } from '@app/utils/styled';
import { GlobalStyles } from '@app/components/styled';
import { MainTheme } from '@app/themes';

const App = () => {
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
};

export default App;
