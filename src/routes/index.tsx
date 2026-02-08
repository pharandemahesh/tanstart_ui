import { createFileRoute } from '@tanstack/react-router'
import { Typography, Container, Paper } from '@mui/material'

export const Route = createFileRoute('/')({ component: Dashboard })

function Dashboard() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                Dashboard
            </Typography>
            <Paper sx={{ p: 3, borderRadius: '16px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)' }}>
                <Typography variant="h6">Welcome Back!</Typography>
                <Typography variant="body1" color="textSecondary">
                    This is your premium dashboard overview.
                </Typography>
            </Paper>
        </Container>
    )
}
