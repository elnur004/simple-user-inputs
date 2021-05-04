import { useState } from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userAgeInput, setUserAgeInput] = useState(0);

  const userNameHandler = (event) => {
    setUserNameInput(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAgeInput(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    const userInput = {
      userName: userNameInput,
      userAge: +userAgeInput,
    };
    console.log(userInput);
  };

  return (
    <Card styleName={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onInput={userNameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" onInput={userAgeHandler} />
        <Button />
      </form>
    </Card>
  );
};

export default AddUser;
