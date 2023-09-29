import 'chart.js/auto';
import React from 'react';
import { Pie,Bar } from 'react-chartjs-2';
import styles from "../styles/PieChart.module.css"
function PieChart({ totalSolved, easySolved, mediumSolved, hardSolved }) {
    // Pie chart data
    const pieData = {
      labels: ['Solved', 'Remaining'],
      datasets: [
        {
          data: [totalSolved, 100 - totalSolved], // Assuming a total of 100 problems
          backgroundColor: ['#4CAF50', '#E0E0E0'], // Colors for 'Solved' and 'Remaining' segments
        },
      ],
    };
    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
       
      };
  
    // Bar chart data
    const barData = {
      labels: ['Easy', 'Medium', 'Hard'],
      datasets: [
        {
          data: [easySolved, mediumSolved, hardSolved],
          backgroundColor: ['#4CAF50', '#FFC107', '#F44336'], // Colors for each category
          borderWidth: 0,
        },
      ],
     
    };
  
    // Bar chart options
  const barOptions = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display :false,
            position: 'right',
          },
          title: {
            display: false,
            text: 'Chart.js Horizontal Bar Chart',
          },
        },
      };
  
    return (
      <div className={styles.box}>
        <div className={styles['pie-chart-container']}>
        <div className={styles["pie-chart"]}>

        
          <Pie  data={pieData} options={{ ...pieOptions, aspectRatio: 1 }} />
          
         </div> 
        <h1> {totalSolved} Solved </h1>
        </div>
        <div className={styles['bar-chart-container']}>
          <Bar data={barData} options={barOptions} />
        </div>     
         </div>
    );
  }
  export default PieChart; 
