import React from 'react'
import { RiLinkedinFill } from 'react-icons/ri'
import { styled,css } from 'styled-components';
const A = styled.a`
  font-size: 25px;
  border-radius: 3px;
  padding: 1px;
  color: #0A66C2;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 12px 0 rgba(0, 0, 0, 0.2),
    0 8px 16px 0 rgba(0, 0, 0, 0.2);
  &:hover{
    background-color: #0A66C2;
    color: #fff;
  }
  ${props =>
    props.responsive &&
    css`
      @media (max-width: 800px) {
        background-color: #0A66C2;
        color: #fff;
      }
      `}
`;
const Developers = () => {
  return (
    <div className="devSection">
    {/* <h2>Developed By:</h2> */}
    <ul className="developers">
                {/* <h2>Developed By:</h2> */}
                <li style={{display:"flex",justifyContent:"center",alignItems:"center"}}><p style={{ color: "#fff",fontSize: "18px" }}>Developed By</p></li>
                    <li>
                    <div className="eachElement">
                      <img src="../src/assets/images/login_page/subhradeep.jpeg" style={{ width: "40px" }}></img>
                      <p className="nameDev">Subhradeep Pal</p>
                      <A responsive href="#"><RiLinkedinFill /></A>
                    </div>
                    </li>
                    <li>
                    <div className="eachElement">
                      <img src="../src/assets/images/login_page/deblina.jpeg" style={{ width: "40px" }}></img>
                      <p className="nameDev">Deblina Mandal</p>
                      <A responsive href="#"><RiLinkedinFill /></A>
                    </div>
                    </li>
                    <li>
                    <div className="eachElement">
                      <img src="../src/assets/images/login_page/kashmira.jpeg" style={{ width: "40px" }}></img>
                      <p className="nameDev">Kashmira Jha</p>
                      <A  responsive href="#"><RiLinkedinFill /></A>
                    </div>
                    </li>
                    <li>
                    <div className="eachElement">
                      <img src="../src/assets/images/login_page/pratyush.jpg" style={{ width: "40px" }}></img>
                      <p className="nameDev">Pratyush Banerjee</p>
                      <A responsive href="#"><RiLinkedinFill /></A>
                    </div>
                    </li>
                    <li>
                    <div className="eachElement">
                      <img src="../src/assets/images/login_page/safiul.jpg" style={{ width: "40px" }}></img>
                      <p className="nameDev">MD Safiul Haque</p>
                      <A responsive href="#"><RiLinkedinFill /></A>
                    </div> 
                    </li>             
    </ul>
    </div>
  )
}

export default Developers