export const getData = async()=>{
    const res =  await fetch("https://leetcode-stats-api.herokuapp.com/harshitjoshi250"); 
  
    const data   = await res.json(); 
    
    return {
        totalSolved : data.totalSolved,
        easySolved : data.easySolved,
        mediumSolved : data.mediumSolved,
        hardSolved : data.hardSolved,
    }
   
 }