import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import {GlobalStyle} from './styles/guide.style';

const Guide = () => {
  return (
    <>
    <GlobalStyle responsive/>
    <div className='goBack'>
    <div className='gameSs'>
    <div className='gameSsIn'>
        <Card sx={{ width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="200"
          image="src/assets/images/game_guide/intro.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Intro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="200"
          image="src/assets/images/game_guide/intro.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Intro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='gameSsIn'>
        <Card sx={{ width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="200"
          image="src/assets/images/game_guide/intro.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Intro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="200"
          image="src/assets/images/game_guide/intro.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Intro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    <Button className="button" href="/" variant="contained" color="error" sx={{ zIndex: 5, fontWeight: 'bold' }}>Back To Game</Button>
    </div>
    </>
  )
}
export default Guide
