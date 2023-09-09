import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ResultsProvider } from "./contex/ResultsContext.tsx";
import { ShoppingCartProvider } from "./contex/ShoppingCartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <ResultsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ResultsProvider>
    </ShoppingCartProvider>
  </React.StrictMode>
);
