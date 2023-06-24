import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SmallBoxWrapper } from '../styles/smallBox.styled'
import img1 from '../../assets/images/game_page/letter-o.png'
import img2 from '../../assets/images/game_page/unchecked.png'

// import CloseIcon from '@mui/icons-material/Close';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';




const SmallBox = (props) => {


  var [clicked, setClicked] = useState(false)

  const handleClick = (e) => {

    // console.log('The link was clicked.');
    setClicked(true)
    let collections = document.getElementsByClassName('circle')
    const myElements = Array.from(collections);

    console.log(e.currentTarget.id)

    let clickedElement = e.currentTarget.id
    myElements[clickedElement].style.display = 'block';
  }


  return (
    <>
      <SmallBoxWrapper>
        <div id={props.id} className="main" onClick={handleClick}>
          {/* <CloseIcon className='cross'/>
          <RadioButtonUncheckedIcon className='circle'/> */}
          <motion.img animate={{ scale: clicked ? 3 : 0 }}
            initial={{ scale: 0 }} alt='img' className='circle' src={img1}></motion.img>
          <motion.img
            animate={{ scale: clicked ? 3 : 0 }}
            initial={{ scale: 0 }}
            alt='img'
            className='cross'
            src={img2}></motion.img>

        </div>
      </SmallBoxWrapper>
    </>
  )
}

export default SmallBox