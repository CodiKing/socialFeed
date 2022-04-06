
import React, { useState } from 'react';
import DisplayPosts from './displayPosts';
import CreatePost from './createPost';
import NavBar from './navBar';


function App() {

  const [entries,setEntries] = useState([{name:'Codi',post:'Hello'}])

  function addNewPost(entry){
    let tempEntries=[...entries, entry];
    setEntries(tempEntries)
  }

  return (
    <div>
      <header>
      <NavBar/>
      </header>
      <body>
        <CreatePost addNewPost={addNewPost} />
        <DisplayPosts parentEntries={entries}/>
        </body>
      
     
    </div>
  );
}

export default App;
