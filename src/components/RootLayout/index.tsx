import React from 'react';
import { JssProvider, ThemeProvider, createUseStyles } from 'react-jss';
import { Color, theme as rootTheme } from 'style';
import 'normalize.css';
import 'antd/dist/antd.css';

const useGlobalStyle = createUseStyles({
  '@global': {
    html: {
      height: '100%',
      width: '100%',
    },
    body: {
      height: '100%',
      background: Color.LIGHT_BASE_BACKGROUND,
    },
    '#___gatsby': {
      height: '100%',
    },
    '#gatsby-focus-wrapper': {
      height: '100%',
    },
  },
});

function RootLayout(props) {
  const { children } = props;
  useGlobalStyle();
  return (
    <JssProvider>
      <ThemeProvider theme={rootTheme}>{children}</ThemeProvider>
    </JssProvider>
  );
}

export default RootLayout;
