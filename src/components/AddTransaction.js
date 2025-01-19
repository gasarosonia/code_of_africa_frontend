import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios'; // Import Axios

const AddTransaction = () => {
  const [transaction, setTransaction] = useState({
    type: '',
    account: '',
    amount: '',
    category: '',
    subcategory: '',
    date: '',
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/transactions/add', transaction); // Adjusted URL
      alert('Transaction added successfully');
    } catch (error) {
      console.error('Error adding transaction:', error);
      alert('Failed to add transaction');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Type (income/expense)" name="type" onChange={handleChange} required />
      <TextField label="Account (e.g., bank)" name="account" onChange={handleChange} required />
      <TextField label="Amount" name="amount" type="number" onChange={handleChange} required />
      <TextField label="Category" name="category" onChange={handleChange} required />
      <TextField label="Subcategory" name="subcategory" onChange={handleChange} required />
      <TextField label="Date" name="date" type="date" InputLabelProps={{ shrink: true }} onChange={handleChange} required />
      <Button variant="contained" color="primary" type="submit">
        Add Transaction
      </Button>
    </Box>
  );
};

export default AddTransaction;
