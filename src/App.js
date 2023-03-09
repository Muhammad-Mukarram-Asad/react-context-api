import "./App.css";
import { AppContext } from "./context";
import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { useReducer } from "react";

// import LoginUseReducer from "./components/PerfectExample";


function reducer(state, action) {
  if(action.type === "edit_user_id")
  {
    return {
      id: action.newId,
      age: state.age,
      bio: state.bio,
      name: state.name 
  }
  }
  else if(action.type === "edit_user_name")
  {
    return {
      name: action.newName,
      id: state.id,
      age: state.age,
      bio: state.bio 
      }
  }
  else if(action.type === "edit_user_age")
  {
    return {
      age: action.newAge,
      bio: state.bio,
      id: state.id,
      name: state.name

  }
  }

  else if(action.type === "edit_user_bio")
  {
    return {
      bio: action.newBio,
      age: state.age,
      id: state.id,
      name: state.name
  }
  }
  else if (action.type === "incremented_age") {
    return {
      names: state.names,
      ages: state.ages + 1,
    };
  } else if (action.type === "decremented_age") {
    return {
      names: state.names,
      ages: state.ages - 1,
    };
  } else if (action.type === "age") {
    return {
      names: state.names,
      ages: state.ages + 3,
    };
  }

//   else if(action.type === 'changed_name')
//   {
//     return {
//       name: action.nextName,
//       age: state.age
//     }
//   }
  
  else if(action.type === 'changed_heading')
  {
    return {
      names: state.names,
      ages: action.ages,
      heading: action.newHeading
    }
  }
  else{
    alert("Chl beta chutti kr");
  }
 }

function App() {
  // Below is the code of useReducer Hook:

  const [heading, setHeading] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  
  // useReducer Below:
  const [state, dispatch] = useReducer(reducer, {names:"mukii", ages:10,id, name, age, bio, heading});

  function handleEditUserId(e)
  {
    dispatch({
      type: 'edit_user_id',
      newId: e.target.value,
    })
  }

  function handleEditUserName(e)
  {
    dispatch({
      type: 'edit_user_name',
      newName: e.target.value,
    })
  }

  function handleEditUserAge(e)
  {
    dispatch({
      type: 'edit_user_age',
      newAge: e.target.value,
    })
  }

  function handleEditUserBio(e)
  {
    dispatch({
      type: 'edit_user_bio',
      newBio: e.target.value,
    })
  }
  
  function handleHeading(e) {
    dispatch({
      type: 'changed_heading',
      newHeading: e.target.value
    });
  }

  // function handleInputChange(e) {
  //   dispatch({
  //     type: 'changed_name',
  //     nextName: e.target.value
  //   });
  // }

  /*
  
  *_________________________*__________________________*_______________________________*

  */

   const [users, setUsers] = useState([]);
  // In my opinion, below is the redux reducer type method:

  // Reducer Function Below:
  const dispatchUser = (actionType, data) => {
    switch (actionType) {
      case "Add_User":
        console.log("Users Array before adding --> ", users);
        setUsers([...users, data.newUser]);
        console.log("Users Array after adding --> ", users);
        return;
      case "Remove_User":
        setUsers(users.filter((user) => user.id !== data.userId));
        console.log("Users Array in deleting mode --> ", users);
        return;
      case "Edit_User":
        // setUsers(users.filter((user) => user.id === data.userId));
        console.log("Users Array in editing mode --> ", users);
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
    temp_users[index].name = name;
    temp_users[index].age = age;
    temp_users[index].bio = bio;
    setUsers(temp_users);
  };
  // const editTask = (text) => {
  //   const newTask = [...tasks];
  //   const index = newTask.findIndex((task) => task.id === PopUp.item.id);
  //   newTask[index].topic = text.topic;
  //   newTask[index].content = text.content;
  //   setTasks(newTask);
  //   localStorage.setItem("tasks", JSON.stringify(newTask));
  // };

  return (
    <div className="App">
      {/* <LoginUseReducer /> */}
      <AppContext.Provider value={{ users,editUser, dispatchUser, handleHeading, handleEditUserId,handleEditUserAge, handleEditUserBio, handleEditUserName }}>
       
        {/* Below are the children of AppContext Method:
          means the children can now easily use the above values...
        */}
       
        <AddUser />
        <UserList /> 
      
      </AppContext.Provider>

      {/* 
      
      *_________________________*__________________________*___________________________*
      
      */}


      <div>
        <p style={{color:"white", backgroundColor:"black", fontSize:"25px"}}>
          Hello! Your name is {state.names} and you are {state.ages} years old.<br />
          Your professional title is {state.heading}. <br />
          Your Office Card details are as follows: <br />
          Id is = {state.id} <br />
          name is = {state.name} <br />
          age is = {state.age} <br />
          bio is = {state.bio} <br />

        </p>
        <button
          onClick={() => {
            dispatch({ type: "incremented_age" });
          }}
          >
          Increment Age
        </button>

        <button
          onClick={() => {
            dispatch({ type: "decremented_age" });
          }}
        >
          {" "}
          Decrement Age{" "}
        </button>

        <button
          onClick={() => {
            dispatch({ type: "age" });
          }}
        >
          {" "}
          Increment Age To Three Times{" "}
        </button> 


      </div>
       
    </div>
  );
}

export default App;
