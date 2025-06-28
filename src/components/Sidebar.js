import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
  useMediaQuery,
  useTheme,
  Typography
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  LocalShipping as DeliveriesIcon,
  Notifications as AlertsIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Inventory', icon: <InventoryIcon />, path: '/inventory' },
  { text: 'Deliveries', icon: <DeliveriesIcon />, path: '/deliveries' },
  { text: 'Alerts', icon: <AlertsIcon />, path: '/alerts' }
];

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerWidth, setDrawerWidth] = React.useState(240);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      }}
    >
      <List>
        <ListItem sx={{ py: 2 }}>
          <ListItemText 
            primary={
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Inventory System
              </Typography>
            } 
          />
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
        
        {menuItems.map((item) => (
          <Tooltip title={item.text} placement="right" key={item.text}>
            <ListItem
              button
              onClick={() => navigate(item.path)}
              sx={{
                py: 1.5,
                backgroundColor: location.pathname === item.path 
                  ? theme.palette.primary.dark 
                  : 'transparent',
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;