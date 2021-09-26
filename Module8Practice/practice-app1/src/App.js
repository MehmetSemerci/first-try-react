import AddUser from './Components/Users/AddUser/AddUser';
import './App.css';
import { useState } from 'react';
import UserList from './Components/Users/UserList/UserList';
import ErrorModal from './Components/UI/ErrorModal/ErrorModal';

function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState();

  function addUsernameHandler(enteredUser) {
    setUserList(prevUserList =>  {
      const newUserList = [...prevUserList];
      newUserList.unshift(enteredUser);
      return newUserList;
    })
  }

  function onDeleteUserHandler(userId){
    setUserList(prevUserList => {
      const newUserList = prevUserList.filter(user => user.id !== userId);
      return newUserList;
    })
  }

  function onErrorHandler(errorObject){
    setError({title:errorObject.title, message:errorObject.message});
  }

  function errorReturnHandler(){
    setError();
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClick={errorReturnHandler}/>}
      <AddUser onUserInsert={addUsernameHandler} onError={onErrorHandler}></AddUser>
      <UserList items={userList} onDeleteUser={onDeleteUserHandler}/>
    </div>
  );
}

export default App;
