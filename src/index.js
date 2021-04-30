import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { store } from './ReduxFiles/store';
import { CartContextProvider } from './Components/ContextCart/CartContext';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
