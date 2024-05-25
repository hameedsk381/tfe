
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ textAlign: 'center', my: 2 }}>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('hi')}>हिंदी</Button>
      <Button onClick={() => changeLanguage('ta')}>தமிழ்</Button>
      <Button onClick={() => changeLanguage('te')}>తెలుగు</Button>
    </Box>
  );
};

export default LanguageSwitcher;
