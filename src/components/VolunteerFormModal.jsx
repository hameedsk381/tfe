import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography, MenuItem, Checkbox, FormControlLabel, CircularProgress } from '@mui/material';
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
  width: { xs: '90%', sm: 400 }, // Responsive width
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
    contribution: Yup.string().required('Contribution description is required')
  });
 

const VolunteerFormModal = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const showSnackbar = useSnackbar();
  const [loading, setLoading] = useState(false);
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
  const placeOptions = [
    { value: 'andhra_pradesh', label: t('places.states.andhra_pradesh') },
    { value: 'arunachal_pradesh', label: t('places.states.arunachal_pradesh') },
    { value: 'assam', label: t('places.states.assam') },
    { value: 'bihar', label: t('places.states.bihar') },
    { value: 'chhattisgarh', label: t('places.states.chhattisgarh') },
    { value: 'goa', label: t('places.states.goa') },
    { value: 'gujarat', label: t('places.states.gujarat') },
    { value: 'haryana', label: t('places.states.haryana') },
    { value: 'himachal_pradesh', label: t('places.states.himachal_pradesh') },
    { value: 'jharkhand', label: t('places.states.jharkhand') },
    { value: 'karnataka', label: t('places.states.karnataka') },
    { value: 'kerala', label: t('places.states.kerala') },
    { value: 'madhya_pradesh', label: t('places.states.madhya_pradesh') },
    { value: 'maharashtra', label: t('places.states.maharashtra') },
    { value: 'manipur', label: t('places.states.manipur') },
    { value: 'meghalaya', label: t('places.states.meghalaya') },
    { value: 'mizoram', label: t('places.states.mizoram') },
    { value: 'nagaland', label: t('places.states.nagaland') },
    { value: 'odisha', label: t('places.states.odisha') },
    { value: 'punjab', label: t('places.states.punjab') },
    { value: 'rajasthan', label: t('places.states.rajasthan') },
    { value: 'sikkim', label: t('places.states.sikkim') },
    { value: 'tamil_nadu', label: t('places.states.tamil_nadu') },
    { value: 'telangana', label: t('places.states.telangana') },
    { value: 'tripura', label: t('places.states.tripura') },
    { value: 'uttar_pradesh', label: t('places.states.uttar_pradesh') },
    { value: 'uttarakhand', label: t('places.states.uttarakhand') },
    { value: 'west_bengal', label: t('places.states.west_bengal') },
    { value: 'outside_india', label: t('places.outside_india') }
  ];
 
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      const response = await axios.post(`${serverUrl}/volunteer`, values);
      showSnackbar('Registration successful!', 'success');
      setSubmitting(false);
      setLoading(false);
      handleClose();
    } catch (error) {
      if (error.response && error.response.status === 409) {
        showSnackbar('You have already registered as volunteer', 'error');
        
      } else {
        showSnackbar('There was an error submitting the form. Try again.', 'error');
      }
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
                select
                fullWidth
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.place}
                error={touched.place && !!errors.place}
                helperText={touched.place && errors.place}
              >
                {placeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
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
              <Field
                as={TextField}
                name="contribution"
                label={t('register.form.contribution')}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contribution}
                error={touched.contribution && !!errors.contribution}
                helperText={touched.contribution && errors.contribution}
              />
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
                {loading ? <CircularProgress sx={{m:'auto'}}/> : t('register.form.submit')}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default VolunteerFormModal;
