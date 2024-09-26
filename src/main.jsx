import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/Route";
import ShopContextProvider from "./context/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container px-4 mx-auto">
    <React.StrictMode>
      <ShopContextProvider>
        <RouterProvider router={router} />
      </ShopContextProvider>
    </React.StrictMode>
  </div>
);
