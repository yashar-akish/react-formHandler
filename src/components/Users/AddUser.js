import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import classes from "./AddUser.module.css";

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameHandler = event =>{
    setEnteredUsername(event.target.value);
  }
  const ageHandler = event =>{
    setEnteredAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError(
        {
          title: 'invalid input',
          message: 'please enter a valid name and age (non-empty values).'
        }
      )
      return 
    }
    if(+enteredAge < 1) {
      setError(
        {
          title: 'invalid age',
          message: 'please enter a valid age (> 0).'
        }
      )
      return
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    setError(null);
  }
  return (
    <Wrapper >
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input} >
        <form onSubmit={addUserHandler} >
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={usernameHandler} value={enteredUsername}/>
          <label htmlFor="age">Age (Year)</label>
          <input type="number" id="age" onChange={ageHandler} value={enteredAge}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>

  );
};

export default AddUser;
