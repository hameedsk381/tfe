import React from 'react';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const glassmorphicStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '16px 16px 16px 16px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 5 }}>
        {/* <Typography variant="h3" align="center" gutterBottom>
          {t('about.title')}
        </Typography> */}
        <Paper elevation={3} sx={{ ...glassmorphicStyle, p: { xs: 2, sm: 3 }, mb: 5 }}>
          <Typography variant="h4" gutterBottom>
            {t('about.mission_title')}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" paragraph>
                {t('about.mission.part1')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('about.mission.part2')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('about.mission.part3')}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" paragraph>
                {t('about.mission.part4')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('about.mission.part5')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('about.mission.part6')}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={3} sx={{ ...glassmorphicStyle, p: { xs: 2, sm: 3 } }}>
          <Typography variant="h4" gutterBottom>
            {t('about.why_join_title')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('about.why_join.intro')}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" paragraph>
                <strong>{t('about.why_join.benefit1')}</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>{t('about.why_join.benefit2')}</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>{t('about.why_join.benefit3')}</strong>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" paragraph>
                <strong>{t('about.why_join.benefit4')}</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>{t('about.why_join.benefit5')}</strong>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
