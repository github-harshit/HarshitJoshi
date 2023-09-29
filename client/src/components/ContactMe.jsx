
import styles from "../styles/ContactMe.module.css"; 

import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Icon } from '@iconify/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ContactMe = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [activeField, setActiveField] = useState('message');

  const handleInputChange = (e) => {
    e.preventDefault(); 
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'message') {
      setMessage(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleArrowClick = () => {
    if (activeField === 'message' && message.trim() !== '') {
      setActiveField('name');
    } else if (activeField === 'name' && name.trim() !== '') {
      setActiveField('email');
    }else if(activeField==='email' && email.trim() !==''){
         setActiveField('heading'); 
    }
  };

  return (
     <div className={styles.container}>
        
     
        <div className={styles.box}>
   
     <div className={styles.content}>
        <h2> Connect with Me </h2>
         <p>
         Feel free to drop me a message whenever you have some awesome projects in mind. 
         I'm always excited and ready to work on new and exciting ventures. 
         Don't hesitate to reach out to me!
         </p>
        
     </div>
     <div className={styles.containerSecond}>
      <form className={styles.form}>
      {activeField === 'message' && (
          <div className={styles.inputContainer}>
            
              <input
               type='text'
                name="message"
                value={message}
                onChange={handleInputChange}
                 placeholder='Write a message for me '
              ></input>
           
            {message.trim() !== '' && (
              <ArrowForwardIcon className={styles.icon} onClick={handleArrowClick}></ArrowForwardIcon>
            )}
          </div>
        )}

        {activeField === 'name' && (
          <div className={styles.inputContainer}>
            
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
                placeholder='Your Name'
              />
            
            {name.trim() !== '' && (
              <ArrowForwardIcon className= { styles.icon}  onClick={handleArrowClick}></ArrowForwardIcon>
            )}
          </div>
        )}

        

        {activeField === 'email' && (
          <div className={styles.inputContainer}>
            
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder='Your Email'
              />
          
            {email.trim() !== '' && (
              <ArrowForwardIcon className={styles.icon}  onClick={handleArrowClick}></ArrowForwardIcon>
            )}
          </div>
        )}

        {activeField==='heading' && (
            <h3 className={styles.grateful}> Thank you I will contact you shortly</h3>
        )}
      </form>
    </div>


     </div>
     <div className={styles.navIcon}>
        <div className={styles.navItem}>
        <a  target= "blank" href='https://github.com/github-harshit'> <GitHubIcon/> </a>
      </div>
        
        <div className={styles.navItem}>
        <a  target= "blank" href='https://www.linkedin.com/in/harshit-joshi-a2b5b2189/'> <LinkedInIcon/> </a>
      </div>
        <div className={styles.navItem}>
        <a  target= "blank" href='https://twitter.com/Harshit96230938'> <TwitterIcon/> </a>
      </div>

        </div>

    </div>
  );
};

export default ContactMe;
