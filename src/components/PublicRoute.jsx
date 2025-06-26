import { Navigate } from 'react-router-dom';

// Si ya hay token, redirige al perfil. Si no, deja entrar a la ruta pública
export default function PublicRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/profile" /> : children;
}