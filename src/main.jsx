import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "reflect-metadata";
import { AuthProvider } from "./contexts/auth";
import { CartProvider } from "./contexts/cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
