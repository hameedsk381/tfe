// src/components/CreateForm.js
import  { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  IconButton,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';
import { serverUrl } from '../apis/apis';


const CreateForm = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
   fields:  [{ fieldType: '', label: '', options: [] }]
  });

  const handleAddField = () => {
    setForm({
      ...form,
      fields: [...form.fields, { fieldType: '', label: '', options: [] }],
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFields = form.fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setForm({ ...form, fields: updatedFields });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${serverUrl}/forms/create`, form);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Create Form
      </Typography>
      <TextField
        fullWidth
        label="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        margin="normal"
        multiline
        rows={4}
      />
      {form.fields.map((field, index) => (
        <Box key={index} mb={2}>
          <TextField
            fullWidth
            label="Label"
            name="label"
            value={field.label}
            onChange={(e) => handleChange(e, index)}
            margin="normal"
          />
          <TextField
            select
            fullWidth
            label="Field Type"
            name="fieldType"
            value={field.fieldType}
            onChange={(e) => handleChange(e, index)}
            margin="normal"
          >
            <MenuItem value="text">Text</MenuItem>
            <MenuItem value="textarea">Textarea</MenuItem>
            <MenuItem value="radio">Radio</MenuItem>
            <MenuItem value="checkbox">Checkbox</MenuItem>
            <MenuItem value="dropdown">Dropdown</MenuItem>
          </TextField>
          {/* Add additional input fields for options if necessary */}
        </Box>
      ))}
      <Box display="flex" justifyContent="center" mb={2}>
        <IconButton color="primary" onClick={handleAddField}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Box>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default CreateForm;
