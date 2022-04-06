
import React, { useState } from 'react';
import DisplayPosts from './displayPosts';
import CreatePost from './createPost';
import Post from './Post';

function App() {

  const [entries,setEntries] = useState([{name:'Codi',post:'Hello'}])

  function addNewPost(entry){
    let tempEntries=[...entries, entry];
    setEntries(tempEntries)
  }

  return (
    <div>
      <CreatePost addNewPost={addNewPost} />
      
      <DisplayPosts parentEntries={entries}/>
     
    </div>
  );
}

export default App;
