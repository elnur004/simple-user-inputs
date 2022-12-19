import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userAgeInput, setUserAgeInput] = useState('');

  const userNameHandler = (event) => {
    setUserNameInput(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAgeInput(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (!isNaN(userNameInput) || userNameInput === '')
      return alert('Enter valid Username!');

    if (userAgeInput <= 0) return alert('Enter valid age (>0)!');

    props.onAddUsers(userNameInput.trim(), +userAgeInput);
    console.log(userNameInput.trim(), +userAgeInput);
    setUserNameInput('');
    setUserAgeInput('');
  };

  return (
    <div>
      <ErrorModal title="Error has occured!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userNameInput}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={userAgeInput}
            onChange={userAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
