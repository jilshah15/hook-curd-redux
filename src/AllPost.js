import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditPost from './EditPost';
function AllPost(props) {
  const posts=props
  console.log(posts)
  
  return (
    <div>
      	<table>
      		<thead>
      			<tr>
      				<th>Name</th>
      				<th>Address</th>
      				<th>Actions</th>
      			</tr>
      		</thead>
      			<tbody>
      				{props.posts.map((item,index)=>(
      					<div>
                  {item.editing?
                    <EditPost post={item} key={index}/>
                    :<Post post={item} key={index}/>
                  }                
      						
						</div>

      					))}
      			</tbody>
      	</table>
    </div>
  );
}
const mapStateToProps=(state)=>{
	return{
		posts:state,
	}
}
export default connect(mapStateToProps)(AllPost);
