import React from 'react'
import { SmallBoxWrapper } from './SmallBox.styled'
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';



const SmallBox = (props) => {

  const handleClick = (e) => {
    console.log('The link was clicked.');
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
          <CloseIcon className='cross'/>
          <RadioButtonUncheckedIcon className='circle'/>
        </div>
      </SmallBoxWrapper>
    </>
  )
}

export default SmallBox