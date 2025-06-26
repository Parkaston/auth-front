
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {TextField, Button, Typography, Container, Box, Paper } from '@mui/material';
import { API_BASE_URL } from '../config';
import PageWrapper from '../components/PageWrapper';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      // Redirigimos al perfil
      navigate("/profile");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión");
    }
  };

return (
    <PageWrapper>
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Paper elevation={4} sx={{ padding: 4, width: 350 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Iniciar Sesión
          </Typography>
          <TextField
            label="Correo"
            fullWidth
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Iniciar Sesión
          </Button>
        </Paper>
      </Box>
    </PageWrapper>
  );
}
