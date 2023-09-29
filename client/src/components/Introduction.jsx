import React from 'react'; 
import styles from "../styles/Introduction.module.css"; 
import HarshitCircle from "../images/HarshitCircle.png"


function Introduction() {
  return (
    <section className={styles.container}>

        <div className={styles.content}>
             <h2 className={styles.secondary}> Hi,my name is  </h2>
              <h2 className={styles.primary}> Harshit Joshi </h2>
               <p className={styles.intro}> Hello, I'm Harshit Joshi, a 22-year-old Computer Science Engineer. I love building websites and solving tricky problems in the world of computers. I'm all about turning creative ideas into real, working websites. Beyond web development, I enjoy tackling tough challenges in computer science. I like to dig deep into complicated problems and come up with smart solutions. My dream is to build things that really matter.
                 </p>
                <div className={styles.box}>
                    <div className={styles.item}>
                        <h1 className={styles.upper}> 10+ </h1>
                        <h4 className={styles.lower}> Verified Skills</h4>
                    </div>
                    <div className={styles.item}>
                        <h1 className={styles.upper}> 5+ </h1>
                        <h4 className={styles.lower}> Professional Projects</h4>
                    </div>
                    <div className={styles.item}>

                       <h1 className={styles.upper}> 500+ </h1>
                        <h4 className={styles.lower}>DSA Problems Solved</h4>
                    </div>
                    
                       
                </div>

        </div>
         <div className={styles.image}>
            <div className={styles.imageContainer}>
               <img className={styles.img} src={HarshitCircle} alt='MyImage'></img>
            </div>
            
         </div>
    </section>
  )
}

export default Introduction