import { css } from '@emotion/react';
import 'modern-normalize';

export const Style = css`
  body {
    margin: 0;
    padding: 20px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5e5e5;
    font-size: 22px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  p,
  h1,
  h2 {
    margin: 0;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
