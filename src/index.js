import React from "react"; // import React from "react/react.js";
import ReactDOM from "react-dom/client"; // import ReactDOM from "react-dom";
import App from "./App"; 
import "./index.css"; // import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
) 