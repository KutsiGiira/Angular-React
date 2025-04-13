import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Aicademy } from "./screens/Aicademy";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Aicademy />
  </StrictMode>,
);
