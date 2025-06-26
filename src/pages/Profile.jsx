import { useEffect, useState } from 'react';
import { Typography, Container, Box, Paper, TextField, Button } from '@mui/material';
import { API_BASE_URL } from '../config';
import PageWrapper from '../components/PageWrapper';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ username: '', email: '', description: '' });
  const [isEditing, setIsEditing] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchProfile = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) throw new Error("Token inválido o expirado");

        const data = await res.json();
        setUser(data.user);
        console.log("👤 Perfil recibido:", data);
        setFormData({
          username: data.username || '',
          email: data.email || '',
          description: data.description || ''
        });
      } catch (err) {
        console.error(err);
        alert("Error al obtener el perfil");
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_BASE_URL}/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error("Error al actualizar el perfil");

      const data = await res.json();
      alert(data.message);
      setUser(data.user);
      setIsEditing(false); // Salimos del modo edición
    } catch (err) {
      console.error(err);
      alert("Error al guardar los cambios");
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
        <Paper elevation={4} sx={{ padding: 4, width: 400, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Perfil
          </Typography>

          {user ? (
            <>
              {isEditing ? (
                <>
                  <TextField
                    label="Nombre"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Descripción"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                  />
                  <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" onClick={handleUpdate}>
                      Guardar
                    </Button>
                    <Button variant="outlined" onClick={() => setIsEditing(false)}>
                      Cancelar
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Nombre:</strong> {user.username}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Email:</strong> {user.email}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Descripción:</strong> {user.description || 'Sin descripción'}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setIsEditing(true)}
                    sx={{ mt: 2 }}
                  >
                    Editar perfil
                  </Button>
                </>
              )}
            </>
          ) : (
            <Typography variant="body2">Cargando datos...</Typography>
          )}
        </Paper>
      </Box>
    </PageWrapper>
  );
}
