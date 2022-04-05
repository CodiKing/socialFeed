
const Post = (props) => {
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
        

 
export default Post;