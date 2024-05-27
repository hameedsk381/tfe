
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logotech.png'
const Header = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Avatar src={logo} alt="Logo" sx={{ height: 45, width: 45, marginRight: 2 }} />
            <Typography variant="h6" component="div">
              {t('header.title')}
            </Typography>
          </Box>
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
