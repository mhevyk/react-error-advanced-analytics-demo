import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Button as={Link as any} variant="primary" to="/products">
        Buy products
      </Button>
    </>
  );
};

export default HomePage;
