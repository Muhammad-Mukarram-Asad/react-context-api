import React, { useState, useContext} from "react";
import { AppContext } from "../context";


function AddUser() {
  const { dispatchUser, handleInputChange, handleEditUser } = useContext(AppContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");


  const handleAddUser = () => {
    // here below is the destructurize way of key:value pairs
    let user_credentials = {
      id,
      name,
      age,
      bio,
    };

    dispatchUser("Add_User", { newUser: user_credentials });
    setId("");
    setName("");
    setAge("");
    setBio("");
  };

  function disableInput() {
    let target_input = document.getElementById("targetInput");
    target_input.value = "";
  }

  return (
    <div
      style={{
        width: "500px",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginLeft: "30%",
        marginTop: "20px",
        border: "2px solid black",
      }}
    >
      {/* <input onChange={(e) => handleInputChange(e)} /> */}

      <div
        style={{
          width: "400px",
          height: "160px",
          border: "2px solid blue",
          marginBottom: "10px",
          marginLeft: "7%",
          marginTop: "10px",
        }}
      >
        <label
          style={{
            color: "black",
            fontSize: "25px",
            textDecoration: "underline",
          }}
        >
          Enter Your Id Below:
        </label>

        <input
          style={{
            fontSize: "22px",
            width: "300px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "10px",
            marginTop: "15px",
            textIndent: "10px",
          }}
          type="number"
          value={id}
          placeholder="Write your id here"
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      <div
        style={{
          width: "400px",
          height: "160px",
          border: "2px solid blue",
          marginBottom: "10px",
          marginLeft: "7%",
          marginTop: "10px",
        }}
      >
        <label
          style={{
            color: "black",
            fontSize: "25px",
            textDecoration: "underline",
          }}
        >
          Enter Your Name Below:
        </label>

        <input
          style={{
            fontSize: "22px",
            width: "300px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "10px",
            marginTop: "15px",
            textIndent: "10px",
          }}
          type="text"
          value={name}
          placeholder="Write your name here"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div
        style={{
          width: "400px",
          height: "160px",
          border: "2px solid blue",
          marginBottom: "10px",
          marginLeft: "7%",
          marginTop: "10px",
        }}
      >
        <label
          style={{
            color: "black",
            fontSize: "25px",
            textDecoration: "underline",
          }}
        >
          Enter Your Age Below:
        </label>

        <input
          style={{
            fontSize: "22px",
            width: "300px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "10px",
            marginTop: "15px",
            textIndent: "10px",
          }}
          type="number"
          value={age}
          placeholder="Write your age here"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div
        style={{
          width: "400px",
          height: "160px",
          border: "2px solid blue",
          marginBottom: "10px",
          marginLeft: "7%",
          marginTop: "10px",
        }}
      >
        <label
          style={{
            color: "black",
            fontSize: "25px",
            textDecoration: "underline",
          }}
        >
          Enter Your short intro Below:
        </label>

        <input
          style={{
            fontSize: "22px",
            width: "300px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "10px",
            marginTop: "15px",
            textIndent: "10px",
          }}
          type="text"
          value={bio}
          placeholder="Tell us about yourself here"
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      <button
        style={{
          color: "white",
          backgroundColor: "black",
          textAlign: "center",
          fontSize: "25px",
          cursor: "pointer",
          width: "250px",
          height: "40px",
          borderRadius: "15px",
          marginLeft: "20%",
        }}
        onClick={handleAddUser}
      >
        Add User
      </button>

      <input
        id="targetInput"
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
        onChange={(e) => handleInputChange(e)}
        placeholder="Enter Your Friend Name:"
      />
      <button
        style={{
          color: "white",
          backgroundColor: "grey",
          textAlign: "center",
          fontSize: "25px",
          cursor: "pointer",
          width: "250px",
          height: "40px",
          borderRadius: "15px",
          marginLeft: "20%",
        }}
        onClick={disableInput}
      >
        Finish
      </button>
    </div>
  );
}

export default AddUser;
