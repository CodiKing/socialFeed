import React, { useState, useEffect } from 'react';

const DisplayPosts = (props) => {

  const [postData, setPostData] =useState([])

  useEffect(() =>{
    let tempPostData=props.parentEntries.map(entry =>{
      return [entry.name, entry.post]
    });
    setPostData(tempPostData);

  }, [props.parentEntries])
  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Post</th>
      </tr>
    </thead>
    <tbody>
      {props.parentEntries.map((entry) =>{
        return(
          <tr>
            
            <td>{entry.name}</td>
            <td>{entry.post}</td>
            <button type='toggle'>Like</button>
            <button type='toggle'>Dislike</button>
          </tr>
          
        );
      })}
    </tbody>
  </table>);



    
}
 
export default DisplayPosts;