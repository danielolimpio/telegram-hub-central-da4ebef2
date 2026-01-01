import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Check if the page was pre-rendered (has children)
if (rootElement.hasChildNodes()) {
  // Hydrate pre-rendered content
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Normal client-side render
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// Dispatch event for prerender plugin
document.dispatchEvent(new Event("render-event"));
