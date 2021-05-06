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
      userName: userNameInput.trim(),
      userAge: +userAgeInput,
    };

    if (!isNaN(userInput.userName) || userInput.userName === '')
      return alert('Enter valid Username!');

    if (userInput.userAge <= 0) return alert('Enter valid age (>0)!');

    console.log(userInput);
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
          onInput={userNameHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={userAgeInput}
          onInput={userAgeHandler}
        />
        <Button />
      </form>
    </Card>
  );
};

export default AddUser;
