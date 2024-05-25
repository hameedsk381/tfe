
import { Box, Typography, Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('hero.title')}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          {t('hero.subtitle')}
        </Typography>
        <Button variant="contained" color="primary" href="#contact">
          {t('hero.button')}
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
