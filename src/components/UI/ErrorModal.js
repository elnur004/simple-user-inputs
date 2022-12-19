import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.modal.css';

const ErrorModule = () => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Header</h2>
      </header>
      <div className={classes.content}>
        <p>Error Message</p>
      </div>
      <footer className={classes.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModule;
