import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//Importamos React, ReactDOM y BrowserRouter de react-router-dom para manejar las rutas de nuestra aplicación
//"Envolvemos" nuestros componentes correctamente con BrowserRouter para que puedan acceder a las rutas definidas en App.jsx
//y así poder navegar entre las diferentes páginas de nuestra aplicación.


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);