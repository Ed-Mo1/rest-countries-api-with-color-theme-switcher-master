import CountryInfo from "./routes/CountryInfo";
import CountryList from "./routes/CountryList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./common/Layout";

const router = createBrowserRouter([
  {
    path: "/rest-countries-api-with-color-theme-switcher-master/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CountryList />,
      },
      {
        path: "country/:code",
        element: <CountryInfo />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
