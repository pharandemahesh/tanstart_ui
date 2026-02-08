import { Box, Typography, Paper, Container } from '@mui/material';

export default function DataView() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
                elevation={6}
                sx={{
                    p: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '300px',
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                    color: 'white',
                    borderRadius: 8,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    },
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom fontWeight="800" sx={{ letterSpacing: '-0.02em' }}>
                    DATA
                </Typography>
                <Typography variant="h5" component="p" sx={{ opacity: 0.9, fontWeight: 300 }}>
                    Manage and visualize your core datasets efficiently.
                </Typography>
                <Box sx={{ mt: 4, width: '100%', height: '2px', bgcolor: 'rgba(255,255,255,0.2)' }} />
            </Paper>
        </Container>
    );
}
