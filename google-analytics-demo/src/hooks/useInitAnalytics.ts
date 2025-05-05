import { useEffect } from "react";
import ReactGA from "react-ga4";

type UseInitAnalytics = {
  withPageTracking?: boolean;
};

const useInitAnalytics = ({ withPageTracking }: UseInitAnalytics = {}) => {
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);

    if (withPageTracking) {
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
      });
    }
  }, [withPageTracking]);
};

export default useInitAnalytics;
