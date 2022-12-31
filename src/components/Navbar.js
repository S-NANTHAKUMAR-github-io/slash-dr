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
    bottom:23px;
    height:15px;
    width:15px; 
    color:#fff;
    //overflow-y:hidden;
`;

const Icon2=styled.div`
    position:relative;
    left:97%;
    bottom:37px;
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
        top:5px;
        //bottom:5px;  
    }
`;
const Navtab1=styled.div`
    position:relative;
    display:flex;
    height:24%;
    overflow-x:hidden;
`;
const Navup=styled.div`
    background-color:#151D3B;
    height:50px;
    width:100%;
    position:relative;
    overflow-y:hidden;

`;

export default Navbar