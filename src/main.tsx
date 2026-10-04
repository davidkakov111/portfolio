import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material';
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import { Analytics } from '@vercel/analytics/react';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export const createRoot = ViteReactSSG(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <Analytics />
  </StrictMode>,
)
