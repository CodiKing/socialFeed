
import React, { useState } from 'react';
import displayPosts from './displayPosts';
import createPost from './createPost';

function App() {

  const [entries,setEntries] = useState([{name:''},{post:''}])

  function addNewPost(entry){
    let tempEntries=[...entries, entry];
    setEntries(tempEntries)
  }

  return (
    <div>
      <createPost addNewPostToFeed={addNewPost} />
      <displayPosts parentEntries={entries}/>
     <post/>
    </div>
  );
}

export default App;
