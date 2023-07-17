import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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

  const ref = useRef(null);
  const isInView = useInView(ref);

  let cross = document.getElementsByClassName('cross')
  let circle = document.getElementsByClassName('circle')
  const crossElements = Array.from(cross);
  const circleElements = Array.from(circle);

  const [array, setArray] = useState([])
  const [lastSymbol, setLastSymbol] = useState('')
  const [lastBox, setLastBox] = useState('')
  const [clicked, setClicked] = useState(false)

  
  // const handelClick = (box) => {


  //   // var sound = new Howl({
  //   //   src: [sound_1],
  //   //   html5: true
  //   // });

    
  //   // !clicked ? sound.play() : sound.pause();
  //   // setClicked(false)


  //   // setClicked(true)


  //   let collections = document.getElementsByClassName('cross')
  //   const myElements = Array.from(collections);
  //   let clickedElement = box
  //   console.log(clickedElement)
  //   myElements[clickedElement].style.display = 'block';

  // }
  
  useEffect(() => {
    var arr = props.arr
    var box = props.lastBox
    setArray(arr)
    setLastBox(box)

    // var sound = new Howl({
    //   src: [sounds ? sound_1 : sound_2],
    //   html5: true
    // });


    // !clicked ? sound.play() : sound.pause();
    // if(box!=''){
    // handelClick(box)
    // }

    arr.map((currentelement, i) => {
      if (currentelement == 'x') {
        // console.log(crossElements[i])
        crossElements[i].style.visibility = 'inherit';
      }
      else if (currentelement == 'o') {
        circleElements[i].style.visibility = 'inherit';
      }
    })
  }, [props, props.arr])

  // var sounds = !true

  // const checkClicked = (e) => {
  //   console.log(lastBox)
  //   if(e.currentTarget.id == lastBox){
  //     setClicked(true)
  //   }
  // }

  return (
    <>
      <SmallBoxWrapper>
        <div id={props.id} className="main" >
          <motion.img ref={ref} animate={{scale: isInView ? 6 : 0}}
            initial={{scale: isInView ? 0 : 0}} alt='img' className='circle' src={img1}></motion.img>
          <motion.img
          ref={ref}
            animate={{ scale: isInView ? 6 : 0 }}
            initial={{scale: isInView ? 0 : 0}}
            alt='img'
            className='cross'
            src={img2}></motion.img>
        </div>
      </SmallBoxWrapper>
    </>
  )
}

export default SmallBox