import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Prathamesh } from "./screens/Prathamesh";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Prathamesh />
  </StrictMode>,
);
