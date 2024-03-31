import React from 'react';
import ReactDOM from 'react-dom/client';
import '../public/assets/css/reset.css';
import '../public/assets/css/font.css';
import '../public/assets/css/ico.css';
import '../public/assets/css/common.css';
import '../public/assets/css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
