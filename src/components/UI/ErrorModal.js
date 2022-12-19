import Card from './Card';
import Button from './Button';

const ErrorModule = () => {
  return (
    <Card>
      <header>
        <h2>Header</h2>
      </header>
      <div>
        <p>Error Message</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModule;
