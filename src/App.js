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
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
