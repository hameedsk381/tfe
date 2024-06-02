import React from 'react';
import { Box, Button, Modal, TextField, Typography, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useSnackbar } from '../context/SnackbarContext';
import { serverUrl } from '../apis/apis';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  place: Yup.string().required('Place is required'),
  profession: Yup.string().required('Profession is required'),
  gender: Yup.string().required('Gender is required'),
  consent: Yup.bool().oneOf([true], 'Consent is required'),
});

const VolunteerFormModal = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const showSnackbar = useSnackbar();

  const genderOptions = [
    { value: 'male', label: t('gender.male') },
    { value: 'female', label: t('gender.female') },
    { value: 'non_binary', label: t('gender.non_binary') },
    { value: 'genderqueer', label: t('gender.genderqueer') },
    { value: 'genderfluid', label: t('gender.genderfluid') },
    { value: 'agender', label: t('gender.agender') },
    { value: 'other', label: t('gender.other') },
    { value: 'prefer_not_to_say', label: t('gender.prefer_not_to_say') },
  ];

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${serverUrl}/volunteer`, values);
      showSnackbar('Registration successful!', 'success');
      setSubmitting(false);
      handleClose();
    } catch (error) {
      if (error.response && error.response.status === 409) {
        showSnackbar('This volunteer already exists.', 'error');
      } else {
        showSnackbar('There was an error submitting the form. Try again.', 'error');
      }
      setSubmitting(false);
      console.log(error);
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
        <Typography id="modal-title" variant="h6" component="h2">
          {t('register.form.title')}
        </Typography>
        <Formik
          initialValues={{
            name: '',
            place: '',
            profession: '',
            gender: '',
            consent: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                name="name"
                label={t('register.form.name')}
                fullWidth
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <Field
                as={TextField}
                name="place"
                label={t('register.form.place')}
                fullWidth
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.place}
                error={touched.place && !!errors.place}
                helperText={touched.place && errors.place}
              />
              <Field
                as={TextField}
                name="profession"
                label={t('register.form.profession')}
                fullWidth
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.profession}
                error={touched.profession && !!errors.profession}
                helperText={touched.profession && errors.profession}
              />
              <Field
                as={TextField}
                name="gender"
                label={t('register.form.gender')}
                select
                fullWidth
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
                error={touched.gender && !!errors.gender}
                helperText={touched.gender && errors.gender}
              >
                {genderOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
              <FormControlLabel
                control={
                  <Checkbox
                    name="consent"
                    color="primary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.consent}
                  />
                }
                label={t('register.form.consent')}
              />
              {touched.consent && !!errors.consent && (
                <Typography variant="caption" color="error">
                  {errors.consent}
                </Typography>
              )}
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                {t('register.form.submit')}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default VolunteerFormModal;
