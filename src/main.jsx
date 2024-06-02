import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material'

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';
import { SnackbarProvider } from './context/SnackbarContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
  
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
        <SnackbarProvider>
      <App />
    </SnackbarProvider>
        </I18nextProvider>
     
    </Router>
  </React.StrictMode>,
)
