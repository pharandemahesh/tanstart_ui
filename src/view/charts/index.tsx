import { Box, Typography, Paper, Container, Grid } from '@mui/material';

export default function ChartsView() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Analytics & Charts
            </Typography>
            <Grid container spacing={3}>
                {[1, 2, 3, 4].map((item) => (
                    <Grid item xs={12} md={6} key={item}>
                        <Paper
                            sx={{
                                p: 3,
                                height: 240,
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '20px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                }
                            }}
                        >
                            <Typography variant="h6" color="primary" gutterBottom>
                                Chart {item}
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.02)', borderRadius: '12px' }}>
                                <Typography color="textSecondary">Visual Data Placeholder</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
