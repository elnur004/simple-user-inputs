import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // IMPLEMENTED useRef INSTEAD

  // const [userNameInput, setUserNameInput] = useState('');
  // const [userAgeInput, setUserAgeInput] = useState('');
  const [error, setError] = useState();

  // const userNameHandler = (event) => {
  //   setUserNameInput(event.target.value);
  // };

  // const userAgeHandler = (event) => {
  //   setUserAgeInput(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (!isNaN(enteredUserName) || enteredUserName === '') {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (enteredUserAge <= 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0 )',
      });
      return;
    }

    // if (!isNaN(userNameInput) || userNameInput === '') {
    //   setError({
    //     title: 'Invalid input',
    //     message: 'Please enter a valid name and age (non-empty values)',
    //   });
    //   return;
    // }
    // if (userAgeInput <= 0) {
    //   setError({
    //     title: 'Invalid age',
    //     message: 'Please enter a valid age ( > 0 )',
    //   });
    //   return;
    // }

    // props.onAddUsers(userNameInput.trim(), +userAgeInput);
    // console.log(userNameInput.trim(), +userAgeInput);

    // Controlled(input components) way accessing the input value
    // setUserNameInput('');
    // setUserAgeInput('');
    props.onAddUsers(enteredUserName.trim(), +enteredUserAge);
    console.log(enteredUserName.trim(), +enteredUserAge);

    // Uncontrolled(input components) way accessing the input value
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={userNameInput}
            // onChange={userNameHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            // value={userAgeInput}
            // onChange={userAgeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
