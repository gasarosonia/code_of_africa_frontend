import React, { useState } from 'react';
import { Box, Button, TextField, } from '@mui/material';
import axios from 'axios';

const GenerateReport = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [report, setReport] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/api/transactions/report', { // Updated URL
        params: { startDate, endDate },
      });
      setReport(response.data);
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };

  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" color="primary" type="submit">Generate Report</Button>
      </Box>
      <ul>
        {report.map((transaction, index) => (
          <li key={index}>
            {transaction.type}: {transaction.amount} ({transaction.account}) - {transaction.date}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default GenerateReport;
