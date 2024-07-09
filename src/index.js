import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProovedorTema } from './contextos/contextoTema';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProovedorTema> 
         <App />
      </ProovedorTema>
    </BrowserRouter>
  </React.StrictMode>
);

