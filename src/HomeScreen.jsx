import React, { useState }from 'react'
import './StylesHome.css'
import CardComp from './Comps/CardComp'
import { Input, Button} from '@mui/material';
import FadeIn from 'react-fade-in';
import axios from 'axios';


export default function HomeScreen(props){  
 const [article, setArticle] = React.useState("")
 const [apiReturnData, setApiReturnData] = React.useState(null)
 const [showResponse, setShowResponse] = React.useState(false)
  
 const API_BASE_URL = "https://flaskscrapper.ravjs.repl.co"
  
  const sendToBackend = async() =>{
   await axios.post(API_BASE_URL+"/postArticle",{
     value : article
   })
    return  window.location.href = "https://4thought.egrep6021ad.repl.co/personalizedView";
   }

  
  return(
    <div className='homeStyle' >
      <div style={{width:'50%'}}>
         <FadeIn delay={'100'} transitionDuration={'1200'}>
          <CardComp 
            color= '#7396EF'
            title="Political Group 1"
            image="https://images.unsplash.com/photo-1618710250233-dd515c3415ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80" /> 
         </FadeIn>
      </div>
      <div style={{width:'50%',alignSelf:'flex-end'}}>
         <FadeIn delay={'350'} transitionDuration={'1000'}>
           <CardComp  
             color='#DA2A2A' 
             title="Political Group 2" 
             image="https://images.unsplash.com/photo-1569285645462-a3f9c6332d56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /> 
        </FadeIn>
      </div>
      
      <div style={{display:'flex',justifyContent:'center', alignContent:'center',flexDirection:'column',flexGrow:2,margin:'2rem',}}>
         <FadeIn delay={'2000'} transitionDuration={'1000'}>   
           
        <Input 
          value={article}
          onChange={(e)=>     {setArticle(e.target.value)}}
          placeholder={'Where we can find your article?'}
          className='inputBox' >
        </Input>    
      </FadeIn>

        
        <div>
        <Button style={{marginLeft:'30%'}}onClick={()=>{sendToBackend()}}>Explore
        </Button>

        </div>
        
        {showResponse ? 
        <div>
          {apiReturnData}
        </div> : null
        }
      </div>
      
      <div style={{width:'50%'}}>
         <FadeIn delay={'350'} transitionDuration={'1000'}>
          <CardComp 
            color='#7396EF' 
            title="Political Group 1" 
            image="https://images.unsplash.com/photo-1591622180684-b96c52ef3908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /> 
         </FadeIn>
      </div>
      
       <div style={{width:'50%',alignSelf:'flex-end'}}>
        <FadeIn delay={'1000'} transitionDuration={'1200'}>
         <CardComp 
           color='#DA2A2A' 
           title="Political Group 2" 
           image="https://images.unsplash.com/photo-1504163598380-5a8ea881897f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" /> 
         </FadeIn>
      </div>
    </div>
  )
}