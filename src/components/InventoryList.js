import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Divider,
  useTheme,
  LinearProgress,
  Tooltip
} from '@mui/material';
import {
  Inventory as InventoryIcon,
  Warning as WarningIcon
} from '@mui/icons-material';

// Enhanced inventory data with thresholds and categories
const dummyInventory = [
  { 
    id: 1, 
    name: 'Laptop', 
    quantity: 20, 
    threshold: 5,
    category: 'Electronics',
    lastRestocked: '2 days ago'
  },
  { 
    id: 2, 
    name: 'Mobile Phone', 
    quantity: 35, 
    threshold: 10,
    category: 'Electronics',
    lastRestocked: '1 week ago'
  },
  { 
    id: 3, 
    name: 'Keyboard', 
    quantity: 12, 
    threshold: 15,
    category: 'Accessories',
    lastRestocked: '3 days ago'
  },
  { 
    id: 4, 
    name: 'Mouse', 
    quantity: 8, 
    threshold: 10,
    category: 'Accessories',
    lastRestocked: '5 days ago'
  },
];

const getStockStatus = (quantity, threshold) => {
  const percentage = (quantity / threshold) * 100;
  if (quantity <= threshold) return { status: 'Low', color: 'error', value: 100 };
  if (percentage <= 150) return { status: 'Medium', color: 'warning', value: percentage };
  return { status: 'High', color: 'success', value: 100 };
};

const InventoryList = ({ compact = false }) => {
  const theme = useTheme();

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
        <InventoryIcon color="primary" sx={{ mr: 1 }} />
        Inventory Overview
      </Typography>

      <List sx={{ width: '100%' }}>
        {dummyInventory.map((item) => {
          const stockStatus = getStockStatus(item.quantity, item.threshold);
          
          return (
            <React.Fragment key={item.id}>
              <ListItem alignItems="flex-start" sx={{ px: compact ? 0 : 2 }}>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography component="span" variant="body1" sx={{ fontWeight: 500 }}>
                        {item.name}
                      </Typography>
                      <Chip 
                        label={item.category} 
                        size="small" 
                        variant="outlined" 
                        sx={{ ml: 1 }} 
                      />
                    </Box>
                  }
                  secondary={
                    <React.Fragment>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          sx={{ mr: 2 }}
                        >
                          {item.quantity} in stock
                          {item.quantity <= item.threshold && (
                            <Tooltip title={`Low stock (threshold: ${item.threshold})`}>
                              <WarningIcon color="error" sx={{ ml: 1, fontSize: '1rem' }} />
                            </Tooltip>
                          )}
                        </Typography>
                        <Typography
                          component="span"
                          variant="caption"
                          color="text.secondary"
                        >
                          Last restock: {item.lastRestocked}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={stockStatus.value}
                        color={stockStatus.color}
                        sx={{ 
                          height: 6,
                          borderRadius: 3,
                          mt: 1,
                          backgroundColor: theme.palette.grey[200]
                        }}
                      />
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <Chip 
                    label={stockStatus.status} 
                    color={stockStatus.color} 
                    size="small" 
                    variant="outlined"
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
      </List>
    </Paper>
  );
};

export default InventoryList;