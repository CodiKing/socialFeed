
import React, { useState } from 'react';
import displayPosts from './displayPosts';

function App() {

  const [entries,setEntries] = useState([])

  return (
    <div>
     <displayPosts parentEntries={entries}/>
    </div>
  );
}

export default App;
