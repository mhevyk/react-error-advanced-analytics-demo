import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 Not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button as={Link as any} variant="outline-primary" to="/">
        Back to home
      </Button>
    </>
  );
};

export default NotFoundPage;
