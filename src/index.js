import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    gray: '#817070',
    accent: '#B58F8F',
    secondary: '#817070',
  },
  radii: {
    xs: '5px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
