// src/App.js

import { Route, Routes } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import SubmitForm from './components/SubmitForm'; 
import LandingPage from './components/LandingPage';
import NotFoundPage from './components/NotFoundPage'; // Import the NotFoundPage component
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';

import LanguageSwitcher from './components/LanguageSwitcher';
import About from './components/About';

const App = () => {
  return (
    <Box>
      <Header />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/form/:id" element={<SubmitForm />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Route for handling unknown paths */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
