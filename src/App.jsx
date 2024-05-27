
// src/App.js

import {  Route, Routes } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import SubmitForm from './components/SubmitForm';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';

import LanguageSwitcher from './components/LanguageSwitcher';




const App = () => {
  return (
    <Box >
    
    <Header />
    <LanguageSwitcher/>
      <Routes>
      <Route path="/" exact element={<LandingPage/>} />
        <Route path="/create" element={<CreateForm/>} />
        <Route path="/form/:id" element={<SubmitForm/>} />
      </Routes>
      <Footer/>
    </Box>
  );
};

export default App;
