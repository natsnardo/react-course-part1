import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AppForm from "./AppForm.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppForm />
    </StrictMode>
);
