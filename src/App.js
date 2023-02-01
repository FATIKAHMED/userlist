import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import Userlist from './Components/Users/Userlist';


function App() {

  const [UsersList, setUsersList] = useState([])

  const addUserHandler = (uName , uAge) =>{
    setUsersList((prevUserslist) => {
      return [...prevUserslist , {name: uName , age: uAge , id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <Userlist users={UsersList}/>
    </div>
  );
}

export default App;
