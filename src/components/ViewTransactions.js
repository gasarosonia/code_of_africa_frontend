import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const ViewTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions'); // Adjusted URL
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        alert('Failed to fetch transactions');
      }
    };

    fetchTransactions();
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Transactions</Typography>
      <List>
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${transaction.type}: ${transaction.amount} (${transaction.account})`}
                secondary={transaction.date}
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1">No transactions found.</Typography>
        )}
      </List>
    </Box>
  );
};

export default ViewTransactions;
