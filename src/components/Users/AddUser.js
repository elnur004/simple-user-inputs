import { useState } from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';

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

    const userInput = {
      name: userNameInput.trim(),
      age: +userAgeInput,
    };

    if (!isNaN(userInput.name) || userInput.name === '')
      return alert('Enter valid Username!');

    if (userInput.age <= 0) return alert('Enter valid age (>0)!');

    console.log(userInput.name, userInput.age);
    setUserNameInput('');
    setUserAgeInput('');
  };

  return (
    <Card styleName={style.input}>
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
  );
};

export default AddUser;
