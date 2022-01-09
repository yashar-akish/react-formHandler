import React, {useState, Fragment} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler =(username, userAge)=>{
    setUsersList((prevUserList)=>{
      return [...prevUserList, {number:prevUserList.length+1 ,name: username, age: userAge, id: Math.random().toString()}];
    })
  }
  
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
