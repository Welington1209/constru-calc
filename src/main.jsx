import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Tijolos from "./pages/Tijolos.jsx";
import { ListProvider } from "./context/listContext.jsx";
import Lista from "./pages/Lista.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListProvider>
      <BrowserRouter basename="/constru-calc">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="tijolos" element={<Tijolos />} />
            <Route path="lista" element={<Lista />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ListProvider>
  </StrictMode>
);
