import React from 'react';
import { 
  Typography, 
  Box,
  Paper,
  useMediaQuery,
  useTheme 
} from '@mui/material';
import InventoryList from './InventoryList';
import DeliveryTracker from './DeliveryTracker';
import Alerts from './Alerts';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, p: isMobile ? 2 : 3}}>
      {/* Header Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 700, 
            color: '#1565c0',
            mb: 1
          }}
        >
          Real-Time Dashboard
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#666' }}>
          Complete overview of your inventory management system
        </Typography>
      </Box>
      
      {/* Single Column Layout */}
      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        
        {/* 1. Inventory Overview Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 4,
             borderRadius: 4,
            borderLeft: '6px solid #2196f3'
          }}
        >
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              color: '#1565c0',
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            📦 Inventory Overview
          </Typography>
          <InventoryList compact />
        </Paper>

        {/* 2. Active Deliveries Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 4,
            borderRadius: 3,
            borderLeft: '6px solid #4caf50'
          }}
        >
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              color: '#388e3c',
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            🚚 Active Deliveries
          </Typography>
          <DeliveryTracker compact />
        </Paper>

        {/* 3. Alerts Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            borderRadius: 3,
            borderLeft: '6px solid #ff9800'
          }}
        >
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              color: '#f57c00',
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            🔔 Recent Alerts & Notifications
          </Typography>
          <Alerts />
        </Paper>

      </Box>
    </Box>
  );
};

export default Dashboard;