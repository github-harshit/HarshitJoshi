import React from 'react'; 
import styles from "../styles/ProjectOne.module.css"
import {useState} from "react";
import image from "../images/project_3.png"
function ProjectOne() {
     const [expanded, setExpanded] = useState(false);

     const handleClick = ()=>{
         setExpanded(!expanded); 
     }
  return (
     <div className={styles.container}>

     
    
      <div className={styles.mainBox}>

         <div className={styles.content}>
              <h1 className={styles.heading}> Unbeatable Tic Tac Toe </h1>
               <p className={styles.date}>Dec 2022- Jan 2023 </p>
                  <p className={styles.links}>
                  <a  className= {styles.link} target='blank' href='https://tictactoeworld.netlify.app/'> Website </a>
                  <a className= {styles.link} target='blank' href='https://github.com/github-harshit/TicTacToe'>Github</a>
                  </p>
                
             
               <p className={styles.about}>Tic Tac Toe App,  offers two engaging play modes: AI and Human. 
               In AI mode, challenge yourself against an unbeatable opponent and 
               in Human mode play with your friends.  
               Real-time notifications keep you in the loop, 
               while the user-friendly interface ensures a
                seamless and immersive gaming session. 
                 </p>
               <p className={styles.about}>Key Points 
                 <br></br>
                 <ul>
                    <li>Developed a React-based Tic Tac Toe gaming application, incorporating
                 both AI and Human gameplay modes </li>
                    <li>Used minimax algroithm to make the A.I. mode unbeatable </li>
                 </ul>
               
                 
               
               </p>
               <h4 className= {styles.tech}>Technologies Used </h4>
                <div className={styles.skill}>
                
                 <div className = {styles.item}>React</div>
                 <div className = {styles.item}>CSS</div>
                 <div className = {styles.item}>HTML</div>
                 <div className = {styles.item}>Javascript</div>
                 <div className = {styles.item}>Deployment</div>
                 <div className = {styles.item}>Git</div>
                 <div className = {styles.item}>Github</div>
                  {expanded ?
                  <>
                  <div className = {styles.item}>Javascript</div>
                 <div className = {styles.item}>Deployment</div>
                 <div className = {styles.item}>Git</div>
                 <div className = {styles.item}>Github</div></> : null  }
                 <button className={styles.btn} onClick={handleClick}>  {expanded ? 'See Less' : 'See More'} </button>
                </div>

                <div className={styles.details}><p className={styles.para}> View Project Details</p>
                  </div>
                 </div>
              
            
          <div className={styles.image}>
              <img src= {image}></img>
          </div> 

          
      </div>
  </div>
 
  )
}

export default ProjectOne; 