import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CountriesData from './context/CountriesData.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <CountriesData>
    <App />
  </CountriesData>
);
