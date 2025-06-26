import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import { AnimatePresence } from 'framer-motion';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// Este es el componente principal de nuestra aplicación React
//Sobre todo, vamos a importar los componentes y el navbar que hemos creado
const App = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Rutas públicas, solo accesibles si NO hay token */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
         {/* Ruta protegida, solo accesible si HAY un token */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
      </AnimatePresence>
    </>
  );
};
export default App;
