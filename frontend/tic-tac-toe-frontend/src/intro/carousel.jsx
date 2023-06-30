import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    Name: 'Subhradeep Paul',
    Linkedin: 'https://www.linkedin.com/in/subhradeep-pal/',
    imgPath: '../../src/assets/images/landing-page/subhradeep.jpeg',
  },
  {
    Name: 'Kashmira Jha',
    Linkedin: '',
    imgPath: '../../src/assets/images/landing-page/kashmira.jpeg',
  },
  {
    Name: 'Deblina Mandal',
    Linkedin: '',
    imgPath: '../../src/assets/images/landing-page/deblina.jpeg',
  },
  {
    Name: 'Pryattush Banerjee',
    Linkedin: '',
    imgPath: '../../src/assets/images/landing-page/pratyush.jpg',
  },
  {
    Name: 'MD Safiul Haque',
    Linkedin: 'https://www.linkedin.com/in/md-safiul-haque-32a913242/',
    imgPath: '../../src/assets/images/landing-page/safiul.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <Box sx={{ maxWidth: 350, flexGrow: 1, }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 50,
            pl: 2,
            pr: 2,
            bgcolor: 'rgb(100, 149, 237, 0.3)',
            borderRadius: '10px 10px 0px 0px'
            // opacity: 0.6
          }}
        >
          <Typography sx={{
            fontWeight: 'bold',
            color: 'white'
          }}
          >
          {images[activeStep].Name}
          </Typography>
          <Link className='linkedin' href={images[activeStep].Linkedin} target="_blank" >
            <LinkedInIcon fontSize='large' sx={{ color: 'white' }}/>
          </Link>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.Name}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.Name}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            bgcolor: 'rgb(100, 149, 237, 0.3)',
            borderRadius: '0px 0px 10px 10px'
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{color: 'white'}}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{color: 'white'}}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
  );
}

export default SwipeableTextMobileStepper;