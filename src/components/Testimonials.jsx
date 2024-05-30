import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }} id="testimonials">
      <Container>
        <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' } }}>
          {t('testimonials.title')}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={6} sx={{ mx: 'auto' }}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 3 } }}>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}>
                {t('testimonials.quote1')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
