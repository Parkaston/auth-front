import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
    <Typography
    variant="h6"
    component={Link}
    to="/"
    sx={{
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit'
    }}
>
  Auth App
</Typography>
        <Box>
          {token ? (
            <>
              <Button color="inherit" component={Link} to="/profile">
                Perfil
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
//Usamos Material UI para crear una barra de navegacion sencilla con enlaces a las diferentes
//páginas de la aplicación.