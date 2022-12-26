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
        <Link to="/">
            <Data>Profile</Data></Link>
        <Link to="/Patientsummary"><Data>Patient Summary</Data></Link>
        <Link to="/Thisvisit"><Data>This Visit</Data></Link>
        <Link to="/Prescription"><Data>Prescription</Data></Link>
        <Link to="/Printingprescription"><Data>Printing Prescription</Data></Link>
    </Navdetails>
    </Navsecond>
    <Line/>
    <Router>
    <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/Patientsummary" element={<PatientSummary/>}/>
        <Route path="/Thisvisit" element={<Thisvisit/>}/>
        <Route path="/Prescription" element={<Prescription/>}/>
        <Route path="/Printingprescription" element={<Printingprescription/>}/>
    </Routes>
    </Router>
    
    </>                                                                        
  )
}

const Line=styled.div`
    height:0.5px;
    background-color:#D8D9CF;
    width:100%;
    position:relative;
`;
const Router=styled.div`
    position:relative;
    top:50%;
    height:100%;
    width:100%;
`;
const Data=styled.div`
    color:#333;
    font-weight:500;
    font-family: 'Poppins', sans-serif;
    top:10px;
    left:25px;
    position:relative;
    display:flex;
`;
const Navdetails=styled.div`
    position:relative;
    top:10px;
    height:56px;
    width:100%;
    background-color:#F3EFE0;
    display:grid;
    grid-gap:20px;
    display:flex;
    text-decoration: none;
`;
const Navsecond=styled.div`
    position:relative;
    background-color:#F3EFE0;
    top:100%;
    width:100%;
    height:10%;
    
`;
const Name=styled.div`
    font-size:19px;
    font-family:bold;
    font-family: 'Poppins', sans-serif;
    position:relative;
    left:2%;
    top:10px;

`;
export default Secondnav