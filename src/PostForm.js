import React,{useState} from 'react';
import {connect} from 'react-redux';
function PostForm(props) {
  
	const initialFormState={
		name:'',
		address:'',
		editing:false,
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
		id:new Date(),
		name:  user.name,
		address: user.address,
		editing:user.editing,
	}

	props.dispatch({
		type:'ADD_POST',
		payload,
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

		      		<button>ADD Data</button>

	      </form>
	      
    </div>
  );
}

export default connect() (PostForm);
