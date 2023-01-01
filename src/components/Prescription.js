// import React from 'react'
import styled from 'styled-components'
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import data from "../details.json";
import React, { useState } from "react";

const INITIAL_LIST = Array.from({ length: 75 }, () => false);
const COUNT_LIST = Array.from({ length: 75 }, () => 0);


function Prescription() {
    const [userinfo, setUserInfo] = useState({
        languages: [],
        response: [],
      });

      const [list] = useState(INITIAL_LIST)
      
      const handleOnChange = (e,name,i) => {
        // Destructuring
        const { languages } = userinfo;
        const { response } = userinfo;

        const {  checked } = e.target;
        

        console.log(` ${checked}`);

        // Case 1 : The user checks the box
        if (checked) {
          COUNT_LIST[i]+=1;
          setUserInfo({
            languages: [...languages, name],
            response: [...response, name]
          });
        }
      
        // Case 2  : The user unchecks the box
        else {
          COUNT_LIST[i]-=1;
          setUserInfo({
            languages: languages.filter((e) => e !== name),
            response: response.filter((e) => e !== name)
          });
        }

        if(COUNT_LIST[i]>0){
          INITIAL_LIST[i]=true;
        }
        else{
          INITIAL_LIST[i]=false;
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
                    //const type=i;
                    const label=<><input type="checkbox" checked={list[i]} id="mycheck" /><span>Patient {i}</span></>
                    return(
                      <TreeView
                        nodeLabel={label}
                        defaultCollapsed={true}>
                                  <input
                                    type="checkbox"
                                    onChange={(e)=>handleOnChange(e,node.id,i)}
                                    />{node.id}<br/>

                                  <input
                                    type="checkbox"
                                    onChange={(e)=>handleOnChange(e,node.name,i)}                                    
                                  />{node.name}<br/>
                                
                                  <input
                                    type="checkbox"                                                                       
                                    onChange={(e)=>handleOnChange(e,node.diagnosis_category,i)}                                    
                                  />{node.diagnosis_category}<br/>

                                  <input
                                    type="checkbox"
                                    onChange={(e)=>handleOnChange(e,node.diagnosis_tags,i)}                                   
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
                        <Button2>Proceed with {userinfo.response.length} </Button2>
                    </Title2>
                    <Line2/>


              <Details2>

                    {userinfo.response.map((rnode)=>{
                        console.log(rnode)
                        return(
                        <p>{rnode}</p>
                        )
                    })}

              </Details2>


              </Card2>
            </Left>
        </MainPage>


  );
}

const Card2=styled.div`
    position:relative;
    top:5%;
    left:10%;
    height:50vh;
    width:80vh;
    border-radius:5px;
    background-color:#FFFFFF;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
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
    height:100%;
    width:100%
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    left:10px;
    line-height:20px;
`;
const Card=styled.div`
    position:relative;
    top:5%;
    left:10%;
    height:330vh;
    width:80vh;
    border-radius:5px;
    background-color:#ffffff;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    // overflow:scroll;
    // overflow-y:auto;
    // overflow-x:hidden;
`;

const MainPage=styled.div`
    position:relative;
    top:250%;
    background-color:#fafafa;
    height:100%;
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