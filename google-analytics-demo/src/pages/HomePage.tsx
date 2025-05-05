import useAnalyticsEventTracker from "@/hooks/useAnalyticsEventTracker";
import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { trackEvent } = useAnalyticsEventTracker("HomePage");

  const handleProductsClick = () => {
    trackEvent("Click", "Buy products button clicked");
  };

  const testCTAButton = () => {
    trackEvent("Click", "Test CTA button clicked");
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Stack direction="vertical" gap={2}>
        <Button
          as={Link as any}
          variant="primary"
          to="/products"
          onClick={handleProductsClick}
          className="align-self-start"
        >
          Buy products
        </Button>
        <Button
          variant="warning"
          onClick={testCTAButton}
          className="align-self-start"
        >
          Test CTA Button
        </Button>
      </Stack>
    </>
  );
};

export default HomePage;
