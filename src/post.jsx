
import React, { useState } from 'react';
import './App.css'



const Post = (props) => {
    const [buttonClass, setButtonClass] =useState('inactive');
    const [buttonClass1, setButtonClass1] =useState('inactive');

    function handleClick(){
        if(buttonClass==='inactive'){
            setButtonClass('active');
        }
        else{
            setButtonClass('inactive');
        }
    }
  
    function handleClick1(){
        if(buttonClass1==='inactive'){
            setButtonClass1('active');
        }
        else{
            setButtonClass1('inactive');
        }
    }
  
    return ( 
    <div>
      <h2>{props.entry.name}</h2>
      <body>{props.entry.post}</body>
      <button className={buttonClass} onClick={handleClick}>Like</button>
       
      <button className={buttonClass1} onClick={handleClick1}>Dislike</button>
     

      </div>
      );
}       
        

 
export default Post;