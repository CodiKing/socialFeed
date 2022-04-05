
const displayPosts = (props) => {
    return (  
    <table>
        <thead>
          <tr>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry,index) =>{
            return(
              <tr>
                <td>(entry)
                </td>
              </tr>
            )
          })}
        </tbody>
      </table> );
}
 
export default displayPosts;