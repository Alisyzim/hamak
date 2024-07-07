import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-bnag72hdxz0u12qv.eu.auth0.com"
     clientId="GflqkyBHaHnGFXKfSd8xaZnz3SSXYkNa"
     authorizationParams={{
      redirect_uri: "https://hamak-two.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
