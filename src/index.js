import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App'
import { BrowserRouter as Router  } from 'react-router-dom'
import store from './app/store';
import { Provider } from 'react-redux';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // if I delete header and footer from this level it won`t show up in cart page even after I add it either to app.js or carts.jsx
  <React.StrictMode>
    <Router>
      <Provider store={store}>
          <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

 