import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5', width: '100%' }} id="services">
      <Container>
        <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' } }}>
          {t('services.title')}
        </Typography>
        <List>
          <ListItem sx={{ padding: { xs: '8px', sm: '16px' } }}>
            <ListItemText primary={t('services.service1')} primaryTypographyProps={{ fontSize: { xs: '0.875rem', sm: '1rem' } }} />
          </ListItem>
          <ListItem sx={{ padding: { xs: '8px', sm: '16px' } }}>
            <ListItemText primary={t('services.service2')} primaryTypographyProps={{ fontSize: { xs: '0.875rem', sm: '1rem' } }} />
          </ListItem>
          <ListItem sx={{ padding: { xs: '8px', sm: '16px' } }}>
            <ListItemText primary={t('services.service3')} primaryTypographyProps={{ fontSize: { xs: '0.875rem', sm: '1rem' } }} />
          </ListItem>
          <ListItem sx={{ padding: { xs: '8px', sm: '16px' } }}>
            <ListItemText primary={t('services.service4')} primaryTypographyProps={{ fontSize: { xs: '0.875rem', sm: '1rem' } }} />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Services;
