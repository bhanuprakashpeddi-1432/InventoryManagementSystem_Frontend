// src/components/Dashboard.js
import React from 'react';
import { 
  Grid, 
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
    <Box sx={{ flexGrow: 1, p: isMobile ? 2 : 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
        Real-Time Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Inventory Summary */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Inventory Overview
            </Typography>
            <InventoryList compact />
          </Paper>
        </Grid>

        {/* Delivery Agents */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Active Deliveries
            </Typography>
            <DeliveryTracker compact />
          </Paper>
        </Grid>

        {/* Alerts */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Recent Alerts
            </Typography>
            <Alerts />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;