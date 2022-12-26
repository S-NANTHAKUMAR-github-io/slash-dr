import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <div>
            <Navtab1>
                <Navup>
                    <Circle>
                    <img src="./images/slashdrlogo-circle.png"/>
                    </Circle>
                </Navup>
            </Navtab1>
    </div>
    
    
  )
}
 
const Circle=styled.div`
    img{
        height:35px;
        width:35px; 
        left:10px;
        position:relative;
    }
`;
const Navtab1=styled.div`
    position:relative;
    display:flex;
    height:24%;
`;
const Navup=styled.div`
    background-color:#333;
    height:7%;
    width:100%;
    position:relative;

`;

export default Navbar