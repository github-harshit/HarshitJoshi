import React from 'react'; 
import styles from  "../styles/ProjectThree.module.css"; 
import { useState } from 'react';
import image from "../images/codezen.png"
function ProjectThree() {
    const [expanded, setExpanded] = useState(false);

    const handleClick = ()=>{
        setExpanded(!expanded); 
    }
 return (
    <div className={styles.container}>

    
   
     <div className={styles.mainBox}>

        <div className={styles.content}>
             <h1 className={styles.heading}> Shoppy   </h1>
              <p className={styles.date}>Jun 2023- July 2023 </p>
               <p className={styles.links}>
               <a  className= {styles.link} target='blank' href='https://memories-app-project-123.netlify.app/'> Website </a>
                <a className= {styles.link} target='blank' href='https://github.com/github-harshit/Project-Memories'>Github</a>
               </p>
              
              <p className={styles.about}> Our Full Stack E-commerce Clothing Application revolutionizes your 
              fashion shopping experience. Browse an extensive collection, filter by
               categories, and use advanced search options to discover the perfect clothing items. With secure Stripe payment integration, user registration, and real-time updates, we offer a seamless and personalized journey. Elevate your wardrobe with style and convenience at your fingertips.
              
            </p>
              <p className={styles.about}>Key Points 
                <br></br>
                <ul>
                   <li>Implemented an i user-friendly interface, enhancing the shopping experience, and showcasing UI/UX design skills to optimize customer engagement.</li>
                   <li>  Successfully integrated Stripe payment processing, ensuring secure and efficient transactions </li>
                </ul>
              
                
              <h4>Technologies Used </h4>
              </p>
               <div className={styles.skill}>
                <div className = {styles.item}>React</div>
                <div className = {styles.item}>Redux</div>
                  <div className = {styles.item}>Javascript</div>
                <div className = {styles.item}>Node.js</div>
                <div className = {styles.item}>Express.js</div>
                <div className = {styles.item}>MongoDB</div>
                 {expanded ?
                 <>
                  <div className = {styles.item}>CSS</div>
                <div className = {styles.item}>HTML</div>
                 <div className = {styles.item}>MOngoose</div>
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

export default ProjectThree; 