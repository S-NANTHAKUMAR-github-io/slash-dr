import React from 'react'
import styled from 'styled-components'
import { FaUser,FaChevronDown } from "react-icons/fa";
function Navbar() {
  return (
    <div>
            <Navtab1>
                <Navup>
                    <Circle>
                    <img src="./images/slashdrlogo-circle.png"/>
                    </Circle>
                    <Icon>
                    <FaUser/>
                    </Icon>
                    <Icon2>
                    <FaChevronDown/>
                    </Icon2>
                </Navup>
            </Navtab1>
    </div>
    
    
  )
}

const Icon=styled.div`
    position:relative;
    left:94%;
    bottom:15px;
    height:15px;
    width:15px; 
    color:#fff;
`;

const Icon2=styled.div`
    position:relative;
    left:97%;
    bottom:30px;
    height:15px;
    width:15px; 
    color:#fff;
`;
 
const Circle=styled.div`
    img{
        position:relative;
        height:40px;
        width:40px; 
        left:10px;
        top:19px;
        bottom:5%;  
    }
`;
const Navtab1=styled.div`
    position:relative;
    display:flex;
    height:24%;
    overflow-x:hidden;
`;
const Navup=styled.div`
    background-color:#272e4f;
    height:10%;
    width:100%;
    position:relative;

`;

export default Navbar