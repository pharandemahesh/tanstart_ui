import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Box, useTheme, alpha, IconButton, Typography } from '@mui/material';
import DashboardRootIcon from '@mui/icons-material/DashboardRounded';
import AnalyticsIcon from '@mui/icons-material/AnalyticsRounded';
import DatabaseIcon from '@mui/icons-material/StorageRounded';
import SettingsIcon from '@mui/icons-material/SettingsRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloudIcon from '@mui/icons-material/CloudDownloadRounded';

export default function NavBar() {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const navItems = [
        { label: 'Dashboard', icon: <DashboardRootIcon />, path: '/' },
        { label: 'Charts', icon: <AnalyticsIcon />, path: '/charts/' },
        { label: 'Data', icon: <DatabaseIcon />, path: '/data' },
        { label: 'SSR', icon: <CloudIcon />, path: '/ssr' },
        { label: 'Settings', icon: <SettingsIcon />, path: '/settings/' },
    ].reverse();

    // Radial Menu Settings
    const radius = 90; // Slightly increased to fit text
    const startAngle = -15; // Shifted clockwise
    const endAngle = 105; // Shifted counter-clockwise

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                position: 'fixed',
                bottom: 32,
                left: 32,
                zIndex: theme.zIndex.drawer + 1,
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Radial Navigation Items */}
            {navItems.map((item, index) => {
                const angle = startAngle + (index * (endAngle - startAngle)) / (navItems.length - 1);
                const angleRad = (angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = -Math.sin(angleRad) * radius;

                return (
                    <IconButton
                        key={item.label}
                        component={Link}
                        to={item.path}
                        preload="intent"
                        activeProps={{
                            style: {
                                backgroundColor: theme.palette.primary.main,
                                color: '#fff',
                                transform: `translate(${x}px, ${y}px) scale(1.1)`,
                                boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.4)}`,
                            }
                        }}
                        inactiveProps={{
                            style: {
                                color: theme.palette.text.primary,
                                backgroundColor: alpha(theme.palette.background.paper, 0.95),
                            }
                        }}
                        sx={{
                            position: 'absolute',
                            width: 56,
                            height: 56,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '22px', // Squaricle shape
                            backdropFilter: 'blur(12px)',
                            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            transform: isHovered
                                ? `translate(${x}px, ${y}px) scale(1)`
                                : 'translate(0, 0) scale(0)',
                            opacity: isHovered ? 1 : 0,
                            zIndex: isHovered ? 1 : -1,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.light,
                                color: '#fff',
                                transform: `translate(${x}px, ${y}px) scale(1.1)`,
                            },
                        }}
                    >
                        <Box sx={{ fontSize: '1.2rem', lineHeight: 1, mb: 0.2 }}>
                            {item.icon}
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '0.4rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                lineHeight: 1,
                                letterSpacing: '0.02em'
                            }}
                        >
                            {item.label}
                        </Typography>
                    </IconButton>
                );
            })}

            {/* Main Center Trigger */}
            <IconButton
                sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '24px', // Squaricle shape
                    backgroundColor: isHovered ? theme.palette.primary.main : alpha(theme.palette.background.paper, 0.9),
                    color: isHovered ? '#fff' : theme.palette.text.primary,
                    boxShadow: isHovered ? '0 12px 40px rgba(0,0,0,0.2)' : '0 8px 32px rgba(0,0,0,0.15)',
                    backdropFilter: 'blur(16px)',
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 2,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    '&:hover': {
                        backgroundColor: isHovered ? theme.palette.primary.main : alpha(theme.palette.background.paper, 0.9),
                    }
                }}
            >
                <MenuIcon sx={{
                    fontSize: '2.2rem',
                    transform: isHovered ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }} />
            </IconButton>
        </Box>
    );
}
