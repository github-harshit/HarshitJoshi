import React from 'react'; 
import styles from "../styles/ProjectTwo.module.css"; 
import {useState} from "react";
import image from "../images/codezen_2.png"

function ProjectTwo() {
    const [expanded, setExpanded] = useState(false);

    const handleClick = ()=>{
        setExpanded(!expanded); 
    }
 return (
    <div className={styles.container}>

    
   
     <div className={styles.mainBox}>

        <div className={styles.content}>
             <h1 className={styles.heading}> Memories  </h1>
              <p className={styles.date}>Mar 2023- Apr 2023 </p>
               <p className={styles.links}>
               <a  className= {styles.link} target='blank' href='https://memories-app-project-123.netlify.app/'> Website </a>
                  <a className= {styles.link} target='blank' href='https://github.com/github-harshit/Project-Memories'>Github</a>
               </p>
                 
              <p className={styles.about}>Memories is a user-friendly application  designed to help individuals
               effortlessly capture and preserve their cherished memories. 
               With this platform, users can create detailed memories, complete with 
               images, titles, descriptions, and hashtags. Memories can be easily edited or removed, providing flexibility and control. 
              
            </p>
              <p className={styles.about}>Key Points 
                <br></br>
                <ul>
                   <li>Developed a MERN stack Memories app that allows users to store and
manage their memories .</li>
                   <li>It allows users to upload image ,add titles , descriptions and hashtags
ensuring efficient organisation and easy retrieval </li>
                </ul>
              
                
              <h4> Technologies Used </h4>
              </p>
               <div className={styles.skill}>
                <div className = {styles.item}>React</div>
                <div className = {styles.item}>CSS</div>
                <div className = {styles.item}>HTML</div>
                <div className = {styles.item}>Javascript</div>
                <div className = {styles.item}>Node.js</div>
                <div className = {styles.item}>Express.js</div>
                <div className = {styles.item}>MongoDB</div>
                 {expanded ?
                 <>
                 <div className = {styles.item}>Mongoose</div>
                <div className = {styles.item}>Deployment</div>
                <div className = {styles.item}>Git</div>
                <div className = {styles.item}>Github</div></> : null  }
                <button className={styles.btn} onClick={handleClick}>  {expanded ? 'See Less' : 'See More'} </button>
               </div>

               < div className={styles.details}><p className={styles.para}> View Project Details</p> </div>
        </div>
         <div className={styles.image}>
             <img src= {image}></img>
         </div> 
     </div>
 </div>
 )
}


export default ProjectTwo