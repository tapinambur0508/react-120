import { createRoot } from "react-dom/client";

import App from "./components/App/App";

import "./index.css";

const root = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(<App />);
}
