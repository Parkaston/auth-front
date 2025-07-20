
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {TextField, Button, Typography, Container, Box, Paper } from '@mui/material';
import { API_BASE_URL } from '../config';
import PageWrapper from '../components/PageWrapper';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");
  const navigate = useNavigate();


const handleLogin = async () => {
  setLoading(true);
  setError("");

  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Credenciales incorrectas");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    navigate("/profile");

  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    setError(error.message); 
  } finally {
    setLoading(false);
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
           disabled={loading} // bloquea si está cargando
>
              {loading ? "Cargando..." : "Iniciar Sesión"}
          </Button>

{error && (
  <Typography variant="body2" color="error" mt={2}>
    {error}
  </Typography>
)}
        </Paper>
      </Box>
    </PageWrapper>
  );
}
