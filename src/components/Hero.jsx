import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Volunteer from './Volunteer';
import SuggestionFormButton from './SuggestionFormButton';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 8,
        textAlign: 'center',
        backdropFilter: 'blur(8px)',
        borderRadius: '55%',
        width: { xs: '100%', sm: '80%', md: '60%' }, // Responsive width
        p: { xs: 5, sm: 8, md: 10 }, // Responsive padding
        m: 'auto'
      }}
    >
      <Container >
        <Typography my={2} variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' } }}>
          {t('hero.title')}
        </Typography>
        <Typography my={2} variant="h5" component="p" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } }}>
          {t('hero.subtitle')}
        </Typography>
        {/* <Button variant="contained" color="primary" href="#contact" sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' } }}>
          {t('hero.button')}
        </Button> */}
      </Container>
      <Volunteer/>
      <SuggestionFormButton/>
    </Box>
  );
};

export default Hero;
