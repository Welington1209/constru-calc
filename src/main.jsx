import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Tijolos from "./pages/Tijolos.jsx";
import { ListContext, ListProvider } from "./context/listContext.jsx";
import Lista from "./pages/Lista.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="/tijolos" element={<Tijolos />}></Route>
            <Route path="lista" element={<Lista />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ListProvider>
  </StrictMode>
);
