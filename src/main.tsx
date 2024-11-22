import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "ino-ui-tv/dist/styles/styles.css";
import App from "./App.tsx";
import "ino-ui-tv/src/styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
