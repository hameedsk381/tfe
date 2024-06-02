// src/components/SubmitForm.js
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import axios from 'axios';
import { serverUrl } from '../apis/apis';

const SubmitForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const { data } = await axios.get(`${serverUrl}/forms/${id}`);
        setForm(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchForm();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses({ ...responses, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/responses/submit', { formId: id, answers: responses });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      {form ? (
        <>
          <Typography variant="h4" component="h1" gutterBottom>
            {form.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {form.description}
          </Typography>
          {form.fields.map((field, index) => (
            <Box key={index} mb={2}>
              <Typography variant="h6" component="label">
                {field.label}
              </Typography>
              {field.fieldType === 'text' && (
                <TextField
                  fullWidth
                  name={field._id}
                  onChange={handleChange}
                  margin="normal"
                />
              )}
              {field.fieldType === 'textarea' && (
                <TextField
                  fullWidth
                  name={field._id}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                />
              )}
              {/* Handle other field types */}
            </Box>
          ))}
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </>
      ) : (
        <Typography variant="h5" component="p">
          Loading form...
        </Typography>
      )}
    </Container>
  );
};

export default SubmitForm;
