import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routers/AppRoutes";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
