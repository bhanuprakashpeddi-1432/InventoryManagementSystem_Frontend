import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Inventory Management System
      </Typography>
      <Typography variant="body1">
        Select a section from the sidebar to get started.
      </Typography>
    </Box>
  );
};

export default Home;