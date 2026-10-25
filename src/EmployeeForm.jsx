import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Employee details logged to console successfully!');
    setFormData({ name: '', designation: '', location: '', salary: '' });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Add Employee Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField 
            label="Name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            fullWidth 
          />
          <TextField 
            label="Designation" 
            name="designation" 
            value={formData.designation} 
            onChange={handleChange} 
            required 
            fullWidth 
          />
          <TextField 
            label="Location" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
            fullWidth 
          />
          <TextField 
            label="Salary" 
            name="salary" 
            type="number" 
            value={formData.salary} 
            onChange={handleChange} 
            required 
            fullWidth 
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default EmployeeForm;