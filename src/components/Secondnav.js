import React from 'react'
import styled from 'styled-components'
import {Link,Route,Routes} from 'react-router-dom'
import Profile from './Profile';
import PatientSummary from './PatientSummary';
import Thisvisit from './Thisvisit';
import Prescription from './Prescription';
import Printingprescription from './Printingprescription';

function Secondnav() {
  return (
    <>
        <Navsecond>
    <Name>Mr.R. Ranjithkumar Rajaperumal, 22/M</Name>
    <Navdetails>
        <Link to="/"><Data>Profile</Data></Link>
        <Link to="/Patientsummary"><Data>Patient Summary</Data></Link>
        <Link to="/Thisvisit"><Data>This Visit</Data></Link>
        <Link to="/Prescription"><Data>Prescription</Data></Link>
        <Link to="/Printingprescription"><Data>Printing Prescription</Data></Link>
    </Navdetails>
    </Navsecond>
    <Line/>
    
    <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/Patientsummary" element={<PatientSummary/>}/>
        <Route path="/Thisvisit" element={<Thisvisit/>}/>
        <Route path="/Prescription" element={<Prescription/>}/>
        <Route path="/Printingprescription" element={<Printingprescription/>}/>
    </Routes>
    
    
    </>                                                                        
  )
}

const Line=styled.div`
    height:0.5px;
    background-color:#D8D9CF;
    width:100%;
    position:relative;
`;

const Data=styled.div`
    color:#333;
    font-weight:520;
    font-family: 'Poppins', sans-serif;
    font-size:13px;
    top:10px;
    left:25px;
    position:relative;
    display:flex;
    text-decoration: none;
    &:hover{
        color:#0096FF;
        transform: scale(1.05);
        transition: 0.3s ease;
    }
    &:active:after{
        color:#0096FF;
    }
`;
const Navdetails=styled(Link)`
    position:relative;
    top:10px;
    height:56px;
    width:100%;
    background-color:#fafafa;
    display:grid;
    grid-gap:20px;
    display:flex;
    textDecoration: none;
`;
const Navsecond=styled.div`
    position:relative;
    background-color:#fafafa;
    top:100%;
    width:100%;
    height:10%;
    overflow-x:hidden;
    overflow-y:hidden;
`;
const Name=styled.div`
    font-size:20px;
    font-family:bold;
    font-family: 'Poppins', sans-serif;
    position:relative;
    left:2%;
    top:10px;
    font-weight:500;

`;
export default Secondnav