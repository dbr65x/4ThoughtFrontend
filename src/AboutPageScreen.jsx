import React from 'react'
import NavbarComp from './Comps/NavbarComp'
export default function AboutPageScreen(){

  return (
    
    <div style={{backgroundColor:'blue',height:'100vh'}}>
      <NavbarComp />
      
      <div style={{backgroundColor:'#D9E3F0'}}>
       
        <h2>About...</h2>
        <h3>Inspiration</h3>
<p>Meta's challenge piqued our interest due to our interest in current political topics. We were also eager for the opportunity to use react for Meta's challenge. The things react has done for development frameworks is an inspiration in itself. </p>
        <h3>What it does</h3>
<p>Our application takes in the URL of political news articles and uses databases and other articles to try to determine if the article is biased to the best of our ability. We have three categories of bias: Left-Leaning, Right-Leaning, and Unbiased. When presented with your article's bias there will be three similarly biased articles. </p>
        <h3>How we built it</h3>
<p>We used a combination of Replit and GitHub to help with managing the files and working on the files simultaneously. For the frontend we used react and JavaScript. The backend was built primarily using python and flask framework.</p>
        <h3>Challenges we ran into</h3>
<p>It was challenging creating the scraper and creating the logic for how the scraper would accurately collect data from websites. It was also challenging setting up the databases, applying Cross-Origin Resource Sharing (CORS), and properly linking the frontend to the backend.</p>
        <h3>Accomplishments that we're proud of</h3>
<p>We are proud of being able to extract data from a scraped page and make decisions based on what we scraped from the page.</p>
        <h3>What we learned</h3>
<p>This experience has helped us learn how to work under pressure as a team while establishing a good workflow.</p>
        <h3>What's next for Bias Checker</h3>
<p>We have many future plans to keep this project running in the long-term. We would like to implement machine learning to help better detect biases between articles. We would like to add more computing power and storage to process more articles to check biases against.  We would also like to add a system that deletes some of the older recommended articles while adding the searched articles to keep the system more up-to-date. 
</p>
        
      </div>
      
    </div>
    
  )
  
}