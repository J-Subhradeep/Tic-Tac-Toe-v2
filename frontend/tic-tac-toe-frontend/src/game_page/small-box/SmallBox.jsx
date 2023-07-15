import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SmallBoxWrapper } from '../styles/smallBox.styled'
import img1 from '../../assets/images/game_page/letter-o2.png'
import img2 from '../../assets/images/game_page/unchecked.png'
import { Howl } from "howler"
import sound_1 from '../../assets/audios/game-sounds/lclick-13694.mp3'
import sound_2 from '../../assets/audios/game-sounds/rclick-13693.mp3'

// import CloseIcon from '@mui/icons-material/Close';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


// const soundSrc = '../../assets/audios/game-sounds/lclick-13694.mp3'

const SmallBox = (props) => {

  var sounds = !true

  var [clicked, setClicked] = useState(false)

  const handleClick = (e) => {

    // console.log(e);

    var sound = new Howl({
      src: [sounds ? sound_1 : sound_2],
      html5: true
    });

    
    !clicked ? sound.play() : sound.pause();


    setClicked(true)


    let collections = document.getElementsByClassName('cross')
    const myElements = Array.from(collections);

    console.log(e.currentTarget.id)

    let clickedElement = e.currentTarget.id
    myElements[clickedElement].style.display = 'block';
  }

  return (
    <>
      <SmallBoxWrapper>
        <div id={props.id} className="main" onClick={handleClick}>
          <motion.img animate={{ scale: clicked ? 6 : 0 }}
            initial={{ scale: 0 }} alt='img' className='circle' src={img1}></motion.img>
          <motion.img
            animate={{ scale: clicked ? 6 : 0 }}
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