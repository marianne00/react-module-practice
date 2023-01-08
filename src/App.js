import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'charm',
      age: 8
    },
    {
      name: 'chino',
      age: 13
    }
  ]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ name: newUser.name, age: newUser.age })
      return updatedUsers;
    });

    return true;
  }

  return (
    <div className="App">
      <Form onAddUser={addUserHandler} />
      <UserList users={users}/>
    </div>
  );
}

export default App;
