// import React from 'react'
import styled from 'styled-components'
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import data from "../details.json";
import React, { useState } from "react";


function Prescription() {
    const [userinfo, setUserInfo] = useState({
        languages: [],
        response: [],
      });
      
      const handleOnChange = (e,name) => {
        // Destructuring
        const { value, checked } = e.target;
        const { languages } = userinfo;
        //const { response } = userinfo;
          
        console.log(`${value} is ${checked}`);
         
        // Case 1 : The user checks the box
        if (checked) {
          setUserInfo({
            languages: [...languages, name],
            response: [...languages, name],
          });
        }
      
        // Case 2  : The user unchecks the box
        else {
          setUserInfo({
            languages: languages.filter((e) => e !== value),
            response: languages.filter((e) => e !== value),
          });
        }
      };

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
                {data.map((node,i)=>{
                    const type=i;
                    const label=<><input type="checkbox" id="mycheck" /><span>Patient {i}</span></>
                    return(
                      <TreeView
                        key={type+"|"+i}
                        nodeLabel={label}
                        defaultCollapsed={true}>
                                  <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    onChange={(e)=>handleOnChange(e,node.id)}

                                  />{node.id}<br/>
                                  <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    onChange={(e)=>handleOnChange(e,node.name)}
                                    
                                  />{node.name}<br/>
                                  <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    onChange={(e)=>handleOnChange(e,node.diagnosis_category)}
                                    
                                  />{node.diagnosis_category}<br/>
                                  <input
                                    type="checkbox"
                                    id="topping"
                                    name="topping"
                                    onChange={(e)=>handleOnChange(e,node.diagnosis_tags)}
                                    
                                  />{node.diagnosis_tags}
                        </TreeView>
                    )
                  })}
                </Details>
                </Card>
            </Right>
            <Left>
                <Card2>
                    <Title2>
                        Preview Selected
                        <Button2>Proceed with this</Button2>
                    </Title2>
                    <Line2/>
                    <Details2>
                    <StyledTextarea
                
                name="response"
                value={userinfo.response}
                //placeholder="The checkbox values will be displayed here "
                id="floatingTextarea2"
                style={{ height: "255px", 
                        width:"520px",border:"none", position:"relative"
                      }}
                onChange={handleOnChange}
              ></StyledTextarea>

                    </Details2>
                </Card2>
            </Left>
        </MainPage>


  );
}

const StyledTextarea=styled.textarea`
  position:relative;
  font-family: 'Poppins', sans-serif;
  font-weight:500;
  justify-content: space-between;
  font-size:15px;
`;


const Card2=styled.div`
    position:relative;
    top:5%;
    left:10%;
    height:50vh;
    width:80vh;
    border-radius:5px;
    background-color:#FFFFFF;
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
    border:solid #00BD56 2px;
    left:190px;
    position:relative;
    background-color:#00BD56;
    border-radius:5px;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    padding:7px 12px 5px 12px;
`;
const Line2=styled.div`
    top:70px;
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
    color:#00BD56;
    border:solid #00BD56 2px;
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
const Details=styled.div`
    position:relative;
    top:2%;
    left:7%;
`;
const Details2=styled.div`
    position:relative;
    top:15%;
    height:50vh;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
`;
const Card=styled.div`
    position:relative;
    top:5%;
    left:10%;
    height:320vh;
    width:80vh;
    border-radius:5px;
    background-color:#ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    // overflow:scroll;
    // overflow-y:auto;
    // overflow-x:hidden;
`;

const MainPage=styled.div`
position:relative;
top:250%;
background-color:#fafafa;
width:100%;
display:flex;
overflow:scroll;
overflow-y:auto;
overflow-x:hidden;
`;
const Right=styled.div`
    flex:1;
    height:170vh;
`;
const Left=styled.div`
    flex:1;
    height:170vh
`;
export default Prescription