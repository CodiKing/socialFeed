import React, { useState, useEffect } from 'react';
import Post from './Post';
const DisplayPosts = (props) => {

  const [postData, setPostData] =useState([])

  useEffect(() =>{
    let tempPostData=props.parentEntries.map(entry =>{
      return [entry.name, entry.post]
    });
    setPostData(tempPostData);

  }, [props.parentEntries])
  return (
 
 <ul>
   {props.parentEntries.map((entry)=> <li><Post entry={entry}/></li>)}
 </ul>
  );

    
}
 
export default DisplayPosts;