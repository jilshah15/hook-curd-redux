import React,{useState} from 'react';
import {connect} from 'react-redux';
function EditPost(props) {
  
	const initialFormState={
		name:props.post.name,
		address:props.post.address,

	}
//----------------------------------------------------------------------------	
const[user,SetUser]=useState(initialFormState);
console.log(user);
//----------------------------------------------------------------------------
const handleInputChange=event=>{
	const{name,value}=event.target
	SetUser({
		...user,[name]:value
	})
}
//=========================================================================
const handleSubmit=event=>{
	event.preventDefault();
	const payload={
		
		name   : user.name,
		address: user.address,
	}

	props.dispatch({
		type:'UPDATE_POST',
		payload,
		id:props.post.id,
	})
}	
	

//======================================================================
  return (
    <div>
	      <h1>Registration Form</h1>
	      <form onSubmit={handleSubmit}>
			
	      		<div>
	      			<label>Name</label>
	      			<input name="name" onChange={handleInputChange} defaultValue={user.name}/>
	      		</div>
	      			<div>
		      			<label>Address</label>
		      			<textarea name="address" onChange={handleInputChange} defaultValue={user.address}/>
		      		</div>

		      		<button>UPDATE Data</button>

	      </form>
	      
    </div>
  );
}

export default connect() (EditPost);
