import React, {useContext} from 'react'
import { AppContext } from '../context';
import User from './User';

function UserList() {
    // de-structurize the users list from app.js file which provide as a value to 
    // AppContext.

    const { users } = useContext(AppContext);
	return (
		<div>
			<h3>Available Users List Below:</h3>
			{users.map(inner_user => <User key={inner_user.id} userData={inner_user}  />)}

		</div>
	);
};


export default UserList
