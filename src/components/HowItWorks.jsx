
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom>
          {t('howItWorks.title')}
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={t('howItWorks.step1')} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('howItWorks.step2')} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('howItWorks.step3')} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('howItWorks.step4')} />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default HowItWorks;
