import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SmallBoxWrapper } from '../styles/smallBox.styled'
import img1 from '../../assets/images/game_page/letter-o7.png'
import img2 from '../../assets/images/game_page/delete.png'

const SmallBox = (props) => {


  const [array, setArray] = useState([])
  
  useEffect(() => {
    var arr = props.arr
    setArray(arr)
  }, [props])

  return (
    <>
      <SmallBoxWrapper>
        <div id={props.id} className="main" >
        {array[props.id] == 'o' ?  <motion.img animate={{ scale: 8 }}
            initial={{ scale: 0 }} alt='img' className='circle' src={img1}></motion.img> : <></>}
        {array[props.id] == 'x' ?  <motion.img
            animate={{ scale: 6 }}
            initial={{ scale: 0 }}
            alt='img'
            className='cross'
            src={img2}></motion.img> : <></>}
         
        </div>
      </SmallBoxWrapper>
    </>
  )
}

export default SmallBox