import React from "react"; // import React from "react/react.js";
import { createRoot } from 'react-dom/client'; // import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // import "./index.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
) 