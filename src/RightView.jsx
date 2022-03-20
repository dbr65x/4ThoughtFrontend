import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button} from '@mui/material';
import CardComp from './Comps/CardComp'
import NavbarComp from './Comps/NavbarComp'
import FadeIn from 'react-fade-in';

import {

  useLocation
} from "react-router-dom";
export default function RightView(props){;
  const [apiReturnData, setApiReturnData] = React.useState(null)
  const [themeSetting, setThemeSetting] = React.useState('right')
  const [temp, setTemp] = React.useState(null)
  // Base url for api call
  const API_BASE_URL = "https://4thought-backend.egrep6021ad.repl.co"
  // "When the page renders...(mounts)", it queries the backend for the classification 
//  const location = useLocation()
  //const {fromDashboard} = location.state
                                                
 useEffect( async() => {
   await axios.get(API_BASE_URL+"/getArticles")
     .then((response)=>
      setApiReturnData(response.data)
     ).catch((e)=>console.log(e))
  },[console.log(apiReturnData)])

  return (
    <div>
    <NavbarComp />
     <div style={{height:"100%",padding:'5%',
    backgroundColor:'#E57373'
   }}>
    <FadeIn delay={'50'} transitionDuration={'1000'}>
      <div style={{
       marginLeft:'-2.5%',
       border:'solid',
       borderWidth:'0.2rem',
       borderRadius:'29px',
       display:'flex',
       flexDirection:'column',
       fontFamily:"League Gothic",
       width:'103%',
    }}>
      <p style={{
       alignSelf:'flex-start',
       fontSize:'22px',
       paddingLeft:'5px' }} >This article may have bias...</p>
        
      <p style={{
        marginTop:'-2%',
     fontSize:'25px',
        textDecoration:'underline',
        alignSelf:'flex-end',
        paddingRight:'10px',
        paddingLeft:'10px',
      }}> {themeSetting ==='left' ? "It appears to be skewed to the left!":"It appears to be skewed to the right!"} </p>
      </div>
    </FadeIn>
  <p 
    style={{textDecoration:'underline',fontFamily:"Satisfy"}}>
    Similiar Articles:</p>
  <FadeIn delay={'300'} transitionDuration={'1200'}>
    <div style={{width:'55%',margin:'3%'}}>
      <CardComp 
      br={"10rem"}
      content={ "other sdddide"}
      image={'https://images.unsplash.com/photo-1610066708549-172ce5ba357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'} />
    </div>
  </FadeIn>
     
  <FadeIn delay={'500'} transitionDuration={'1200'}>
    <div style={{width:'55%',marginLeft:'45%'}}>
      <CardComp
        br={"10rem"}
        content={ "other side"}
        image={'https://images.unsplash.com/photo-1570179538662-faa5e38e9d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'} />
    </div>
  </FadeIn>
     
  <FadeIn delay={'700'} transitionDuration={'1200'}>
    <div style={{width:'55%',margin:'3%'}}>
      <CardComp 
        br={"10rem"}
        content={themeSetting==='left'? "Summary about aricleary about article one thary about article one th three that was returned" : "other side"}
        image={'https://images.unsplash.com/photo-1554418651-70309daf95f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'} />
    </div>
  </FadeIn>
     
  <div 
    style={{marginLeft:'70%',marginTop:'-20%'}}>
    
        <img style={{height:'100px',width:'85px'}} src="./elephant.png" alt="elephant" />
    }
  </div>
   </div>
  </div>
  )
}