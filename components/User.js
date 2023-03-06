import React, {useContext} from 'react'
import { AppContext } from '../context'
// import AddUser from './AddUser';

function User({userData}) {
	// Above in the parameter, we de-structurize the prop "userData" which is given
	//  in userList.js file

    const { dispatchUser } = useContext(AppContext);

	const handleRemoveUser = () => {
		dispatchUser('Remove_User', { userId: userData.id });
	};

	const handleEditUser = () =>{
		console.log("Edit user selected:");


		// console.log(userData);
		console.log(userData.id);
		console.log(userData.name);
		console.log(userData.age);
		console.log(userData.bio);


	//  <AddUser editName={userData.name} editAge={userData.age} editBio={userData.bio} />

	}
  return (
    <div style={{border:"2px solid white", backgroundColor:"black", color:"white",
	textAlign:"center", width:"400px", height:"250px", marginLeft:"30%"}}>
        <h1>{userData.name}</h1>
		<h2>{userData.age}</h2>
		<h3>{userData.bio}</h3>
		
		<button onClick={handleRemoveUser} style={{color:"white", backgroundColor:"red",
		 textAlign:"center", fontSize:"25px",cursor:"pointer", 
		 width:"250px", height:"35px", borderRadius:"15px"}}> Delete this User </button>
      
	  <button onClick={handleEditUser} style={{color:"white", backgroundColor:"darkgreen",
		 textAlign:"center", fontSize:"25px",cursor:"pointer", 
		 width:"250px", height:"35px", borderRadius:"15px"}}> Edit this User </button>
      
    </div>
  )
}

export default User
