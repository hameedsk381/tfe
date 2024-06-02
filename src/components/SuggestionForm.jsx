import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography, IconButton, CircularProgress } from '@mui/material';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '../context/SnackbarContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { serverUrl } from '../apis/apis';
import axios from 'axios';
import { Add } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  professions: Yup.array().of(Yup.string().required('Profession is required')),
  reason: Yup.string().required('Reason is required')
});

const SuggestionForm = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const showSnackbar = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    try {
      await axios.post(`${serverUrl}/suggestion`, values);
      showSnackbar('Suggestion submitted successfully!', 'success');
      setSubmitting(false);
      setLoading(false);
      handleClose();
    } catch (error) {
      showSnackbar('There was an error submitting the suggestion.', 'error');
      setSubmitting(false);
      setLoading(false);
    }
   
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography textAlign={'center'} mb={2} id="modal-title" variant="h4" component="h1" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' } }}>
          {t('suggestion.form.title')}
        </Typography>
        <Typography color={'CaptionText'} variant="body1" fontFamily={'sans-serif'} fontWeight={'bold'} sx={{ mb: 2 }}>
          {t('suggestion.form.description')}
        </Typography>
        <Formik
          initialValues={{
            name: '',
            professions: [''],
            reason: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <TextField
                name="name"
                label={t('suggestion.form.name')}
                fullWidth
                margin="dense"
                size="small"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <FieldArray name="professions">
                {({ push, remove }) => (
                  <div>
                    {values.professions.map((profession, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                          name={`professions.${index}`}
                          label={t('suggestion.form.profession')}
                          fullWidth
                          margin="dense"
                          size="small"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={profession}
                          error={touched.professions && touched.professions[index] && !!errors.professions && !!errors.professions[index]}
                          helperText={touched.professions && touched.professions[index] && errors.professions && errors.professions[index]}
                        />
                        <IconButton
                          onClick={() => remove(index)}
                          aria-label="delete"
                          color="secondary"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    ))}
                    <Button sx={{my:2}} size='small' type="button" onClick={() => push('')} variant="outlined" color="primary" startIcon={<Add/>}>
                      {t('suggestion.form.add_profession')}
                    </Button>
                  </div>
                )}
              </FieldArray>
              <TextField
                name="reason"
                label={t('suggestion.form.reason')}
                fullWidth
                margin="dense"
                multiline
                rows={4}
                size="small"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.reason}
                error={touched.reason && !!errors.reason}
                helperText={touched.reason && errors.reason}
              />
              <Button size='medium'  type="submit" variant="contained" color="primary"  sx={{ mt: 2 }} disabled={loading}>
                {loading ? <CircularProgress size={24} /> : t('suggestion.form.submit')}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default SuggestionForm;
