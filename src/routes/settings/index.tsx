import { createFileRoute } from '@tanstack/react-router'
import { Box, Typography, Paper } from '@mui/material'

export const Route = createFileRoute('/settings/')({
  component: SettingsPage,
})

function SettingsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
        Settings
      </Typography>
      <Paper sx={{ p: 3, borderRadius: '16px' }}>
        <Typography variant="body1">
          Application settings and configurations will appear here.
        </Typography>
      </Paper>
    </Box>
  )
}
