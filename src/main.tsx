import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import App2 from "./App2.tsx";
import App3 from "./App3.tsx";
import App4 from "./App4.tsx";
import UpdatingState from "./UpdatingState.tsx";
import UpdatingStateWithImmer from "./UpdatingStateWithImmer.tsx";
// import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
        <App2 />
        <App3 />
        <div className="border-2 border-dashed border-gray-400 p-4 m-4">
            <h2 className="text-xl font-bold mb-4">
                State Management Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                        Traditional State Updates
                    </h3>
                    <UpdatingState />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                        Immer State Updates
                    </h3>
                    <UpdatingStateWithImmer />
                </div>
            </div>
        </div>
        <App4 />
    </StrictMode>
);
