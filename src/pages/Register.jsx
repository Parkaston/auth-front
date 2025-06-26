import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper } from '@mui/material';
import { API_BASE_URL } from '../config';
import PageWrapper from '../components/PageWrapper';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
const handleRegister = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json(); // Parseamos el body

    if (!response.ok) {
      // Mostramos el mensaje devuelto por el servidor si hay error
      throw new Error(data.message || "Error desconocido");
    }

    alert("Registro exitoso");
    navigate("/login");
  } catch (error) {
    alert(`Registro fallido: ${error.message}`);
    console.error("Error al registrar:", error);
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
            Registro
          </Typography>
          <TextField
            label="Nombre de usuario"
            fullWidth
            margin="normal"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
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
            onClick={handleRegister}
            sx={{ mt: 2 }}
          >
            Registrarse
          </Button>
        </Paper>
      </Box>
    </PageWrapper>
  );
}
