import React, { useState } from 'react';
import AddUsersForm from './components/Users/AddUsersForm';
import UsersList from './components/Users/UsersList';

const STATIC_USERS = [
  { name: 'Max', age: 32, key: '1' },
  { name: 'Vitalii', age: 28, key: '2' },
  { name: 'Valerii', age: 27, key: "3" }
]


const App = () => {

  const [user, setUser] = useState(STATIC_USERS);

  const addNewUserHandler = (userName, userAge) => {
    setUser(prevState => {

      const randomID = Math.random().toString()
      return [
        ...prevState,
        {
          name: userName,
          age: userAge,
          key: randomID
        }
      ]
    })
  }

  return (
    <div>
      <AddUsersForm onAddUser={addNewUserHandler} />
      <UsersList users={user} />
    </div>
  );
}

export default App;
