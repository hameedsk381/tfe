// src/components/Form.js
import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, IconButton, Grid, Container, Typography, Box } from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

const Form = () => {
    const [questions, setQuestions] = useState([{ question: '', answer: '' }]);

    const handleChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index][event.target.name] = event.target.value;
        setQuestions(newQuestions);
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', answer: '' }]);
    };

    const handleRemoveQuestion = (index) => {
        const newQuestions = questions.filter((q, qIndex) => qIndex !== index);
        setQuestions(newQuestions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/api/responses', { questions });
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom mb={4}>
                Technology Aid Program Questionnaire
            </Typography>
            <Container component="form" onSubmit={handleSubmit}>
                {questions.map((q, index) => (
                    <Grid container spacing={6} key={index} alignItems="center" sx={{mt:0.5}}>
                        <Grid item xs={12} md={6} >
                            <TextField
                                fullWidth
                                label="Question"
                                name="question"
                                value={q.question}
                                onChange={(e) => handleChange(index, e)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Answer"
                                name="answer"
                                value={q.answer}
                                onChange={(e) => handleChange(index, e)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button variant='contained' startIcon={  <RemoveCircle />} onClick={() => handleRemoveQuestion(index)}>
                               Delete
                            </Button>
                        </Grid>
                    </Grid>
                ))}
                <Box mt={2}>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<AddCircle />}
                        onClick={handleAddQuestion}
                    >
                        Add Question
                    </Button>
                </Box>
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </Container>
        </Container>
    );
};

export default Form;
