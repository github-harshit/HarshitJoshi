import React , {useState} from 'react'
import styles from "../styles/Skills.module.css"; 
import db from "../images/db.png"; 
import javascript from "../images/javascript.png";
import node from "../images/node.png";
import express from "../images/express.png"; 
import html from "../images/html.png"; 
import css from "../images/css.png"
import react from "../images/react.png";
import mongoose from "../images/mongoose.png"
import git from "../images/git.png"; 
import rest from "../images/Rest.png"; 
import java from "../images/java.png";
import redux from "../images/redux.png"; 
import typescript from "../images/typescript.png"; 
import dsa from "../images/dsa.png"
function Skill() {
    const [expanded, setExpanded] = useState(false); 
    const handleClick = ()=>{
     
      setExpanded(!expanded); 
    }
  return (
<div className={styles.container}>

<div className={ expanded ? styles.boxExpanded : styles.box}>
<h1 className={styles.heading}>

Skills Acquired 
</h1>
 <div className= {styles.skillBox}>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {javascript}></img>
       </div>
        <div className={styles.content}>
          Javascript 
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {react}></img>
       </div>
        <div className={styles.content}>
          React
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {redux}></img>
       </div>
        <div className={styles.content}>
         Redux 
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {node}></img>
       </div>
        <div className={styles.content}>
           Node Js
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {express}></img>
       </div>
        <div className={styles.content}>
          Express JS
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {db}></img>
       </div>
        <div className={styles.content}>
          MongoDB 
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {typescript}></img>
       </div>
        <div className={styles.content}>
         Typescript 
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {rest}></img>
       </div>
        <div className={styles.content}>
         REST
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {git}></img>
       </div>
        <div className={styles.content}>
           Git
        </div>
   </div>

   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {html}></img>
       </div>
        <div className={styles.content}>
        HTML
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {css}></img>
       </div>
        <div className={styles.content}>
          CSS
        </div>
   </div>
   <div className={styles.item}>
       <div className={styles.image}>
      <img src= {mongoose}></img>
       </div>
        <div className={styles.content}>
          Mongoose
        </div>
   </div>
   
   
   
   

   
  
   {expanded ?   <>
     <div className={styles.item}>
       <div className={styles.image}>
      <img src= {java}></img>
       </div>
        <div className={styles.content}>
          Java 
        </div>
   </div>
   
    <div className={styles.item}>
       <div className={styles.image}>
      <img  src= {dsa}></img>
       </div>
        <div className={styles.content}>
         DSA
        </div>
   </div>
   </>
     : null}


 </div>
 <button onClick={handleClick} className={styles.btn} >{expanded ? "Hide Skills" : "Show More  Skills"}  </button>
 
</div>

   </div>
  )
}

export default Skill