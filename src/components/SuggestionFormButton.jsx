
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SuggestionForm from './SuggestionForm';

const SuggestionFormButton = () => {
  const [isSuggestionFormOpen, setSuggestionFormOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpenSuggestionForm = () => {
    setSuggestionFormOpen(true);
  };

  const handleCloseSuggestionForm = () => {
    setSuggestionFormOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpenSuggestionForm}>
        {t('suggestion.form.open_button')}
      </Button>
      <SuggestionForm open={isSuggestionFormOpen} handleClose={handleCloseSuggestionForm} />
    </div>
  );
};

export default SuggestionFormButton;
