// src/components/LandingPage.js


import {  Container, Stack} from '@mui/material';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';


const LandingPage = () => {
  return (
    <Container maxWidth="xl" sx={{ textAlign: 'center', mt: 8 }}>
       <Stack mb={{xs:5,md:25}}>
       <Hero />
       </Stack>
          <About />
          <Services />
          <HowItWorks />
          <Testimonials />
        
    </Container>
  );
};

export default LandingPage;
