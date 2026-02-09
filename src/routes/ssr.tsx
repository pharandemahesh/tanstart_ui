import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Typography, Paper, Container } from '@mui/material'
import { prisma } from '../lib/db'

/**
 * DEBUG STEP: Re-introducing createServerFn with minimal data.
 */
const getTestMessage = createServerFn({ method: 'GET' })
  .handler(async () => {
    // Check if we have any messages, if not, create one
    let message = await prisma.message.findFirst({
      orderBy: { createdAt: 'desc' }
    })

    if (!message) {
      message = await prisma.message.create({
        data: { text: "Hello from the SQLite Database!" }
      })
    }

    return message.text
  })

export const Route = createFileRoute('/ssr')({
  loader: async () => {
    const message = await getTestMessage()
    return {
      message,
      timestamp: new Date().toLocaleString(),
    }
  },
  component: SSRComponent,
})

function SSRComponent() {
  const data = Route.useLoaderData()

  return (
    <Container maxWidth="md" sx={{ py: 8, marginLeft: '70px' }}>
      <Typography variant="h3" fontWeight={800} gutterBottom>
        Minimal Server Function Test
      </Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h6">{data.message}</Typography>
        <Typography variant="caption">{data.timestamp}</Typography>
      </Paper>
    </Container>
  )
}
