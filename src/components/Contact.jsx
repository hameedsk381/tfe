
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ py: 8 }} id="contact">
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>
          Get in Touch
        </Typography>
        <form>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            required
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="tel"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </form>
       
      </Container>
    </Box>
  );
};

export default Contact;
