import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const el = document.getElementById('root')
if (el) {
  const root = ReactDOM.createRoot(el).render(
      <App />
  );
}
