import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import VolunteerFormModal from './VolunteerFormModal';
import { useTranslation } from 'react-i18next';

const Volunteer = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{my:4}} >
      
      <Button size='small' variant="contained" color="secondary" onClick={handleOpen}>
      {t('register.button')}
      </Button>
      <VolunteerFormModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Volunteer;

