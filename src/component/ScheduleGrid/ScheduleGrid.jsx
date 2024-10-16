import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Grid, Paper } from '@mui/material';
import './ScheduleGrid.css'; 

const courts = [
  { time: '4 AM', court1: 'Abbas', court2: 'Vinay Hasya...', court3: '', court4: '', court5: '', court6: '' },
  { time: '5 AM', court1: 'Shantanu', court2: 'Kailash ₹300', court3: 'Venkatesh', court4: '', court5: '', court6: '' },
  { time: '6 AM', court1: 'Blocked', court2: 'Blocked', court3: '', court4: '', court5: 'Blocked', court6: 'Blocked' },
  { time: '7 AM', court1: '', court2: '', court3: '', court4: '', court5: '', court6: '' },
  { time: '8 AM', court1: '', court2: '', court3: '', court4: '', court5: '', court6: '' },
  { time: '9 AM', court1: 'Coaching (Sourav Kumar)', court2: '', court3: '', court4: '', court5: 'Coaching', court6: '' },
  { time: '10 AM', court1: 'Indrajeet', court2: 'Indrajeet', court3: '', court4: '', court5: '', court6: '' },
  { time: '4 AM', court1: 'Abbas', court2: 'Vinay Hasya...', court3: '', court4: '', court5: '', court6: '' },
  { time: '5 AM', court1: 'Shantanu', court2: 'Kailash ₹300', court3: 'Venkatesh', court4: '', court5: '', court6: '' },
  { time: '6 AM', court1: 'Blocked', court2: 'Blocked', court3: '', court4: '', court5: 'Blocked', court6: 'Blocked' },
  { time: '7 AM', court1: '', court2: '', court3: '', court4: '', court5: '', court6: '' },
  { time: '8 AM', court1: '', court2: '', court3: '', court4: '', court5: '', court6: '' },
  { time: '9 AM', court1: 'Coaching (Sourav Kumar)', court2: '', court3: '', court4: '', court5: 'Coaching', court6: '' },
  { time: '10 AM', court1: 'Indrajeet', court2: 'Indrajeet', court3: '', court4: '', court5: '', court6: '' },
];

const ScheduleGrid = () => {
  return (
    <Box className="schedule-container">
      <Box className="sidebar">
        <Typography variant="h6" className="logo-text">Welcome</Typography>
        <Box className="sidebar-menu">
          <Typography className="menu-item">Dashboard</Typography>
          <Typography className="menu-item active">Schedule</Typography>
        </Box>
      </Box>

      <Box className="content">
        <AppBar position="static" color="default" elevation={0} className="appbar">
          <Toolbar>
            <Typography variant="h6" className="title">Schedule</Typography>
            <Button variant="contained" className="new-customer-btn">+ New Booking</Button>
          </Toolbar>
        </AppBar>

        <Box className="date-filters">
          <Button className="date-filter-btn">27th Feb 2024</Button>
          <Button className="date-filter-btn">Swimming</Button>
          <Button className="date-filter-btn">Badminton</Button>
        </Box>

        <div className="schedule-grid">
          {courts.map((row, index) => (
            <div key={index} className="grid-row">
              <div className="time-slot">
                {row.time}
              </div>
              {[row.court1, row.court2, row.court3, row.court4, row.court5, row.court6].map((court, idx) => (
                <div className="item" key={idx}>
                  <Paper variant="outlined" className={`court ${court === 'Blocked' ? 'blocked' : ''}`}>
                    {court}
                  </Paper>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default ScheduleGrid;
