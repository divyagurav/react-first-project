import React, { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge }];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
