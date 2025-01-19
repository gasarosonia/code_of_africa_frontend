import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import AddTransaction from './components/AddTransaction';
import ViewTransactions from './components/ViewTransactions';
import SetBudget from './components/SetBudget';
import GenerateReport from './components/GenerateReport';

function App() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Wallet Application
      </Typography>
      <Grid container spacing={3}>
        {/* Add Transaction */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h5" gutterBottom>
                Add Transaction
              </Typography>
              <AddTransaction />
            </Box>
          </Paper>
        </Grid>

        {/* View Transactions */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h5" gutterBottom>
                View Transactions
              </Typography>
              <ViewTransactions />
            </Box>
          </Paper>
        </Grid>

        {/* Set Budget */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h5" gutterBottom>
                Set Budget
              </Typography>
              <SetBudget />
            </Box>
          </Paper>
        </Grid>

        {/* Generate Report */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h5" gutterBottom>
                Generate Report
              </Typography>
              <GenerateReport />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
