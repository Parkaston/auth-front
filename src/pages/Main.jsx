import { Box, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';




export default function Main() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

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
      <Paper elevation={4} sx={{ padding: 4, width: 350, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Bienvenido
        </Typography>
        <Typography variant="body1" gutterBottom>
          {token
            ? 'Estás autenticado. ¿Qué querés hacer?'
            : 'Por favor iniciá sesión o registrate'}
        </Typography>

        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {token ? (
            <>
              <Button variant="contained" color="primary" onClick={() => navigate('/profile')}>
                Ir a Perfil
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  localStorage.removeItem('token');
                  navigate('/');
                  window.location.reload();
                }}
              >
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="primary" onClick={() => navigate('/login')}>
                Iniciar Sesión
              </Button>
              <Button variant="outlined" onClick={() => navigate('/register')}>
                Registrarse
              </Button>
            </>
          )}
        </Box>
      </Paper>
    </Box>
     </PageWrapper>
  );
}
