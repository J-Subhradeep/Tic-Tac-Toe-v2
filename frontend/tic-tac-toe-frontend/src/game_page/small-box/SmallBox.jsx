import React from 'react'
import { SmallBoxWrapper } from './SmallBox.styled'
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const SmallBox = () => {
  return (
    <>
      <SmallBoxWrapper>
        <div className="main">
          <CloseIcon className='cross'/>
          <RadioButtonUncheckedIcon className='circle'/>
        </div>
      </SmallBoxWrapper>
    </>
  )
}

export default SmallBox