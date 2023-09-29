import React, { useEffect, useState } from 'react'
import styles from "../styles/LeetcodeStats.module.css"; 
import PieChart from './PieChart';
import { getData } from '../api';

function LeetcodeStats() {
    const[data, setData] = useState({
        totalSolved:null, 
        easySolved:null, 
        mediumSolved:null, 
        hardSolved:null
    }); 

  
  
  useEffect(()=>{
    console.log("useEffect is running")
    const get = async ()=>{
         const ans  = await getData(); 
        
           setData(ans);
         
    }
    get();  
     
     
  }, data)
  
    
  return (
    <div className={styles.container}>
       
       <h1 className={styles.heading}>
              Leetcode Statistics  
       </h1>

   
    <div className={styles['problem-stats']}>
      <div className={styles['total-solved']}>
      <PieChart
        totalSolved={data.totalSolved}
        easySolved={data.easySolved}
        mediumSolved={data.mediumSolved}
        hardSolved={data.hardSolved}
      />
       
      </div>
      
    </div>
    </div>
  );
}

export default LeetcodeStats