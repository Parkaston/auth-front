import { Navigate } from 'react-router-dom';

// Vamos a crear un Wrapper que haga privadas las rutas que necesitemos.
export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  // Si hay token, mostramos el contenido
  // Si no, redireccionamos al login
  return token ? children : <Navigate to="/login" />;
}