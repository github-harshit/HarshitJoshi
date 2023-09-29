import React from 'react'
import styles from "../styles/Navbar.module.css"; 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Icon } from '@iconify/react';
 import {useState, useEffect} from "react"; 
 import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
    const[click, setClick] = useState(false);  
    const [scroll, setScrolled] = useState(false); 
    const handleClick = (event)=>{
       event.preventDefault(); 
       setClick(!click)
    }
     const navigationClass = click ? `${styles.primaryNavigation} ${styles.clicked}` : `${styles.primaryNavigation}`
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0  ) {
            // Set the 'scrolled' state to true when scrolling down
            setScrolled(true);
          } else {
            // Set the 'scrolled' state to false when scrolling to the top
            setScrolled(false);
          }
        };
    
        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Remove the scroll event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, );

  return (
     <header  className={scroll ? `${styles.header} ${styles.headerScrolled}` : `${styles.header}`}>
       <div className={styles.container}>


      
       
            <div className= {styles.logo}>
               Harshit Joshi 
            </div>
            
               <button onClick={handleClick} className={styles.hamburger}><MenuIcon/></button>
             
          <div className= {navigationClass}>
             <div className={styles.menuItems}>
               <div className={styles.navItem}>
                 
                  <a href='#skills'> 
                  Skills Acquired 
                  </a>
                  
               </div>
               <div className={styles.navItem}>
               
                  <a href='#projects'> My Projects</a>
               </div>
               <div className={styles.navItem}>
                  <a href="#github">
                  GitHub
                  </a>
               </div>
               <div className={styles.navItem}>
                  <a href="#leetcode">
                  Leetcode
                  </a>
               </div>
               
               </div>
                <div className={styles.menuIcons}>

                
                <div className={styles.navItem}>
               <a  target= "blank" href='https://github.com/github-harshit'> <GitHubIcon/> </a>
               </div>
               <div className={styles.navItem}>
               <a  target= "blank" href='https://leetcode.com/harshitjoshi250/'> <Icon icon="simple-icons:leetcode" /> </a>
               </div>
               <div className={styles.navItem}>
               <a  target= "blank" href='https://www.linkedin.com/in/harshit-joshi-a2b5b2189/'> <LinkedInIcon/> </a>
               </div>
               <div className={styles.navItem}>
               <a  target= "blank" href='https://twitter.com/Harshit96230938'> <TwitterIcon/> </a>
               </div>
               </div>
             </div>
             
             
            
             </div>
       </header>

  )
}

export default Navbar