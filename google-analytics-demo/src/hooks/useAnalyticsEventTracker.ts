import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category: string) => {
  const trackEvent = (action: string, label?: string) => {
    ReactGA.event({ category, action, label });
  };

  return { trackEvent };
};

export default useAnalyticsEventTracker;
