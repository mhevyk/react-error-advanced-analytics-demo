// import useInitAnalytics from "@/hooks/useInitAnalytics";
import routes from "@/router/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // useInitAnalytics({ withPageTracking: true });

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
