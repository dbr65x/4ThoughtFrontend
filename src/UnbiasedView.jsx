import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button} from '@mui/material';
import CardComp from './Comps/CardComp'
import NavbarComp from './Comps/NavbarComp'
import FadeIn from 'react-fade-in';

export default function UnbiasedView(props){;
  const [apiReturnData, setApiReturnData] = React.useState(null)
  const [apiReturnData2, setApiReturnData2] = React.useState(null)
 const [apiReturnData3, setApiReturnData3] = React.useState(null)
  const [themeSetting, setThemeSetting] = React.useState('right')
  const [temp, setTemp] = React.useState(null)
  // Base url for api call
  const API_BASE_URL = "https://4thought-backend.egrep6021ad.repl.co"
  // "When the page renders...(mounts)", it queries the backend
                                                
 useEffect( async() => {
   await axios.get(API_BASE_URL+"/getArticles")
     .then((response)=>
      setApiReturnData(response.data[0])
     ).catch((e)=>console.log(e))
  await axios.get(API_BASE_URL+"/getArticles")
     .then((response)=>
      setApiReturnData2(response.data[1])
     ).catch((e)=>console.log(e))
  await axios.get(API_BASE_URL+"/getArticles")
     .then((response)=>
      setApiReturnData3(response.data[2])
     ).catch((e)=>console.log(e))
 },[console.log(apiReturnData + apiReturnData2, apiReturnData3)])

  return (
    <div>
    <NavbarComp />
     <div style={{height:"100%",padding:'5%',
    backgroundColor:'#37D67A'
   }}>
    <FadeIn delay={'50'} transitionDuration={'1000'}>
      <div style={{
       marginLeft:'-2.5%',
       border:'solid',
       borderWidth:'0.2rem',
       borderRadius:'10px',
       display:'flex',
       flexDirection:'column',
       fontFamily:"League Gothic",
       width:'103%',
    }}>
      <p style={{
       alignSelf:'flex-start',
       fontSize:'22px',
       paddingLeft:'5px' }} >This article doesn't appear to have any bias!</p>
        
      <p style={{
        marginTop:'-2%',
     fontSize:'25px',
        textDecoration:'underline',
        alignSelf:'flex-end',
        paddingRight:'15px',
        paddingLeft:'10px',
      }}> Check out others like it!</p>
      </div>
    </FadeIn>
  <p 
    style={{textDecoration:'underline',fontFamily:"Satisfy"}}>
    Similiar Articles:</p>
  <FadeIn delay={'300'} transitionDuration={'1200'}>
    <div style={{width:'55%',margin:'3%'}}>
      <CardComp 
      buttoner={true}
      br={"2rem"}
      content={apiReturnData}
      image={'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJhbGFuY2VkJTIwc2NhbGVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'} />
    </div>
  </FadeIn>
     
  <FadeIn delay={'500'} transitionDuration={'1200'}>
    <div style={{width:'55%',marginLeft:'45%'}}>
      <CardComp
        buttoner={true}
        br={"2rem"}
        content={apiReturnData2}
        image={'https://images.unsplash.com/photo-1560617321-fada6c279259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGlnaHQlMjByb3BlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} />
    </div>
  </FadeIn>
     
  <FadeIn delay={'700'} transitionDuration={'1200'}>
    <div style={{width:'55%',margin:'3%'}}>
      <CardComp 
        buttoner={true}
        br={"2rem"}
        content={ apiReturnData3}
        image={'https://images.unsplash.com/photo-1618663746875-88e06ae4e652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvbGl0aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} />
    </div>
  </FadeIn>
     
  <div 
    style={{marginLeft:'70%',marginTop:'-20%'}}>

        <img style={{height:'100px',width:'85px'}} src="./scales.png" alt="scales" />
    
  </div>
   </div>
  </div>
  )
}