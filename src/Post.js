import React from 'react';
import {connect} from 'react-redux';
function Post(props) {
	return (
    <div>
      	<tr>
      		<td>{props.post.name}</td>
      		<td>{props.post.address}</td>
      		<td>
      			<button onClick={()=>props.dispatch({
      				type:'EDIT_POST',
      				id:props.post.id
      			})}>EDIT</button>
      		</td>
      			<td>
      			<button onClick={()=>props.dispatch({
      				type:'DELETE_POST',
      				id:props.post.id
      			})}>DELETE</button>
      		</td>
      	</tr>
      
    </div>
  );
}

export default connect() (Post);
