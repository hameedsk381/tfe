
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('header.title')}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={RouterLink} to="/">{t('header.home')}</Button>
            <Button color="inherit" href="#services">{t('header.services')}</Button>
            <Button color="inherit" href="#testimonials">{t('header.testimonials')}</Button>
            <Button color="inherit" href="#contact">{t('header.contact')}</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
