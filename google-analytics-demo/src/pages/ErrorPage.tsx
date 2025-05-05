import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Opps! There is an unexpected error</h1>
      <p>We are working on it.</p>
      <Button as={Link as any} variant="outline-primary" to="/">
        Back to home
      </Button>
    </>
  );
};

export default ErrorPage;
