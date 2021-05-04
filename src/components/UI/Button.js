import style from './Button.module.css';

const Button = () => {
  return (
    <button type="submit" className={style.button}>
      Add User
    </button>
  );
};

export default Button;
