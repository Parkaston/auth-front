import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { API_BASE_URL } from '../config';
import PageWrapper from '../components/PageWrapper';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error desconocido");
      }

      navigate("/login");
    } catch (error) {
      console.error("Error al registrar:", error.message);
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
            disabled={loading}
          >
            {loading ? "Cargando..." : "Registrarse"}
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
