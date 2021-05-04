const AddUser = (props) => {
  return (
    <form>
      <label>Username</label>
      <input type="text" htmlFor="username" id="username" />
      <label>Age (Years)</label>
      <input type="number" htmlFor="age" id="age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
