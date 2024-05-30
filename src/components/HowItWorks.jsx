import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' } }}>
          {t('howItWorks.title')}
        </Typography>
        <List>
          <ListItem sx={{ padding: { xs: '8px', sm: '16px' } }}>
            <ListItemText primary={t('howItWorks.step1')} primaryTypographyProps={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }} />
          </ListItem>
          <ListItem sx={{ padding: { xs: '8px', sm: '16px' } }}>
            <ListItemText primary={t('howItWorks.step2')} primaryTypographyProps={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }} />
          </ListItem>
          <ListItem sx={{ padding: { xs: '8px', sm: '16px' } }}>
            <ListItemText primary={t('howItWorks.step3')} primaryTypographyProps={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }} />
          </ListItem>
          <ListItem sx={{ padding: { xs: '8px', sm: '16px' } }}>
            <ListItemText primary={t('howItWorks.step4')} primaryTypographyProps={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }} />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default HowItWorks;
