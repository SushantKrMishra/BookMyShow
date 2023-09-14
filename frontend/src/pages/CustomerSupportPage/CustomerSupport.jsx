import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomerSupport = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSend = () => {
    // Send the message (You can implement this part as needed)
    // For demonstration purposes, we'll just show a success message and navigate to '/'
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
    navigate('/');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '24px' }}>
      <Typography variant="h4" gutterBottom>
        Customer Support
      </Typography>
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextareaAutosize
        rows={5}
        placeholder="Enter your message here"
        style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
      >
        Send
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CustomerSupport;
