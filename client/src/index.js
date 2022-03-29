import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './theme'
import { store } from './store'
import { Provider } from 'react-redux'
console.log(theme.config.initialColorMode)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename='/'>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <App />
        </ChakraProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
