import React from 'react'
import { SmallBoxWrapper } from '../styles/smallBox.styled'
import img1 from '../../assets/images/game_page/letter-o.png'
import img2 from '../../assets/images/game_page/unchecked.png'

// import CloseIcon from '@mui/icons-material/Close';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';




const SmallBox = (props) => {

  const handleClick = (e) => {
    // console.log('The link was clicked.');
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
          <img alt='img' className='circle' src={img1}></img>
          <img alt='img' className='cross' src={img2}></img>

        </div>
      </SmallBoxWrapper>
    </>
  )
}

export default SmallBox