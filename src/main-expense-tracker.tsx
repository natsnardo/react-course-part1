import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ExpenseApp from "./ExpenseTracker/ExpenseApp";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div className="container mt-5">
            <h1 className="mb-4">Expense Tracker</h1>
            <ExpenseApp />
        </div>
    </StrictMode>
);
