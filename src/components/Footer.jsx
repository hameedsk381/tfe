
import { Container, Typography, Box, Link, Grid, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 4, backgroundColor: 'primary.main', color: 'white' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.title')}
            </Typography>
            <Typography variant="body2">
              We provide tech assistance to help you thrive in the digital age.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Link href="/" color="inherit" underline="none">{t('header.home')}</Link><br />
            <Link href="#services" color="inherit" underline="none">{t('header.services')}</Link><br />
            <Link href="#testimonials" color="inherit" underline="none">{t('header.testimonials')}</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.title')}
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                label={t('footer.name')}
                variant="filled"
                fullWidth
                margin="normal"
                required
                sx={{ backgroundColor: 'white', borderRadius: 1 }}
              />
              <TextField
                label={t('footer.email')}
                variant="filled"
                fullWidth
                margin="normal"
                type="email"
                required
                sx={{ backgroundColor: 'white', borderRadius: 1 }}
              />
              <TextField
                label={t('footer.message')}
                variant="filled"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
                sx={{ backgroundColor: 'white', borderRadius: 1 }}
              />
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                {t('footer.submit')}
              </Button>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="body2">{t('footer.phone')}: 6304752908</Typography>
              <Typography variant="body2">{t('footer.email')}: hameedsk381@gmail.com</Typography>
              <Typography variant="body2">{t('footer.address')}: Guntur</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; 2024 Tech Assistance for Everyone. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
