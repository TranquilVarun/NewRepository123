import React from "react";
import ReactDOMClient from "react-dom/client";
import { HellaLandingPage } from "./screens/HellaLandingPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HellaLandingPage />);
