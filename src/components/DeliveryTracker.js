import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Paper,
  Chip,
  Divider,
  useTheme
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Directions as DirectionsIcon,
  Person as PersonIcon
} from '@mui/icons-material';

const dummyLocations = [
  { 
    agentId: 'A001', 
    agentName: 'Ravi Kumar', 
    latitude: 16.5062, 
    longitude: 80.6480,
    status: 'in_transit',
    deliveryId: 'D-1024',
    lastUpdate: '5 mins ago'
  },
  { 
    agentId: 'A002', 
    agentName: 'Sita Ram', 
    latitude: 16.5400, 
    longitude: 80.6200,
    status: 'delivered',
    deliveryId: 'D-1025',
    lastUpdate: '20 mins ago'
  },
];

const getStatusChip = (status) => {
  switch (status) {
    case 'in_transit':
      return <Chip label="In Transit" color="primary" size="small" />;
    case 'delivered':
      return <Chip label="Delivered" color="success" size="small" />;
    default:
      return <Chip label="Pending" color="default" size="small" />;
  }
};

const DeliveryTracker = ({ compact = false }) => {
  const theme = useTheme();

  const openGoogleMaps = (lat, lng) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <Paper elevation={compact ? 0 : 2} sx={{ p: compact ? 0 : 2 }}>
      <Typography 
        variant={compact ? "subtitle1" : "h6"} 
        gutterBottom 
        sx={{ 
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          mb: compact ? 1 : 2
        }}
      >
        <LocationIcon color="primary" sx={{ mr: 1 }} />
        Delivery Tracking
      </Typography>

      <List sx={{ width: '100%' }}>
        {dummyLocations.map((loc) => (
          <React.Fragment key={loc.agentId}>
            <ListItem alignItems="flex-start" sx={{ px: compact ? 0 : 2 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography component="span" variant="body1" sx={{ fontWeight: 500 }}>
                      {loc.agentName}
                    </Typography>
                    <Box sx={{ ml: 'auto' }}>
                      {getStatusChip(loc.status)}
                    </Box>
                  </Box>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                      display="block"
                    >
                      Delivery ID: {loc.deliveryId}
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      color="text.secondary"
                      display="block"
                    >
                      Last update: {loc.lastUpdate}
                    </Typography>
                  </React.Fragment>
                }
              />
              <IconButton 
                edge="end" 
                aria-label="directions"
                onClick={() => openGoogleMaps(loc.latitude, loc.longitude)}
                sx={{ ml: 1 }}
              >
                <DirectionsIcon color="action" />
              </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default DeliveryTracker;