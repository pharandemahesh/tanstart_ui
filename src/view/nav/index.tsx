import { Link } from '@tanstack/react-router';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, Typography, Tooltip, useTheme, alpha } from '@mui/material';
import DashboardRootIcon from '@mui/icons-material/DashboardRounded';
import AnalyticsIcon from '@mui/icons-material/AnalyticsRounded';
import DatabaseIcon from '@mui/icons-material/StorageRounded';
import SettingsIcon from '@mui/icons-material/SettingsRounded';

const drawerWidth = 70;

export default function NavBar() {
    const theme = useTheme();

    const navItems = [
        { label: 'Dashboard', icon: <DashboardRootIcon />, path: '/' },
        { label: 'Charts', icon: <AnalyticsIcon />, path: '/charts/' },
        { label: 'Data', icon: <DatabaseIcon />, path: '/data' },
        { label: 'Settings', icon: <SettingsIcon />, path: '/settings/' },
    ];

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: alpha(theme.palette.background.paper, 0.9),
                    backdropFilter: 'blur(12px)',
                    borderRight: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    borderLeft: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 2,
                    boxShadow: '4px 0 20px rgba(0,0,0,0.05)',
                    overflowX: 'hidden', // Remove horizontal scroll
                },
            }}
        >
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <List sx={{ width: '100%', p: 0.5 }}>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding sx={{ mb: 1, display: 'block' }}>
                            <Tooltip title={item.label} placement="right" arrow>
                                <ListItemButton
                                    component={Link}
                                    to={item.path}
                                    preload="intent"
                                    activeProps={{
                                        style: {
                                            backgroundColor: theme.palette.primary.main,
                                            color: '#fff',
                                        }
                                    }}
                                    inactiveProps={{
                                        style: {
                                            color: theme.palette.text.secondary,
                                        }
                                    }}
                                    sx={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '12px',
                                        transition: 'all 0.2s ease',
                                        minHeight: '60px',
                                        p: 1,
                                        mx: 'auto',
                                        width: '100%',
                                        '&:hover': {
                                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                            color: theme.palette.primary.main,
                                        },
                                        '&.active': {
                                            boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            color: 'inherit',
                                            mb: 0.2,
                                            '& svg': {
                                                fontSize: '1.4rem'
                                            }
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '0.5rem',
                                            letterSpacing: '0.02em',
                                            textAlign: 'center',
                                            lineHeight: 1,
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </ListItemButton>
                            </Tooltip>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer >
    );
}
