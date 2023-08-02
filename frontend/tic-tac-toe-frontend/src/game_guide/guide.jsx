import React, { useState } from 'react'
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
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const [isExpanded1, setExpanded1] = useState(true);
  const [isExpanded2, setExpanded2] = useState(true);
  const [isExpanded3, setExpanded3] = useState(true);
  const [isExpanded4, setExpanded4] = useState(true);
  const navigate = useNavigate();

  const handleChange1 = () => {
    setExpanded1(!isExpanded1);
  };
  const handleChange2 = () => {
    setExpanded2(!isExpanded2);
  };
  const handleChange3 = () => {
    setExpanded3(!isExpanded3);
  };
  const handleChange4 = () => {
    setExpanded4(!isExpanded4);
  };
  return (
    <>
    <GlobalStyle responsive/>
    <div className='gameSs'>
    <div className='gameSsIn'>
        <Card sx={{ width: '80vw',border:'5px white' }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="200"
          image="src/assets/images/game_guide/intro.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Accordion expanded={isExpanded1} onChange={handleChange1}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><span className='headA'>Intro</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <span className='headB'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ width: '80vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="200"
          image="src/assets/images/game_guide/intro.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Accordion expanded={isExpanded2} onChange={handleChange2}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><span className='headA'>Intro</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='headB'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='gameSsIn'>
        <Card sx={{ width: '80vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="200"
          image="src/assets/images/game_guide/intro.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Accordion expanded={isExpanded3} onChange={handleChange3}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><span className='headA'>Intro</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='headB'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ width: '80vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxHeight="200"
          image="src/assets/images/game_guide/intro.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Accordion expanded={isExpanded4} onChange={handleChange4}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><span className='headA'>Intro</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='headB'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <Button className="button" onClick={() => navigate("/")} variant="contained" color="primary" sx={{ zIndex: 5, fontWeight: 'bold', marginTop:'10px', fontSize:'20px'}}>Back To Game</Button>
    </div>
    </>
  )
}
export default Guide
