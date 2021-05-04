const AddUser = (props) => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" id="age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
