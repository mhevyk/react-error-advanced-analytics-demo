import useAnalyticsEventTracker from "@/hooks/useAnalyticsEventTracker";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const { trackEvent } = useAnalyticsEventTracker("NotFoundPage");
  return (
    <>
      <h1>404 Not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button
        as={Link as any}
        variant="outline-primary"
        to="/"
        onClick={() => trackEvent("Click", "Back to home button clicked")}
      >
        Back to home
      </Button>
    </>
  );
};

export default NotFoundPage;
