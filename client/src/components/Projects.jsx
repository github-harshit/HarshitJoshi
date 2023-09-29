import React from 'react'
import styles from "../styles/Projects.module.css"; 
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
function Projects() {
  return (
    <div className={styles.container}>
         <h1 className={styles.heading}> My Projects </h1>
        <div className={styles.box}>
          <div>
            <ProjectOne/> 
          </div>
          <div>
            <ProjectTwo/>
          </div>
           <div>
            <ProjectThree/>
           </div>
        
         
        
        </div>
         </div>
  )
}

export default Projects