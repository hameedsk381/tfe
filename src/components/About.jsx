
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>
          {t('about.title')}
        </Typography>
        <Typography variant="body1">
          {t('about.description')}
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
