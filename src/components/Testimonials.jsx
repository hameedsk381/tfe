
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }} id="testimonials">
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>
          {t('testimonials.title')}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="body1">
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
