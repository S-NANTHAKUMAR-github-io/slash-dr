import React from 'react'
import styled from 'styled-components'

function Prescription() {
  return (
        <MainPage>
            <Right>
                <Card>
                <Title>
                    Select from templates
                    <Button>Add new Prescription</Button>
                </Title>
                <Line/>
                <Details>

                </Details>
                </Card>
            </Right>
            <Left>
                <Card2>
                    <Title2>
                        Preview Selected
                        <Button2>Proceed with this</Button2>
                        <Line2/>
                    </Title2>
                </Card2>
            </Left>
        </MainPage>
  )
}

const Card2=styled.div`
    position:relative;
    top:5%;
    left:10%;
    height:50vh;
    width:80vh;
    border-radius:5px;
    background-color:#fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Title2=styled.div`
    font-size:15px;
    font-weight:500;
    position:relative;
    top:20px;
    left:15px;
    font-family: 'Poppins', sans-serif;
`;

const Button2=styled.button`
    color:#fff;
    border:solid #3CCF4E 2px;
    left:190px;
    position:relative;
    background-color:#3CCF4E;
    border-radius:5px;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    padding:7px 12px 5px 12px;
`;
const Line2=styled.div`
    right:15px;
    top:50px;
    position:absolute;
    height:0.1px;
    background-color:#D8D9CF;
    width:100%;
`;

const Line=styled.div`
    top:70px;
    position:absolute;
    height:0.1px;
    background-color:#D8D9CF;
    width:100%;
`;
const Button=styled.button`
    color:#3CCF4E;
    border:solid #3CCF4E 2px;
    left:120px;
    position:relative;
    background-color:#fff;
    border-radius:5px;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    padding:7px 12px 5px 12px;
`;
const Title=styled.div`
    font-size:15px;
    font-weight:500;
    position:relative;
    top:20px;
    left:15px;
    font-family: 'Poppins', sans-serif;
`;
const Details=styled.div``;
const Card=styled.div`
    position:relative;
    top:5%;
    left:10%;
    height:150vh;
    width:80vh;
    border-radius:5px;
    background-color:#fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const MainPage=styled.div`
position:relative;
top:200%;
background-color:#F3EFE0;
width:100%;
display:flex;
overflow:scroll;
overflow-y:auto;
`;
const Right=styled.div`
    flex:1;
    height:180vh;
`;
const Left=styled.div`
    flex:1;
    height:180vh
`;
export default Prescription