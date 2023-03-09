import React, { useContext } from "react";
import { AppContext } from "../context";
import User from "./User";

function UserList() {
  // de-structurize the users list from app.js file which provide as a value to
  // AppContext.

  const { users, handleHeading, handleEditUserId,handleEditUserAge, handleEditUserBio, handleEditUserName } = useContext(AppContext);

  function disableInput() {
    let target_input = document.getElementsByClassName('targetInput')
    target_input.value = "";
  }

  // const passingDataToForm = () => {
  // 	{users.map(inner_user => <AddUser key={inner_user.id} userEditData={inner_user}  />)}
  // }

  return (
    <div>
      <input
        className="targetInput"
        style={{
          fontSize: "22px",
          width: "300px",
          height: "40px",
          border: "2px solid black",
          borderRadius: "10px",
          textIndent: "10px",
          margin: "10px 20%",
        }}
        type="text"
        onChange={(e) => handleHeading(e)}
        placeholder="Enter Your Professional Title:"
      />{" "}
      <br />
      <input
        className="targetInput"
        style={{
          fontSize: "22px",
          width: "300px",
          height: "40px",
          border: "2px solid black",
          borderRadius: "10px",
          textIndent: "10px",
          margin: "10px 20%",
        }}
        type="number"
        onChange={(e) => handleEditUserId(e)}
        placeholder="Enter Your Professional Id:"
      />{" "}

      <br />

      <input
        className="targetInput"
        style={{
          fontSize: "22px",
          width: "300px",
          height: "40px",
          border: "2px solid black",
          borderRadius: "10px",
          textIndent: "10px",
          margin: "10px 20%",
        }}
        type="text"
        onChange={(e) => handleEditUserName(e)}
        placeholder="Enter Your Professional name:"
      />{" "}

      <br />

      <input
        className="targetInput"
        style={{
          fontSize: "22px",
          width: "300px",
          height: "40px",
          border: "2px solid black",
          borderRadius: "10px",
          textIndent: "10px",
          margin: "10px 20%",
        }}
        type="number"
        
        onChange={(e) => handleEditUserAge(e)}
        placeholder="Enter Your Professional age:"
      />{" "}

      <br />

      <input
        className="targetInput"
        style={{
          fontSize: "22px",
          width: "300px",
          height: "40px",
          border: "2px solid black",
          borderRadius: "10px",
          textIndent: "10px",
          margin: "10px 20%",
        }}
        type="text"
      
        onChange={(e) => handleEditUserBio(e)}
        placeholder="Enter Your Professional bio:"
      />{" "}

      <br />

      <button
        style={{
          color: "white",
          backgroundColor: "grey",
          textAlign: "center",
          fontSize: "25px",
          cursor: "pointer",
          width: "300px",
          height: "70px",
          borderRadius: "15px",
          marginLeft: "1%",
        }}
        onClick={disableInput}
      >
        Finish Editing Professional Input
      </button>

      <h3>Available Users List Below:</h3>
      {users.map((inner_user) => (
        <User key={inner_user.id} userData={inner_user} />
      ))}
    </div>
  );
}

export default UserList;
