import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' } }}>
          {t('about.title')}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}>
          {t('about.description')}
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
