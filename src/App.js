import logo from "./logo.svg";
import "./App.css";
import { AppContext } from "./context";
import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  // In my opinion, below is the redux reducer type method:

  const dispatchUser = (actionType, data) => {
    switch (actionType) {
      case "Add_User":
        setUsers([...users, data.newUser]);
        return;
      case "Remove_User":
        setUsers(users.filter((user) => user.id !== data.userId));
        return;
      
      default:
        return;
    }
  };

  const editUser = (id, name, age, bio) => {
    let temp_users = [...users];
    console.log(temp_users);
    console.log("props id --> ", id);
    let index = temp_users.findIndex((user) => user.id === id);
    console.log("index --> ", index);
    console.log(temp_users[index].name);
    console.log(temp_users[index].age);
    console.log(temp_users[index].bio);    
    temp_users[index].name = name
    temp_users[index].age =  age;
    temp_users[index].bio =  bio;
    setUsers(temp_users);


  }
  // const editTask = (text) => {
  //   const newTask = [...tasks];
  //   const index = newTask.findIndex((task) => task.id === PopUp.item.id);
  //   newTask[index].topic = text.topic;
  //   newTask[index].content = text.content;
  //   setTasks(newTask);
  //   localStorage.setItem("tasks", JSON.stringify(newTask));
  // };

  return <div className="App">
    <AppContext.Provider value={{ users, dispatchUser, editUser }}>
      {/* Below are the children of AppContext Method:
          means the children can now easily use the above values...
      */}
				<AddUser />
				<UserList />
			</AppContext.Provider>
  </div>;
}

export default App;
