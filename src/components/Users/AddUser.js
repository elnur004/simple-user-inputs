import { useState } from 'react';

const AddUser = (props) => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userAgeInput, setUserAgeInput] = useState(0);

  const userNameHandler = (event) => {
    setUserNameInput(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAgeInput(event.target.value);
  };

  const addUserNameHandler = (event) => {
    event.preventDefault();

    const userInput = {
      userName: userNameInput,
      userAge: +userAgeInput,
    };
    console.log(userInput);
  };

  return (
    <form onSubmit={addUserNameHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onInput={userNameHandler} />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" id="age" onInput={userAgeHandler} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
