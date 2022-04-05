
import React, { useState } from 'react';
import DisplayPosts from './displayPosts';
import CreatePost from './createPost';
import Post from './Post';

function App() {

  const [entries,setEntries] = useState([{name:''},{post:''}])

  function addNewPost(entry){
    let tempEntries=[...entries, entry];
    setEntries(tempEntries)
  }

  return (
    <div>
      <CreatePost addNewPost={addNewPost} />
      <Post parentEntries={entries}/>
     <post/>
    </div>
  );
}

export default App;
