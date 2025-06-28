import React from 'react';
import { 
  Alert,
  AlertTitle,
  List,
  ListItem,
  Typography,
  Paper,
  Collapse,
  IconButton,
  useTheme
} from '@mui/material';
import {
  Error as ErrorIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  Close as CloseIcon
} from '@mui/icons-material';

// Enhanced dummy data with severity levels
const dummyAlerts = [
  { 
    id: 1,
    title: 'Low Stock Alert',
    message: 'Keyboard - Only 12 left (threshold: 15)',
    severity: 'error',
    timestamp: '10 mins ago'
  },
  { 
    id: 2,
    title: 'Delivery Delay',
    message: 'Ravi Kumar is 30 minutes behind schedule',
    severity: 'warning',
    timestamp: '25 mins ago'
  },
  { 
    id: 3,
    title: 'New Order',
    message: 'New bulk order received (50 units)',
    severity: 'info',
    timestamp: '1 hour ago'
  },
];

const Alerts = () => {
  const theme = useTheme();
  const [dismissedAlerts, setDismissedAlerts] = React.useState([]);

  const handleDismiss = (id) => {
    setDismissedAlerts([...dismissedAlerts, id]);
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'error':
        return <ErrorIcon fontSize="small" />;
      case 'warning':
        return <WarningIcon fontSize="small" />;
      default:
        return <InfoIcon fontSize="small" />;
    }
  };

  return (
    <Paper elevation={0} sx={{ p: 2, backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h6" gutterBottom sx={{ 
        display: 'flex',
        alignItems: 'center',
        fontWeight: 600,
        mb: 2
      }}>
        Smart Alerts
      </Typography>
      
      <List sx={{ width: '100%' }}>
        {dummyAlerts.filter(alert => !dismissedAlerts.includes(alert.id)).map((alert) => (
          <Collapse key={alert.id} in={!dismissedAlerts.includes(alert.id)}>
            <ListItem sx={{ px: 0 }}>
              <Alert
                severity={alert.severity}
                sx={{ width: '100%', alignItems: 'flex-start' }}
                icon={getSeverityIcon(alert.severity)}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => handleDismiss(alert.id)}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                <AlertTitle sx={{ fontWeight: 600 }}>{alert.title}</AlertTitle>
                {alert.message}
                <Typography variant="caption" display="block" sx={{ 
                  mt: 0.5,
                  color: theme.palette.text.secondary
                }}>
                  {alert.timestamp}
                </Typography>
              </Alert>
            </ListItem>
          </Collapse>
        ))}
      </List>
    </Paper>
  );
};

export default Alerts;