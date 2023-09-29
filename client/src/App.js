
import './App.css';
import Navbar from './components/Navbar';
 import Introduction from './components/Introduction';
  import Skill from './components/Skill';
  import Projects from "./components/Projects"; 
  import GithubContributions from './components/GithubContribution';
   import LeetcodeStats from './components/LeetcodeStats';
   import ContactMe from './components/ContactMe';
import { useEffect } from 'react';
function App() {
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

useEffect(() => {
    // Add event listeners to navbar links for smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="App">
     
        <Navbar/>
    
      
        <Introduction/>
        
       
         <div id='skills'>
         <Skill/>
        </div>
         <div id='projects'>
          <Projects/>
         </div>
          <div id='github'>
            <GithubContributions/>
          </div>
          <div id='leetcode'>
            <LeetcodeStats/>
           </div>
           <div id='contact'>
            <ContactMe/>
           </div>
    </div>
  );
}

export default App;
