import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { OpenMenuMobileProvider } from "./context/OpenMenuMobileProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <OpenMenuMobileProvider>
        <App />
      </OpenMenuMobileProvider>
    </AuthProvider>
  </StrictMode>
);
