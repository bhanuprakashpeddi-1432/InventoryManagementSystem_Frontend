// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import InventoryList from './components/InventoryList';
import DeliveryTracker from './components/DeliveryTracker';
import Alerts from './components/Alerts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ 
            flexGrow: 1, 
            padding: '24px',
            marginLeft: '240px', // Matches sidebar width
            '@media (max-width: 600px)': {
              marginLeft: '0',
              padding: '16px'
            }
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inventory" element={<InventoryList />} />
              <Route path="/deliveries" element={<DeliveryTracker />} />
              <Route path="/alerts" element={<Alerts />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;