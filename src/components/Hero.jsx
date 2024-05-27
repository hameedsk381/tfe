
import { Box, Typography, Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import randImage from "../apis/randImage.json";
import { useState, useEffect } from 'react';
const Hero = () => {
  const[image, setImage] = useState("")
  const[num, setNum] = useState(1)
  useEffect(()=>{
    setTimeout(()=>{
      const randomIndex = Math.floor(Math.random() * randImage.images.length);
      const randomImage = randImage.images[randomIndex].url;
      image !== randomImage && setImage(randomImage);
      setNum(num+1)
      
      

   }, 3000)
  
  },[num])
  

  const { t } = useTranslation();
  
  return (
    <Box
      sx={{
        backgroundImage: `url(${image || 'https://cdni.iconscout.com/illustration/premium/thumb/students-studying-online-2974943-2477369.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('hero.title')}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          {t('hero.subtitle')}
        </Typography>
        <Button variant="contained" color="primary" href="#contact">
          {t('hero.button')}
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
