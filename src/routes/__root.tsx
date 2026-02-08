import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { Box } from '@mui/material'


import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import NavBar from '../view/nav'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  notFoundComponent: () => <div style={{ padding: '20px', marginLeft: '70px' }}>Page Not Found</div>,
  component: RootComponent,
  shellComponent: RootDocument,
})

function RootComponent() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
      <NavBar />
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#f8fafc',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>

        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
