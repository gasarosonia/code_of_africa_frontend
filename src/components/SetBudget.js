import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const SetBudget = () => {
  const [budget, setBudget] = useState('');
  const [currentBudget, setCurrentBudget] = useState(null);

  // Fetch the current budget when the component loads
  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions/get-budget');
        setCurrentBudget(response.data.budget);
      } catch (error) {
        console.error('Error fetching current budget:', error);
      }
    };

    fetchBudget();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/transactions/set-budget', { budget });
      alert('Budget set successfully!');
      setCurrentBudget(response.data.budget); // Update the displayed budget
    } catch (error) {
      console.error('Error setting budget:', error);
      alert('Failed to set budget. Please try again.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* <Typography variant="h5">Set Budget</Typography> */}

      {/* Display the current budget */}
      {currentBudget !== null && (
        <Typography variant="body1" color="textSecondary">
          Current Budget: {currentBudget}
        </Typography>
      )}

      <TextField
        label="Enter Budget"
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        required
      />
      <Button variant="contained" color="primary" type="submit">Set Budget</Button>
    </Box>
  );
};

export default SetBudget;
