
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }} id="services">
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>
          {t('services.title')}
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={t('services.service1')} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('services.service2')} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('services.service3')} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('services.service4')} />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Services;
