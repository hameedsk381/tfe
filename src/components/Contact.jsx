import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ py: 8 }} id="contact">
      <Container>
        <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' } }}>
          Get in Touch
        </Typography>
        <form>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            required
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="tel"
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}>
            Send Message
          </Button>
        </form>
       
      </Container>
    </Box>
  );
};

export default Contact;
